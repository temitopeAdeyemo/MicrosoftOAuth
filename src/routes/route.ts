import { Router } from 'express';
import Auth from '../controllers/auth';
import PassportMiddlewares from '../middlewares/PassportMiddlewares';

const router = Router();
const passportMiddlewares = new PassportMiddlewares('microsoft');
const auth = new Auth();

router.get('/', passportMiddlewares.homepageAuth, auth.homepage);
router.get('/auth/ok', passportMiddlewares.authLogin, auth.welcome);
router.get('/auth/logout', auth.logout);

router.get('/auth/microsoft', passportMiddlewares.authenticate('microsoft'));

router.get(
  '/redirect',
  passportMiddlewares.redirect('microsoft'),
  auth.redirect
);

export default router;
