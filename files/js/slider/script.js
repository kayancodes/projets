


var img=[
"img/inte.png",
"img/dev2.png",
"img/exo.png"
];

var num = 0;

function next(){
var slider = document.getElementById("slider");
//
num++;
//
if(num >= img.length){
  num=0;
}
//
slider.src=img[num];
}




function prev(){
var slider = document.getElementById("slider");
num--;

if(num < 0){
  num = img.length-1;
}

slider.src=img[num];

}
