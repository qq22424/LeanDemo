$(function(){
// function submit(){
//   var user = new AV.User();
//   // 设置用户名
//   user.setUsername($("#username").val());
//   // 设置密码
//   user.setPassword( $("#password"));
//   user.setMobilePhoneNumber($("#username").val());
//   user.signUp().then(function (loginedUser) {   
//   }, function (error) {
//   });
// }
$("#submit").click(function(){
 AV.User.logInWithMobilePhoneSmsCode($("#username").val(), $("#ver").val()).then(function (loginedUser) {
   
    user.set('mobilePhoneVerified',true);
    alert("注册成功，自动寻路中~");
        window.location.href='/';
      
  }, function (error) {
    // 失败
    alert(error.message)
  });
   
   
  });
 //发送手机号验证码
  $("#verBtn").click(function(){
     // 新建 AVUser 对象实例
  var phoneNumber = $("#username").val();
  AV.Cloud.requestLoginSmsCode(phoneNumber).then(function (success) {
        alert("验证码发送成功");
  }, function(err){
        alert("验证码发送失败");
});
   

  });


  $(function () {
    $('input').iCheck({
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue',
      increaseArea: '20%' // optional
    });
  });

  })