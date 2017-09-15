$(document).ready(function(){
	/*---- Option:默认设置全选复选框的选中状态 ---*/
	initAllSelect();
});

function initAllSelect() {
	$(":checkbox[name^='all_']").each(function(){
		var pnode = $(this);
		var id = pnode.prop("id");
		var isAllSelect = true;
		if ($(":checkbox[id^="+id +"]").length > 1) {
			$(":checkbox[id^="+id +"]").each(function(){
				var subnode = $(this);
				var substatus = subnode.prop("checked");
				if (subnode.val() != "" && !substatus) {
					isAllSelect = false;
				}
			});
			if (isAllSelect){
				pnode.prop("checked", true)
			} else {
				pnode.prop("checked", false)
			}
		}
	});
}

/* ----------------------------------------
 * description:对子节点进行全选或者取消全选操作
 * auth：guorui
 * param：[obj]需要执行操作的对象
 * ----------------------------------------
*/
function selectAllSub(obj){
	var status=$(obj).prop("checked");
	var id=$(obj).attr("id");
 	if(status == false){
 		$(":checkbox[id^="+id+"]").prop("checked", false);
	}else{
 	    $(":checkbox[id^="+id+"]").prop("checked", true);
	}
}

function unselect(optcode) {
	initAllSelect();
}