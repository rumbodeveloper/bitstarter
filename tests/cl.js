#!/usr/bin/env node

var fs = require('fs');
var program = require('commander');
var cheerio = require('cheerio');
var rest=require('restler');
var HTMLFILE_DEFAULT = "index.html";
var CHECKSFILE_DEFAULT = "checks.json";

var assertFileExists = function(infile) {
    var instr = infile.toString();
    if(!fs.existsSync(instr)) {
        console.log("%s does not exist. Exiting.", instr);
        process.exit(1); // http://nodejs.org/api/process.html#process_process_exit_code
    }
    return instr;
};


if(require.main == module) {
    program
        .option('-c, --checks <check_file>', 'Path to checks.json', String)
        .option('-f, --file <html_file>', 'Path to index.html', String)
        .option('-w, --webpage <web_page>','Web page url',String)
    .parse(process.argv);
	var c=program.checks;
	var f=program.file;
	var w=program.webpage;
	if (w=undefined){console.log("variable w vacia")};
	console.log(c);
	console.log(f);
	console.log(w);
}

