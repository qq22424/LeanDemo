$(function(){
$("#sumbit").click(function(){
    //获取输入的用户名，邮箱，密码 

  // AV.Cloud.verifySmsCode($("#ver").val(), $("#username").val() ).then(function (success) {
  //     // 成功
   
  //   }, function (error) {
  //     // 失败
  //     alert("验证码错误");
  //   });

       // 新建 AVUser 对象实例
    var user = new AV.User();
    // 设置用户名
    user.setUsername( $("#username").val());
    user.setMobilePhoneNumber($("#username").val());
    // 设置密码
    user.setPassword($("#password").val());
    // 手机号启用验证
    user.set('mobilePhoneVerified',true);
    // 设置邮箱
    // user.setEmail(password);
    user.signUp().then(function (loginedUser) {
        alert("注册成功，自动登录中");
        window.location.href='index.html';
      }, function (error) {
        alert(error.message);
      });
   
  });
 
  $("#verBtn").click(function(){
    var phoneNumber = $("#username").val();
    AV.Cloud.requestSmsCode({
    mobilePhoneNumber: phoneNumber,
    name: 'SingleDog',
    op: '注册验证吗',
    ttl: 10                     // 验证码有效时间为 10 分钟
    }).then(function(){
    //调用成功
    alert("验证码发送成功");
    }, function(err){
    //调用失败
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