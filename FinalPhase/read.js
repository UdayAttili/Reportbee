 $(document).ready(function () {

        $.getJSON("items.json", function (data) {
		
		for(var i=0;i<data.length;i++){
			localStorage.setItem(i,JSON.stringify(data[i]));
			localStorage.setItem("item_"+i,"no");
		}
		
			localStorage.setItem("temp",data.length-1);
});
});