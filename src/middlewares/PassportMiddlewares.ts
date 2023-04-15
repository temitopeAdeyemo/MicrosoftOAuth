import passport from 'passport';
import { Request, Response, NextFunction } from 'express';
import config from '../config/environment';

class PassportMiddlewares {
  serviceName: string;
  constructor(serviceName: string) {
    this.serviceName = serviceName;
  }

  authenticate(serviceName: string) {
    return passport.authenticate(serviceName, { session: true });
  }

  redirect(serviceName: string) {
    return passport.authenticate(serviceName, {
      session: true,
      failureRedirect: `${config.baseUrl}/login`,
    });
  }

  authLogin(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        return res.redirect('/');
      }
      next();
    } catch (error: any) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }

  homepageAuth(req: Request, res: Response, next: NextFunction) {
    try {
      if (req.user) {
        return res.redirect('/auth/ok');
      }
      next();
    } catch (error: any) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
}

export default PassportMiddlewares;
