var counter = 0;
var total = 0;

function subt(i)
{
num =  parseInt($('#itemcount_'+i+'').text());
if(num > 0)
document.getElementById("count_cart").innerHTML = minus();

}

function addt(i)
{
 var myObj = JSON.parse(localStorage.getItem(i));
var q = myObj["quantity"];

num =  parseInt($('#itemcount_'+i+'').text());
if(myObj.quantity != num)
 {
document.getElementById("count_cart").innerHTML = add();
}

}
var minus = (function () {
     return function () {return counter -= 1;}
})();

var add = (function () {
       return function () {return counter += 1;}
})();

function subt_remove(val){
var temp2 = val;
  var res = temp2.split("_");
 var i = res[1];

  num1 =  parseInt($('#itemcount_'+i+'').text());
 num2 =  parseInt($('#count_cart').text());
 counter = num2 - num1;
 document.getElementById("count_cart").innerHTML = counter;
}



function openNav() {
    document.getElementById("sidenav").style.width = "23%";
	
}
function closeNav() {
    document.getElementById("sidenav").style.width = "0px";
	
}




