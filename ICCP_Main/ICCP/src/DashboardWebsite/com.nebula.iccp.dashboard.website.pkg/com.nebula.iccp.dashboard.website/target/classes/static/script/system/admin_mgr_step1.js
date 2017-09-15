$(document).ready(function(){
	$("#theForm").validate({
        rules:{
        	username:{
        	    required :true
//        	    remote:{
//        		    url: "$!webPath/verify_username.htm",     //后台处理程序
//                    type: "post",               //数据发送方式
//                    dataType: "json",           //接受数据格式   
//                    data: {                     //要传递的数据
//                          "userName": function(){return jQuery("#userName").val();},
//        				  "id":function(){return jQuery("#id").val()}
//        		    }
//        		}
        	},
		    newpassword:{required :true,minlength:6},
		    comfirmpassword:{required :true,equalTo:"#newpassword"}
	    },
		messages:{
			username:{required:"用户名不能为空",remote:"该用户已经存在"},
		    newpassword:{required:"密码不能为空"},
		    comfirmpassword:{required:"确认新密码不能为空",equalTo:"两次密码输入不一致"}
		}
    });
});

function saveForm(){
  $("#theForm").submit();
}