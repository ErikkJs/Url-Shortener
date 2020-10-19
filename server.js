const Express = require("express");
const Mongoose = require("mongoose");
const BodyParser = require("body-parser");
const Keys = require("./config/keys");

require("./models/Url");
Mongoose.connect(Keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = Express();
app.use(Express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.use('/', require('./routes/urlRoutes'));

const PORT = process.env.PORT || 5000;

console.log(`Taking requests at Port: http://localhost:${PORT}` )
app.listen(PORT);