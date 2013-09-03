$(document).ready(function() {
	var basecamp = $('#basecampHeader');

var highrise = $('#highriseHeader');

var campfire = $('#campfireHeader');

var mainheader =$('#mainheader');

basecamp.hide();
highrise.hide();
campfire.hide();

$('#basecampBox').on('mouseover', function(){
highrise.hide();
campfire.hide();
mainheader.hide();
basecamp.show();
}); //end of mouseover for basecamp box

$('#basecampBox').on('mouseleave', function(){
highrise.hide();
campfire.hide();
mainheader.show();
basecamp.hide();
}); //end of mouseleave for basecamp box


$('#highriseBox').on('mouseover', function(){
basecamp.hide();
campfire.hide();
mainheader.hide();
highrise.show();
}); //end of mouseover for highrise box

$('#highriseBox').on('mouseleave', function(){
highrise.hide();
campfire.hide();
mainheader.show();
basecamp.hide();
}); //end of mouseleave for highrise box

$('#campfireBox').on('mouseover', function(){
highrise.hide();
basecamp.hide();
mainheader.hide();
campfire.show();
}); //end of mouseover for campfire box

$('#campfireBox').on('mouseleave', function(){
highrise.hide();
campfire.hide();
mainheader.show();
basecamp.hide();
}); //end of mouseleave for campfire box


}); // end of document ready function