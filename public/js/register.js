$(function(){
  
function submit(){
  // 新建 AVUser 对象实例
  var user = new AV.User();
  // 设置用户名
  user.setUsername($("#username").val());
  // 设置密码
  user.setPassword($("#password").val());
  user.setMobilePhoneNumber($("#username").val());
  // user.set('mobilePhoneVerified',"true");
  user.signUp().then(function (loginedUser) {

        $("#mobileVerBox").removeClass("hideBox");
        $("#submit").addClass("disabled");
    
   }, function (error) {
    alert(error.message);
  });
}
//点击提交注册
$("#submit").click(function(){
  submit();  
  });

// 点击验证手机
$("#verBtn").click(function(){
  AV.Cloud.verifySmsCode($("#ver").val(), $("#username").val()).then(function(){
    alert("验证成功，正在自动寻路~");
    window.location.href='/';
}, function(err){
    alert(err.message);
});
});

//  //发送手机号验证码
//   function verMobile(){
//      // 新建 AVUser 对象实例
//   var phoneNumber = $("#username").val();
//   AV.Cloud.requestSmsCode({
//     mobilePhoneNumber: phoneNumber,
//     name: 'Dog单身狗',
//     op: '领取狗牌',
//     ttl: 10                     // 验证码有效时间为 10 分钟
//    }).then(function(){
//     alert("验证码发送成功")
//    }, function(err){
//     //调用失败
//     alert(err.message);
//    });
//   }   



  $(function () {
    $('input').iCheck({
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue',
      increaseArea: '20%' // optional
    });
  });

  })