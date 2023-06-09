import passport, { PassportStatic } from 'passport';
import OauthUserService from '../Oauth/OauthUserService';
import microsoftStrategy, {
  MicrosoftStrategyOptions,
} from 'passport-microsoft';

const MicrosoftStrategy = microsoftStrategy.Strategy;

abstract class PassportService {
  private passport: PassportStatic;
  private oauthUserService: OauthUserService;

  constructor() {
    this.oauthUserService = new OauthUserService();
    this.passport = passport;
    this.serialiseUser();
    this.deSerialiseUser();
  }

  private async serialiseUser() {
    passport.serializeUser((user: any, done) => {
      done(null, user.id);
    });
  }

  private async deSerialiseUser() {
    passport.deserializeUser((id: string, done) => {
      done(null, id);
    });
  }

  protected async config(config: MicrosoftStrategyOptions) {
    await this.execute(config);
  }

  private async execute(options: MicrosoftStrategyOptions) {
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
            const user = {
              email: profile.emails[0].value,
              id: profile.id,
            };

            await this.oauthUserService.create(user);
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
