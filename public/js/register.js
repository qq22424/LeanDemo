$(function(){

  $("#submit").click(function(){
     var user = new AV.User();
    // 设置用户名
    user.setUsername($("#username").val());
    // 设置密码
    user.setPassword( $("#password").val());
    user.setMobilePhoneNumber($("#username").val());
    user.signUp().then(function (loginedUser) { 
      showCss();
      alert("狗牌正在运输中，请稍等"); 
      // verlate()
     
    }, function (error) {
      alert(error.message)
    });
    
  });
  // 验证验证码
  $("#verBtn").click(function(){
    AV.User.verifyMobilePhone($("#ver").val()).then(function(){
      // user.set('mobilePhoneVerified',true);
      alert("验证通过，自动寻路中~");
      window.location.href='/';        
    }, function (error) {
        // 失败
        alert(error.message)
    });          
  })

// 调用延迟验证
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

