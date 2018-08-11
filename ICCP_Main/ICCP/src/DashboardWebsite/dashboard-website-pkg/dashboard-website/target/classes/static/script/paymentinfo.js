$(document).ready(function(){
	var data = queryPaymentInfo();
	console.log(data);
});

function queryPaymentInfo()
{
   $.ajax({
	    type: "GET",
	    url: "/findUserInfo",
		dataType : "json",
		success : function(result) {
			var information = JSON.stringify(result); 
			return information;
		}
	});
}

function getFileName()
{
	var file = $("#file")[0].files[0]; //文件对象
	if (file == null || file == "undefined") {
		return "";
	}
	var name = file.name; //文件名
	console.log(name);
	return name;
}

function setData() {
}