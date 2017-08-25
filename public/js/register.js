$(function(){
// 注册测试

$("#submit").click(function(){
  var user = new AV.User();
 // 设置用户名
 user.setUsername($("#username").val());
 // 设置密码
 user.setPassword( $("#password").val());
 user.setMobilePhoneNumber($("#username").val());
 user.signUp().then(function (loginedUser) { 
   // verlate()
   baiduMap();
 }, function (error) {
   alert(error.message)
 });


function baiduMap(){
  // 百度地图API功能,异步加载
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://api.map.baidu.com/getscript?v=2.0&ak=wexZI1x7hhom1O97OsF98LIjSr157ErN&services=&t=20170823191629";
  function init() {
  	var map = new BMap.Map("allmap");
    var point = new BMap.Point(116.331398,39.897445);
    map.centerAndZoom(point,12);               //启用滚轮放大缩小
    map.enableScrollWheelZoom();                 //启用滚轮放大缩小
  }  
	function myFun(result){
		var cityName = result.name;
		map.setCenter(cityName);
		alert("当前定位城市:"+cityName);
	}
	var myCity = new BMap.LocalCity();
  myCity.get(myFun);
  window.onload = baiduMap;  //异步加载地图
}

// 验证码注册
  // $("#submit").click(function(){
  //    var user = new AV.User();
  //   // 设置用户名
  //   user.setUsername($("#username").val());
  //   // 设置密码
  //   user.setPassword( $("#password").val());
  //   user.setMobilePhoneNumber($("#username").val());
  //   user.signUp().then(function (loginedUser) { 
  //     showCss();
  //     alert("狗牌正在运输中，请稍等"); 
  //     // verlate()
     
  //   }, function (error) {
  //     alert(error.message)
  //   });
  //});
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

