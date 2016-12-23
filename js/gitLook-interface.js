

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
