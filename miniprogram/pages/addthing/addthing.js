Page({
  /**
   * 初始化数据
   */
  data: {
    userInputName:'',
    userInputLocation:''
  },

  /*数据录入*/
  addThings:function(){
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
        name: db.RegExp({
          regexp: this.data.userInputName
        })
      }).get({
        success: res => {
          console.log(res)
          wx.showToast({
            title: '输入重复,请检查'+res.data.location+'位置处',
            // image:'../../images/error.png',
            icon:'none',
            duration: 2000,
            mask: true
           });
        },
        fali :function(){
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
