import passport from 'passport';
import config from '../config/environment';

class PassportMiddlewares {
  serviceName: string;
  constructor(serviceName: string) {
    this.serviceName = serviceName;
  }

  authenticate(serviceName: string) {
    return passport.authenticate(serviceName, { session: false });
  }

  redirect(serviceName: string) {
    return passport.authenticate(serviceName, {
      session: false,
      failureRedirect: `${config.baseUrl}/login`,
    });
  }
}

export default PassportMiddlewares;
