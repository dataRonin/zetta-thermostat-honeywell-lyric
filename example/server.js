var zetta = require('zetta');
var Thermostat = require('../index');
var style = require('./apps/style');

zetta()
  .name("Honeywell Lyric")
  .use(Thermostat)
  .use(style)
  .link("http://dev.zettaapi.org")
  .listen(1337);
