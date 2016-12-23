(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = '89cb998dfee41c78387767141bee26ff372b1bc1';

},{}],2:[function(require,module,exports){


var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#usernameSubmit').click(function() {
    var user = $('#username').val();
    $('#username').val("");
    console.log('https://api.github.com/users/' + user + '?access_token=' + apiKey);

    $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey).then(function(response){
      $('.showUsers').text("");
      console.log(JSON.stringify(response));

      $('.showUsers').append("<h2>" + response[0].owner.login + "</h2>");
      $('.showUsers').append("<a href=" + response[0].owner.html_url + "><p>Link</p></a>");

      for (repository of response) {
        $('.showUsers').append("<h4>" + repository.name + "</h4>");
      }

    }).fail(function(error) {
      $('.showUsers').text(error.responseJSON.message);
    });

  });
});

},{"./../.env":1}]},{},[2]);
