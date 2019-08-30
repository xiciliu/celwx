// miniprogram/pages/result/result.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(app.globalData.contentValue);
    const db = wx.cloud.database();
    db.collection('bmecollect').where({
      name: db.RegExp({
        regexp: app.globalData.contentValue,
        //从搜索栏中获取的value作为规则进行匹配。
        options: 'i',
        //大小写不区分
      })
    }).get({
      success: res => {
        //返回查询到的数据
        console.log(res.data);
        const k = res.data.length;
        console.log(k);
        //实现数据的显示
         for (let i = 0; i < k; i++){
          this.setData({
            // getStringValue1:k+'0',
            // getStringValue=concat('')
            'inputText[0].value1':res.data[i].name,
            'inputText[0].value2':res.data[i].location
          })
         }
        
      },
      fail: err => {
        console.log(err);
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})