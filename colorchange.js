$(document).ready(function(){
    var colorList = [
    'black', 
    'blue',
    'gray',
    'green',
    'orange',
    'purple',
    'red',
    'white',
    'pink'
    ];
    for(i=0; i < colorList.length; i++){
    var myDiv = $("<div>");
    myDiv.addClass("color-box");
    myDiv.css("background-color", colorList[i]);
    $("body").append(myDiv);
 }
    $("#startColor").click(function(){ 
      var bodyColor = Math.floor(Math.random() * colorList.length) + 0;
     $("body").css("background-color",  colorList[bodyColor]);
     
    });
 
});