const UrlModel = require('../models/Url')
/* 
    /
    Landing Page
*/
const LandingPage = async (req, res) => {
    const allUrls = await UrlModel.find()
    res.render('landingPage', {
        allUrls: allUrls
    })
}

/*
    /shortenurl 
Create the short url 
Front end requires a well formed url
*/
const CreateShortLink = async (req, res) => {
    try {
        let formattedUrl = new URL(req.body.url.trim())
        await UrlModel.create({ entireUrl: formattedUrl })
        res.redirect('/')
    } catch (error) {
        // user submitted a malformatted url somehow
        console.log(error)
        res.send('please fix url formatting')
    }
}

/*
    /:shortenedurl 
find the url and redirect the user based on short link
*/
const RedirectShortLink = async (req, res) => {
    let UrlFound = await UrlModel.findOne({
        shortenedUrl: req.params.shortenedurl
    })
    // guard clause 
    if (UrlFound == null) res.sendStatus(404)

    // increment clicks as well as save the document
    UrlFound.clicks++;
    await UrlFound.save()

    // finally redirect the user
    res.redirect(UrlFound.entireUrl)
}

module.exports = {
    LandingPage,
    CreateShortLink, 
    RedirectShortLink
}