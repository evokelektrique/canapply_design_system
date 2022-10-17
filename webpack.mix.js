const mix = require("laravel-mix");

mix.setPublicPath("dist/");
mix.setResourceRoot("../");
mix.js("resources/scripts/app.js", "dist/js");
mix.sass("resources/styles/app.scss", "dist/css");
