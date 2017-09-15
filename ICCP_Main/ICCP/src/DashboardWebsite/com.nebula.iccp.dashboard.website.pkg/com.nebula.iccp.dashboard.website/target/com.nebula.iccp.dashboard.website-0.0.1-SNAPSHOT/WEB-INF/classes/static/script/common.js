function openURL(args) {
	var requesturl = arguments[0];
	location.href=requesturl;
}

/* ----------------------------------------
 * description:对表格中的复选框进行全选操作
 * auth：guorui
 * param：[obj]需要执行操作的对象
 * ----------------------------------------
*/
function selectAll(obj){
	var status=$(obj).attr("checked");
	var id=$(obj).attr("id");
 	if(status=="checked"){
		$(":checkbox[id!="+id+"]").attr("checked","checked");
	}else{
	    $(":checkbox[id!="+id+"]").attr("checked",false);	
	}
}

/* ----------------------------------------
 * description:执行批量任务
 * auth：guorui
 * param：[url]需要执行的form地址
 * ----------------------------------------
*/
function batchExecute(url){
	var mulitId="";
	$(":checkbox:checked").each(function() {
	   if ($(this).val() != "")
	   {	  
	       mulitId = mulitId+","+$(this).val();
	   }
    });
	if (mulitId != "")
	{
	   $("#ListForm #mulitId").val(mulitId);
	   if(confirm("确定要执行该操作？"))
	   {
	      $("#ListForm").attr("action",url);
	      $("#ListForm").submit();
	   }
	} 
	else 
	{
      alert("至少选择一条数据记录");
	}
}

/* ----------------------------------------
 * description:表单分页
 * auth：guorui
 * param：[pagenumber]需要跳转到第pagenumber页
 * ----------------------------------------
*/
function gotoPage(pagenumber){
	jQuery("#currentPage").val(pagenumber);
	jQuery("#ListForm").submit();
}

//function heartBeat() {
//	jQuery.ajax({
//		type:'GET',
//		url:'/connect.htm',
//		data:{'username':username,'password':password,'verifycode':verifycode},
//		success: function(result) {
//            if (result.isSuccess) {
//            	window.location.href="$!webPath/core/index.htm"
//            } else {
//            	alert(result.message);
//            	refreshCode();
//            	$("#code").val('');
//            	$("#password").val('');
//            }
//        },
//        error: function(result) {
//        	refreshCode()
//        }
//	});
//}
//
//setInterval(heatbeat, 10000);  