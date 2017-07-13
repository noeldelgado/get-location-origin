'use strict';

module.exports = function() {
  var l = window.location;

  if (l.origin) {
    return l.origin;
  }

  var port = (l.port ? (':' + l.port) : '');

  return l.protocol + '//' + l.hostname + port;
}();
