
seajs.config({
  alias: {
    jquery: 'jquery/1.6.2/jquery'
  }
});

define(function(require) {

  var Submit = require('../mods/submit');
  var jQuery = require('jquery');

  return {

    init: function() {
      Submit.init();
      console.log('inited');
    }
  };
  
});
