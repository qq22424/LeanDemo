
// 初始化实时通讯 SDK
var Realtime = AV.Realtime;
var realtime = new Realtime({
  appId: 'k3RjNuvpOJ4PH2NTnomgwJ1T-gzGzoHsz',
  plugins: [AV.TypedMessagesPlugin], // 注册富媒体消息插件
});
// Tom 用自己的名字作为 clientId，获取 IMClient 对象实例
$("#Send").click(function(){
  realtime.createIMClient('0001').then(function(jerry) {
    return jerry.createConversation({
      members: ['0002', '0003', '0004'],
    });
  }).then(function(conversation) {
    var CONVERSATION_ID = conversation.id;
    // now we have jerry, conversation and CONVERSATION_ID
  })
});


// // Jerry 登录
// realtime.createIMClient('Jerry').then(function(jerry) {
//   jerry.on('message', function(message, conversation) {
//     console.log('Message received: ' + message.text);
//   });
// }).catch(console.error);
