

var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#usernameSubmit').click(function() {
    var user = $('#username').val();
    $('#username').val("");
    console.log('https://api.github.com/users/' + user + '?access_token=' + apiKey);

    $.get('https://api.github.com/users/' + user + '?access_token=' + apiKey).then(function(response){
      console.log(JSON.stringify(response));
      $('.showUsers').text("");
      $('.showUsers').append("<h2>" + response.login + "</h2>");
      $('.showUsers').append("<a href=" + response.html_url + "><p>Link</p></a>");
    }).fail(function(error) {
      $('.showUsers').text(error.responseJSON.message);
    });

  });
});
