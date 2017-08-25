$("#login").click(function(){
    
  APP_ID="k3RjNuvpOJ4PH2NTnomgwJ1T-gzGzoHsz";
  APP_KEY="rvlzROsqTjmOidizSALCeyed";
  AV.init({
    appId: APP_ID,
    appKey: APP_KEY
  });

    var query = new AV.Query('Conversation');
    if(query.contains('objectId', '599ff2611b69e6005af34b32')){
        console.log("聊天室已存在");
        window.location.href='/chatRoom';
    }else{
         // 初始化实时通讯 SDK
        var Realtime = AV.Realtime;
        var realtime = new Realtime({
        appId: 'k3RjNuvpOJ4PH2NTnomgwJ1T-gzGzoHsz',
        plugins: [AV.TypedMessagesPlugin], // 注册富媒体消息插件
        });
        realtime.createIMClient('tom').then(function(tom) {
            tom.createConversation({
                name: '加菲猫',
                transient: true,
            }).then(function(conversation) {
                alert('创建聊天室成功。id: ' + conversation.id);
                console.log('创建聊天室成功。id: ' + conversation.id);
            }).catch(console.error.bind(console));
            window.location.href='/chatRoom';
            });

        }
    

    

});


