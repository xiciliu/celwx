const app = getApp();
Page({
  /**
   * 初始化数据
   */
  data: {
    phone: '',
    password: '',
    userInput: '',
    array: ['请选择分类', '图书期刊', '仪器仪表', '电容/电感/电阻', '通用器件', '芯片/存储器', '传感器/驱动器', '工具/辅材/线材/五金', '开发板/功能模块'],
    index:0
  },

  // 监听用户选择分类
  bindPickerChange: function (e) {
    // console.log('picker下拉项发生变化后，下标为：', e.detail.value)
    app.globalData.userSelectValue = e.detail.value,
      // console.log(app.globalData.userSelectValue)
      this.setData({
        index: e.detail.value
      })
  },

  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    app.globalData.userSelectValue == 0;
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
  },
  userInput: function (e) {
    this.setData({
      userInput: e.detail.value
    })
  },
  searchThings: function (e) {
    const that = this;
    // console.log(that.data.userInput);
    // 判断输入框是否留空
    if (that.data.userInput == '' || that.data.userInput == null || that.data.userInput == undefined) {
      that.data.userInput = '';
      app.globalData.userSelectValue = 0;
      wx.showToast({
        title: '输入框存在留空',
        image: '../../images/error.png',
        duration: 2000,
        mask: true
      });
    }
    // 判断是否选择分类
    else if (app.globalData.userSelectValue == 0 || app.globalData.userSelectValue == null) {
      that.data.userInput = '';
      app.globalData.userSelectValue = 0;
      wx.showToast({
        title: '未选择分类',
        image: '../../images/error.png',
        duration: 2000,
        mask: true
      });
    }
    else {
      app.globalData.contentValue = this.data.userInput;
      app.globalData.contentSelectValue = app.globalData.userSelectValue;
      console.log(app.globalData.contentSelectValue);
      console.log(app.globalData.contentValue);
      // 清空输入框
      that.data.userInput = '';
      app.globalData.userSelectValue = '';
      wx.navigateTo({
        url: '../result/result'
      })
    }

  }
})
