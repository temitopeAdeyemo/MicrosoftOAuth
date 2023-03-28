import PassportService from '../passport-setup/Passport';
import config from '../config/environment';
class OauthService extends PassportService {
  constructor() {
    super();
    this.setUpMicrosoftOauth();
  }

  private async setUpMicrosoftOauth() {
    return await this.config({
      callbackURL: `${config.baseUrl}/redirect`,
      clientID: config.clientID,
      clientSecret: config.clientSecret,
      scope: ['user.read'],
    });
  }
}

export default OauthService;
