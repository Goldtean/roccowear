$(document).ready(function () {
    $('.links').on('click', '#tg', theGoods);
    $('.links').on('click', '#gtg', gimmieTheGoods);
    $('.links').on('click', '#wmts', whoMakesThisStuff);
    $('.links').on('click', '#hag', haveAGander);
    $('#have-a-gander').on('click', '.links', ganderAgain);
});

var theGoods = function(event) {
  event.preventDefault();
  $(".content").hide();
  $("#the-goods").show();
}

var gimmieTheGoods = function(event) {
  event.preventDefault();
  $(".content").hide();
  $("#gimmie-the-goods").show();
}

var whoMakesThisStuff = function(event) {
  event.preventDefault();
  $(".content").hide();
  $("#who-makes-this-stuff").show();
}

var haveAGander = function(event) {
  event.preventDefault();
  $(".content").hide();
  $('#gander-pic').remove();
  $("#have-a-gander").append(getRandom());
  $("#have-a-gander").show();
  numArray.splice(num, 1);
}



var ganderAgain = function () {
  event.preventDefault();
  $('#gander-pic').remove();
  $("#have-a-gander").append(getRandom());
  $("#have-a-gander").show();
  numArray.splice(num, 1);

}

// Close Menu In XS After Selection

$(function () {
  $('.navbar-collapse ul li a:not(.dropdown-toggle)').bind('click touchstart', function () {
    $('.navbar-toggle:visible').click();
  });
});