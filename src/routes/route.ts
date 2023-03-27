import { Router } from 'express';
import Auth from '../controllers/auth';
import PassportMiddlewares from '../passport-setup/PassportMiddlewares';

const router = Router();
const passportMiddlewares = new PassportMiddlewares('microsoft');
const auth = new Auth();

router.get('/', auth.homepage);
router.get('/auth/ok', auth.welcome);
router.get('/auth/logout', auth.logout);

router.get('/auth/microsoft', passportMiddlewares.authenticate('microsoft'));

router.get(
  '/redirect',
  passportMiddlewares.redirect('microsoft'),
  auth.redirect
);

export default router;
