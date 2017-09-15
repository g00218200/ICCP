var intervalProcess;

function startTimer() {
	intervalProcess = setInterval("myInterval()", 1000);//1000为1秒钟
}

function stopTimer() {
    clearInterval(intervalProcess);
}

function uploadFile() {
	startTimer();
	var file = $("#file")[0].files[0], //文件对象
	fileNum = $("#file")[0].files[0].length,
	name = file.name, //文件名
	size = file.size, //总大小
	succeed = 0;
	var shardSize = 2 * 1024 * 1024, //以2MB为一个分片
	shardCount = Math.ceil(size / shardSize); //总片数
	updateProgress(0);
	for (var i = 0; i < shardCount; ++i) {
		//计算每一片的起始与结束位置
		var start = i * shardSize,
		end = Math.min(size, start + shardSize);
		//构造一个表单，FormData是HTML5新增的
		var form = new FormData();
		form.append("data", file.slice(start, end)); //slice方法用于切出文件的一部分
		form.append("name", name);
		form.append("total", shardCount); //总片数
		form.append("index", i + 1); //当前是第几片
		//Ajax提交
		$.ajax({
			url: "/upload",
			type: "POST",
			data: form,
			async: true, //异步
			processData: false, //很重要，告诉jquery不要对form进行处理
			contentType: false, //很重要，指定为false才能形成正确的Content-Type
			success: function(result) {
				console.log(result);
				updateProgress(20);
			}
		});
	}
}

function updateProgress(percentage) {
	$('.progress .progress-bar').html(percentage + "%");
	$('.progress .progress-bar').attr('style', "width:" + percentage + "%")
}

function myInterval()
{
   $.ajax({
	    type: "POST",
	    url: "/getProgress",
		dataType : "text",
		success : function(msg) {
			var data = msg;
			if (data == 100) {
				stopTimer();
			}
			console.log(msg);
			updateProgress(msg);
		}
	});
}