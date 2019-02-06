var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var PORT = process.env.PORT || 8080;
var exphbs = require("express-handlebars");
var app = express();
var routes = require("./controllers/burgers_controller.js");

// Serve static content for the app from the "public" directory in the app directory.
app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.


app.use("/", routes);

app.listen(PORT);