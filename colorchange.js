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
    $("#ed").click(function(){ 
    for (i = 0; i < colorList.length; i++){
      $("body").Math.random(colorList.length);
    }
    });
 
});