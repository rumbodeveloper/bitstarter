#!/usr/bin/env node

var fs = require('fs');
var rest = require('restler');
var sys = require('util');

rest.get('http://google.com').on('complete', function(result) {
  if (result instanceof Error) {
    sys.puts('Error: ' + result.message);
    this.retry(5000); // try again after 5 sec
  } else {
    fs.writeFileSync("./.tmp/f1w.html",result);
  }
});
