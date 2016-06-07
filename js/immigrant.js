$(document).ready(function () {
    $('.links').on('click', '#tg', theGoods);
    $('.links').on('click', '#gtg', gimmieTheGoods);
    $('.links').on('click', '#wmts', whoMakesThisStuff);
    $('.links').on('click', '#hag', haveAGander);
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
}

var getRandom = function () {
  var num = Math.floor((Math.random() * 26) + 1);
  var imgTag = '<img src="wireframe/RoccoLogoPhotoBook' + num + '.jpg" class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 img-responsive" id="gander-pic">';
  return imgTag;
}
      