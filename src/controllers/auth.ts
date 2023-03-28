import { Request, Response } from 'express';

class Auth {
  homepage(req: Request, res: Response) {
    try {
          return res.send('Home page');
    } catch (error) {
      console.log(error);
      
    }

  }

  welcome(req: Request, res: Response) {
    return res.send('Welcome');
  }

  logout(req: Request, res: Response): any {
    req.logout((err) => {
      if (err) {
        return res.send('ERROR: ' + err.message);
      }

      return res.redirect('/');
    });
  }

  redirect(req: Request, res: Response) {
    res.redirect('/auth/ok');
  }
}

export default Auth;
