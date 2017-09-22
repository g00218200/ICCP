$(document).ready(function(){
	$("#theForm").validate({
        rules:{
		    roleName:{
		       required :true
		    }
	    },
		messages:{
			roleName:{required:"角色名不能为空",remote:"该角色名已经存在"}
		}
    });
});

function saveForm(){
  $("#theForm").submit();
}