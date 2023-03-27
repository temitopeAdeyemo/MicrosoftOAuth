import passport, { PassportStatic } from 'passport';
import OauthUserService from '../Services/OauthUserService';
import microsoftStrategy, {
  MicrosoftStrategyOptions,
} from 'passport-microsoft';

const MicrosoftStrategy = microsoftStrategy.Strategy;

class PassportService {
  private passport: PassportStatic;
  private oauthUserService: OauthUserService;
  constructor() {
    this.oauthUserService = new OauthUserService();
    this.passport = passport;
    this.serialiseUser();
    this.deSerialiseUser();
  }

  private async serialiseUser() {
    this.passport.serializeUser(async (user, done) => {
      done(null, user);
    });
  }

  private async deSerialiseUser() {
    this.passport.deserializeUser((id, done) => {});
  }

  protected async setUp(options: MicrosoftStrategyOptions) {
    this.passport.use(
      new MicrosoftStrategy(
        options,
        async (
          accessToken: string,
          refreshToken: string,
          profile: any,
          done: (err?: Error | null, user?: Express.User, info?: object) => void
        ) => {
          try {
            const userData = {
              email: profile.emails[0].value,
              id: profile.id,
            };

            const user = await this.oauthUserService.create(userData);
            return done(null, user);
          } catch (error: any) {
            console.log(error);

            done(error);
          }
        }
      )
    );
  }
}

export default PassportService;
