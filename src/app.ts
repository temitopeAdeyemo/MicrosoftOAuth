import express from 'express';
import environment from './config/environment';
import errorHandler from './middlewares/errorHandler';
import routes from './routes/route';
const session = require('express-session');
require('dotenv').config();
const passport = require('passport');
import OauthService from './Oauth/OauthService';
// const fs = require('fs');

export default class App {
  app: express.Application;
  constructor() {
    this.app = express();

    this.app.use(express.json());

    this.app.use(
      session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
      })
    );

    this.app.use(passport.initialize());
    this.app.use(passport.session());
    new OauthService().setUpMicrosoftOauth();
    this.setRoutes();
    this.app.use(errorHandler);
  }

  setRoutes() {
    this.app.use(routes);
  }

  getApp() {
    return this.app;
  }

  listen() {
    const { port } = environment;
    this.app.listen(port, () => {
      console.log(`Listening at port ${parseInt(port)}`);
    });
  }
}
