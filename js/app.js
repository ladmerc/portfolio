$(document).ready(function() {

  $('#content').html('<center><img src="img/loading.gif" alt="loading..."></center>');
  var url = 'https://api.github.com/users/andela-lmeke/repos';
   
  var callback = function (json) {
    var viewHTML = '<ul class="properties_list">';
    console.log(json);
    $.each(json, function (index, item) {
      viewHTML += '<li class ="image_list">';
      viewHTML += '<a href="' + item.html_url + '">';
      // viewHTML += '<img src="' + item.owner.avatar_url + '" class="property_img"></a>';
      viewHTML += '<img src="img/' + item.name + '.png" class="property_img"></a>';
      viewHTML += '<span class="price">' +'id: ' +item.id + '</span>';
      viewHTML += '<div class="property_details">';
      viewHTML += '<h1>' + '<a href="' + item.html_url +'" target="_blank">'+item.name + '</a></h1>';
      viewHTML += '<h2>' + item.description + '</h2></div>';
      viewHTML += '</li>';
    });//end each
    // '..img/' +item.name + '.png'
    viewHTML += '</ul>'
    $('#content').html(viewHTML);
  }//end callback
   $.getJSON(url, callback);
});



$(".more_listing_btn").click(function() {
  var user = $(".login_btn").val();
  console.log(user);
  console.log("changing location");
  console.log(user);
  window.location = "https://github.com/" + user;
});

