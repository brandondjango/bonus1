// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types


//(function () {



$(document).ready(function(){

//global list variable for the typeahead
var list = new Array();


//connect to the xml file
$.get( "http://www.mattbowytz.com/simple_api.xml?data=all", function(xml) {
	//alert("connected");

	 $(xml).find("item").each(function () {
		list.push(this.childNodes[0].nodeValue);
		//alert(list);
 });

	});// end get


//typeahead function
 $("input").keyup(function(){
var optionlist = [0,0,0,0,0];

	 for (i = 0; i < list.length; ++i) {
		 	if($("input").val() != "" && list[i].toLowerCase().indexOf($("input").val()) == 0){
					if(optionlist[0] == 0){
					$("#option1").val(list[i]);
					optionlist[0] = 1;
					}
					else if(optionlist[1] == 0){
					$("#option2").val(list[i]);
					optionlist[1] = 1;
					}
					else if(optionlist[2] == 0){
					$("#option3").val(list[i]);
					optionlist[2] = 1;
					}
					else if(optionlist[3] == 0){
					$("#option4").val(list[i]);
					optionlist[3] = 1;
					}
					else if(optionlist[4] == 0){
					$("#option5").val(list[i]);
					optionlist[4] = 1;
					};


				//alert(list[i]);
			};//end if
		};//end for
});//end keypress


//link to google search
$("#mainForm").submit(function(){
	//alert("form submit");
	var link = "https://www.google.com/#q=" + $("input").val();
	$("#mainForm").attr("action", link);
});



});//end document ready
