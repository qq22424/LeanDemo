	  $(function () {
			    $('input').iCheck({
			      checkboxClass: 'icheckbox_square-blue',
			      radioClass: 'iradio_square-blue',
			      increaseArea: '20%' // optional
			    });
			  });
				
				$("#login").click(function(){
					var username = $('#inputUsername').val();
					var password = $('#inputPassword').val();
					// LeanCloud - 登录
					// https://leancloud.cn/docs/leanstorage_guide-js.html#用户名和密码登录
					// var LEANCLOUD_APP_ID = process.env.LEANCLOUD_APP_ID;
					// console.log(LEANCLOUD_APP_ID);
					AV.User.logIn(username, password).then(function (loginedUser) {
						// 登录成功，跳转到商品 list 页面
						window.location.href='./index';
					}, function (error) {
						alert(JSON.stringify(error.message));
					
					
					});
				})