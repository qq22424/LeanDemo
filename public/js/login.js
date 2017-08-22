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
		
					AV.User.logIn(username, password).then(function (loginedUser) {
						// 登录成功，跳转到商品 list 页面
						window.location.href='/';
					}, function (error) {
						alert(JSON.stringify(error.message));
					
					
					});
				})