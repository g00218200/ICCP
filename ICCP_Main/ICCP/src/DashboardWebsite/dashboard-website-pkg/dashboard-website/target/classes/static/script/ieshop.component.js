function selectClass(id) {
	jQuery("#goods_class_id").val(id);
	jQuery.post(url_pre + "getGoodsClassInfo.htm",{"id":id},
		function processData(result,status) {
			if (result.isSuccess && result.data != null) {
				jQuery("#goods_class_info").val(result.data);
			}
        }
	);
}
	
function loadClassData() {
	jQuery.post(url_pre + "loadClassData.htm",
	function processData(result,status){
		if (result.isSuccess && result.data != null) {
			var goodsClassArray = eval(result.data);
			for (var i = 0; i < goodsClassArray.length; i++) {
			    var goodsClass = goodsClassArray[i];
			    var subitem = "<li><a style='font-size:12px;' onclick='selectClass(" + goodsClass.id + ");' href='javascript:void(0);'> " + goodsClass.name + "</a></li>";
			    if (goodsClass.childs != null && goodsClass.childs.length > 0) {
			    	subitem = "<li class='dropdown-submenu'><a style='font-size:12px;' onclick='selectClass(" + goodsClass.id + ");' href='javascript:void(0);'> " + goodsClass.name + "</a>";
			    	subitem = subitem + "<ul class='dropdown-menu'>";
			    	for (var j = 0; j < goodsClass.childs.length; j++) {
			    		var subGoodsClass = goodsClass.childs[j];
			    		leafitem = "<li><a style='font-size:12px;' onclick='selectClass(" + subGoodsClass.id + ");' href='javascript:void(0);'> " + subGoodsClass.name + "</a></li>";
			    		if (subGoodsClass.childs != null && subGoodsClass.childs.length > 0) {
			    			leafitem = "<li class='dropdown-submenu'><a style='font-size:12px;' onclick='selectClass(" + subGoodsClass.id + ");' href='javascript:void(0);'> " + subGoodsClass.name + "</a>";
			    			leafitem = leafitem + "<ul class='dropdown-menu'>";
					    	for (var k = 0; k < subGoodsClass.childs.length; k++) {
					    		var leafGoodsClass = subGoodsClass.childs[k];
					    		leafitem = leafitem + "<li><a style='font-size:12px;' onclick='selectClass(" + leafGoodsClass.id + ");' href='javascript:void(0);'> " + leafGoodsClass.name + "</a></li>";
					    	}
					    	leafitem = leafitem + "</ul></li>";
			    		}
			    		subitem = subitem + leafitem;
			    	}
			    	subitem = subitem + "</ul></li>";
			    }
			    jQuery("#gc_class").append(subitem);
			}
		}
	}	
	,"json");
}

loadClassData();