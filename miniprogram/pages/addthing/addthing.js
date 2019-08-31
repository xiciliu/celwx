const app = getApp();
Page({
  /**
   * 初始化数据
   */
  
  data: {
    userInputName:'',
    userInputLocation:'',
    clearValue:'',
    array: ['请选择分类','图书期刊', '仪器仪表', '电子元器件','开发板',''],
    index: 0,
  },
  
  /*数据录入*/
  addThings:function(){
    app.globalData.userInputNameConfirm=this.data.userInputName;
    app.globalData.userInputLocationConfirm=this.data.userInputLocation;
    var that=this;
    // 监听是否有为位置留空
    if(this.data.userInputName==''||this.data.userInputLocation==''){
      wx.showToast({
        title: '输入框存在留空',
        image:'../../images/error.png',
        duration: 2000,
        mask: true
       });
    } 
    else if(app.globalData.userSelectValue==0||app.globalData.userSelectValue==null){
      wx.showToast({
        title: '未选择分类',
        image:'../../images/error.png',
        duration: 2000,
        mask: true
       });
    }
    else {
      
      const db = wx.cloud.database();
      if(app.globalData.userSelectValue==1){
        db.collection('celBook').where({
          name:app.globalData.userInputNameConfirm
        }).get({
          success: res => {
            console.log("get");
            console.log(res.data[0].location)
            // 重复录入则提示已存在的位置
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
            // 不存在重复录入则存入数据
            else{
            
              db.collection('celBook').add({
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
      // 监听是否有重复录入
      
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
// 监听用户选择分类
bindPickerChange:function(e){
  console.log('picker下拉项发生变化后，下标为：', e.detail.value)
  app.globalData.userSelectValue=e.detail.value,
  console.log(app.globalData.userSelectValue)
  this.setData({
      index: e.detail.value
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
