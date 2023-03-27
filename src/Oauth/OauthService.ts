import PassportService from '../passport-setup/Passport';

class OauthService extends PassportService {
  constructor() {
    super();
  }

  async setUpMicrosoftOauth() {
    const options = {
      callbackURL: `http://localhost:9000/redirect`,
      clientID: '1b0b1e2b-308d-4c21-8de0-617453cd4665',
      clientSecret: 'CSG8Q~-Aom8CBHiU2Vo1rv2AsuYzoSFdN0Rhda2i',
      scope: ['user.read'],
    };

    await this.setUp(options);
    return;
  }
}

export default OauthService;
