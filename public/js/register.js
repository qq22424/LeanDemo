$(function(){
//验证码注册
  $("#submit").click(function (event) {
    event.preventDefault();
    if($("#password").val().trim()!="" && $("#password").val().trim() == $("#repsw").val().trim()){
      var user = new AV.User();
      // 设置用户名
      user.setUsername($("#username").val());
      // 设置密码
      user.setPassword( $("#password").val());
      user.setMobilePhoneNumber($("#username").val());
      user.signUp().then(function (loginedUser) { 
        showCss();
        var msg = "狗牌正在运输中，请稍等"; 
        InfoMsg(msg);
        // verlate()
      
      }, function (error) {
        ErrMsg(error.message)
      });
    }else{
      var msg = "请检查您的密码"; 
      WarningMsg(msg);
    }
  });


  // 验证验证码
  $("#verBtn").click(function(){
    AV.User.verifyMobilePhone($("#ver").val()).then(function(){
      var msg = "验证通过，自动寻路中"; 
      SucMsg(msg);
      window.location.href='/';        
    }, function (error) {
        // 失败
        ErrMsg(error.message);
    });          
  })

// 调用延迟验证,已经默认发送验证码，所以不需要此方法
// function verlate(){
//   AV.User.requestMobilePhoneVerify($("#username").val()).then(function(){
//     alert("狗牌正在运输中，请稍等"); 
// }, function(err){
//     alert(err.message);
// });
// }

 function showCss(){
    $(".resForm").addClass("hidden");
    $("#mobileVerBox").removeClass("hidden");
    $("#submit").addClass("hidden");
    $("#verBtn").removeClass("hidden");
  }

  $('input').iCheck({
    checkboxClass: 'icheckbox_square-blue',
    radioClass: 'iradio_square-blue',
    increaseArea: '20%' // optional
  });



});

