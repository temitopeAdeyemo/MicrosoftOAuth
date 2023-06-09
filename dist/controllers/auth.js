"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Auth {
    homepage(req, res) {
        return res.send('Home page, Please login.');
    }
    welcome(req, res) {
        return res.send('Welcome');
    }
    logout(req, res) {
        req.logout((err) => {
            if (err) {
                return res.send('ERROR: ' + err.message);
            }
            return res.redirect('/');
        });
    }
    redirect(req, res) {
        res.redirect('/auth/ok');
    }
}
exports.default = Auth;
