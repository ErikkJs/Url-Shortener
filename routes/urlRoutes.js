const Express = require('express');
const Router = Express.Router();
const UrlControllers = require('../controllers/urlControllers')

Router.get('/', UrlControllers.LandingPage)

Router.post('/shortenurl', UrlControllers.CreateShortLink)

Router.get('/:shortenedurl', UrlControllers.RedirectShortLink)

module.exports = Router