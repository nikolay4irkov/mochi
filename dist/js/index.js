"use strict";

var _console = console,
    log = _console.log;
var $ = jQuery;
var doc = $(document);
var body = $('body'); // Reinit some functions on Ajax calls

doc.ajaxComplete(function () {}); // Init on $(document).ready()

doc.ready(function () {});
log('Site dev: http://ihorduchenko.cloudaccess.host/');