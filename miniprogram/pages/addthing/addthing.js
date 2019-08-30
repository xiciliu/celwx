const app = getApp();
Page({
  /**
   * 初始化数据
   */
  
  data: {
    userInputName:'',
    userInputLocation:'',
    clearValue:''
  },
  
  /*数据录入*/
  addThings:function(){
    app.globalData.userInputNameConfirm=this.data.userInputName;
    app.globalData.userInputLocationConfirm=this.data.userInputLocation;
    var that=this;
    // 监听是否留空
    if(this.data.userInputName==''||this.data.userInputLocation==''){
      wx.showToast({
        title: '输入框存在留空',
        image:'../../images/error.png',
        duration: 2000,
        mask: true
       });
    }
   
    else{
      const db = wx.cloud.database();
      // 监听是否有重复录入
      // 构建查询的正则表达式

      db.collection('bmecollect').where({
        // name: db.RegExp({
        //   regexp: app.globalData.userInputNameConfirm
        // })
        name:app.globalData.userInputNameConfirm
      }).get({
        success: res => {
          console.log(res.data[0].location)
          if(res.data.length>0){
            wx.showModal({
              title: '输入重复未录入',
              content:'请检查'+res.data[0].location+'位置处',
              // image:'../../images/error.png',
              success:function(res){
                if(res.confirm){
                  // 清空输入框
                  that.setData({
                    userInputName:''
                  })
                } else if(res.cancel) {
  
                }
              }
             });
          }
          else{
          
            db.collection('bmecollect').add({
              data: {
                name: this.data.userInputName,
                location: this.data.userInputLocation
              }
            })
            .then(res => {
              console.log(res),
              wx.showToast({
                title: '录入成功',
                icon:'success',
                duration:500
              })
            })
              .catch(console.error)
         }
        },
      
      })
    } 
  },
  // 监听用户输入
  userInputName: function (e) {
    this.setData({
      userInputName: e.detail.value
    })
  },
  userInputLocation: function (e) {
    this.setData({
      userInputLocation: e.detail.value
    })
  },

  deletValue:function(){
    this.setData({
      userInputName:null
    })
    
  },
 

  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})
