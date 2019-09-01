// pages/qianduan/qianduan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    javascript:'http://www.qianduan.ltd/index.php/category/JavaScript/',
    vue:'http://www.qianduan.ltd/index.php/category/vue/',
    bootstrap:'http://www.qianduan.ltd/index.php/category/bootstrap/',
    wordpress:'http://www.qianduan.ltd/index.php/category/wordpress/',
    HEADFIRST:'http://www.qianduan.ltd/index.php/category/HeadFirst/',
    text: "个人小程序暂不支持外部跳转，请点击后面复制按钮，在浏览器中黏贴打开",
  marqueePace: 1,//滚动速度
  marqueeDistance: 0,//初始滚动距离
  marquee_margin: 30,
  size:14,
  interval: 20 // 时间间隔
  },
  copyjavascript: function (e) {
    var self = this;
    wx.setClipboardData({
      data: self.data.javascript,
      // success: this.copy() 
    });
  },
  copyvue: function (e) {
    var self = this;
    wx.setClipboardData({
      data: self.data.vue,
      // success: this.copy() 
    });
  },
  copybootstrap: function (e) {
    var self = this;
    wx.setClipboardData({
      data: self.data.bootstrap,
      // success: this.copy() 
    });
  },
  copywordpress: function (e) {
    var self = this;
    wx.setClipboardData({
      data: self.data.wordpress,
      // success: this.copy() 
    });
  },
  copyHEADFIRST: function (e) {
    var self = this;
    wx.setClipboardData({
      data: self.data.HEADFIRST,
      // success: this.copy() 
    });
  },
  copy: function (res) {
    // self.setData({copyTip:true}),
    // wx.showModal({
    //   title: '提示',
    //   content: '复制成功',

    // })
  },
    /* 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    var that = this;
    var length = that.data.text.length * that.data.size;//文字长度
    var windowWidth = wx.getSystemInfoSync().windowWidth;// 屏幕宽度
    //console.log(length,windowWidth);
    that.setData({
     length: length,
     windowWidth: windowWidth
    });
    that.scrolltxt();// 第一个字消失后立即从右边出现
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

  },
  scrolltxt: function () {
    var that = this;
    var length = that.data.length;//滚动文字的宽度
    var windowWidth = that.data.windowWidth;//屏幕宽度
    if (length > windowWidth){
     var interval = setInterval(function () {
      var maxscrollwidth = length + that.data.marquee_margin;//滚动的最大宽度，文字宽度+间距，如果需要一行文字滚完后再显示第二行可以修改marquee_margin值等于windowWidth即可
      var crentleft = that.data.marqueeDistance;
      if (crentleft < maxscrollwidth) {//判断是否滚动到最大宽度
       that.setData({
        marqueeDistance: crentleft + that.data.marqueePace
       })
      }
      else {
       //console.log("替换");
       that.setData({
        marqueeDistance: 0 // 直接重新滚动
       });
       clearInterval(interval);
       that.scrolltxt();
      }
     }, that.data.interval);
    }
    else{
     that.setData({ marquee_margin:"1000"});//只显示一条不滚动右边间距加大，防止重复显示
    } 
   }

})