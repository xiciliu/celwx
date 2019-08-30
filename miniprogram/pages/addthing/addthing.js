Page({
  /**
   * 初始化数据
   */
  data: {
    phone: '',
    password: '',
    userInputName:'',
    userInputLocation:'',
    select:true,
    tihuoWay:'书籍'
  },

  /**
   * 监听数据录入
   */
  addThings:function(){
    const db = wx.cloud.database();
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
  },
  
  // 监听复选框
  mySelect:function(e){
    var name = e.currentTarget.dataset.name
    this.setData({
      tihuoWay: name,
      select: false
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
