var counter = 0;
var total = 0;
function item(val) {
if(document.getElementById(val).style.display != "block")
   {
   document.getElementById("count_cart").innerHTML = add(); 
   }
   document.getElementById(val).style.display = "block";
}
function subt()
{
document.getElementById("count_cart").innerHTML = minus();

}
var minus = (function () {
     return function () {return counter -= 1;}
})();

var add = (function () {
       return function () {return counter += 1;}
})();
function price_total(val,val2){
if(document.getElementById(val2).style.display != "block")
   {
total = total + val;
}
document.getElementById("price").innerHTML = "&#8377;"+total ;
}
function dec_total(val){
total = total - val;
document.getElementById("price").innerHTML = "&#8377;"+total ;
}

