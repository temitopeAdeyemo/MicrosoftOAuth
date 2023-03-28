import PassportService from '../passport-setup/Passport';
import config from '../config/environment';
class OauthService extends PassportService {
  constructor() {
    super();
  }

  async setUpMicrosoftOauth() {
    const options = {
      callbackURL: `http://localhost:9000/redirect`,
      clientID: config.clientID,
      clientSecret: config.clientSecret,
      scope: ['user.read'],
    };

    await this.setUp(options);
    return;
  }
}

export default OauthService;
