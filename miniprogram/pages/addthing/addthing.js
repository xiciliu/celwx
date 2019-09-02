const app = getApp();
Page({
  /** 初始化数据*/
  data: {
    userInputName: '',
    userInputLocation: '',
    clearValue: '',
    array: ['请选择分类', '图书期刊', '仪器仪表', '电容/电感/电阻', '通用器件', '芯片/存储器', '传感器/驱动器', '工具/辅材/线材/五金', '开发板/功能模块'],
    index: 0,
  },

  /*数据录入*/
  addThings: function () {
    app.globalData.userInputNameConfirm = this.data.userInputName;
    app.globalData.userInputLocationConfirm = this.data.userInputLocation;
    var that = this;
    // 监听是否有为位置留空
    if (this.data.userInputName == '' || this.data.userInputLocation == '') {
      wx.showToast({
        title: '输入框存在留空',
        image: '../../images/error.png',
        duration: 2000,
        mask: true
      });
      that.data.userInputName = '',
        that.data.userInputLocation = ''
    }
    else if (app.globalData.userSelectValue == 0 || app.globalData.userSelectValue == null) {
      wx.showToast({
        title: '未选择分类',
        image: '../../images/error.png',
        duration: 2000,
        mask: true
      });
      that.data.userInputName = '',
        that.data.userInputLocation = ''
    }
    else {
      const db = wx.cloud.database();
      ////////////////////////////////////////////////////
      /*
      书籍录入
      */
      ////////////////////////////////////////////////////
      if (app.globalData.userSelectValue == 1) {
        db.collection('celBook').where({
          name: app.globalData.userInputNameConfirm
        }).get({
          success: res => {
            console.log("get");
            console.log(res.data.length)
            // 重复录入则提示已存在的位置
            if (res.data.length > 0) {
              wx.showModal({
                title: '输入重复未录入',
                content: '请检查' + res.data[0].location + '位置处',
                // image:'../../images/error.png',
                success: function (res) {
                  if (res.confirm) {
                    // 清空输入框
                    that.setData({
                      userInputName: ''
                    })
                  } else if (res.cancel) {

                  }
                }
              });
            }
            // 不存在重复录入则存入数据
            else {

              db.collection('celBook').add({
                data: {
                  name: that.data.userInputName,
                  location: that.data.userInputLocation
                }
              })
                .then(res => {
                  console.log(res),
                    wx.showToast({
                      title: '录入成功',
                      icon: 'success',
                      duration: 500
                    })
                })
                .catch(console.error),
                that.data.userInputName = '',
                that.data.userInputLocation = ''
            }
          },

        })
      }
      ////////////////////////////////////////////////////
      /*
      仪器仪表录入
      */
      ////////////////////////////////////////////////////
      else if (app.globalData.userSelectValue == 2) {
        db.collection('celInstruent').where({
          name: app.globalData.userInputNameConfirm
        }).get({
          success: res => {
            console.log("get");
            console.log(res.data.length)
            // 重复录入则提示已存在的位置
            if (res.data.length > 0) {
              wx.showModal({
                title: '输入重复未录入',
                content: '请检查' + res.data[0].location + '位置处',
                // image:'../../images/error.png',
                success: function (res) {
                  if (res.confirm) {
                    // 清空输入框
                    that.setData({
                      userInputName: ''
                    })
                  } else if (res.cancel) {

                  }
                }
              });
            }
            // 不存在重复录入则存入数据
            else {

              db.collection('celInstruent').add({
                data: {
                  name: that.data.userInputName,
                  location: that.data.userInputLocation

                }
              })
                .then(res => {
                  console.log(res),
                    wx.showToast({
                      title: '录入成功',
                      icon: 'success',
                      duration: 500
                    })
                })
                .catch(console.error),
                that.data.userInputName = '',
                that.data.userInputLocation = ''
            }
          },

        })
      }
      ////////////////////////////////////////////////////
      /*
      电容电感电阻
      */
      ////////////////////////////////////////////////////
      else if (app.globalData.userSelectValue == 3) {
        db.collection('RLC').where({
          name: app.globalData.userInputNameConfirm
        }).get({
          success: res => {
            console.log("get");
            console.log(res.data.length)
            // 重复录入则提示已存在的位置
            if (res.data.length > 0) {
              wx.showModal({
                title: '输入重复未录入',
                content: '请检查' + res.data[0].location + '位置处',
                // image:'../../images/error.png',
                success: function (res) {
                  if (res.confirm) {
                    // 清空输入框
                    that.setData({
                      userInputName: ''
                    })
                  } else if (res.cancel) {

                  }
                }
              });
            }
            // 不存在重复录入则存入数据
            else {

              db.collection('RLC').add({
                data: {
                  name: that.data.userInputName,
                  location: that.data.userInputLocation
                }
              })
                .then(res => {
                  console.log(res),
                    wx.showToast({
                      title: '录入成功',
                      icon: 'success',
                      duration: 500
                    })
                })
                .catch(console.error),
                that.data.userInputName = '',
                that.data.userInputLocation = ''
            }
          },

        })
      }
      ////////////////////////////////////////////////////
      /*
      通用器件
      */
      ////////////////////////////////////////////////////
      else if (app.globalData.userSelectValue == 4) {
        db.collection('celGeneral').where({
          name: app.globalData.userInputNameConfirm
        }).get({
          success: res => {
            console.log("get");
            console.log(res.data.length)
            // 重复录入则提示已存在的位置
            if (res.data.length > 0) {
              wx.showModal({
                title: '输入重复未录入',
                content: '请检查' + res.data[0].location + '位置处',
                // image:'../../images/error.png',
                success: function (res) {
                  if (res.confirm) {
                    // 清空输入框
                    that.setData({
                      userInputName: ''
                    })
                  } else if (res.cancel) {

                  }
                }
              });
            }
            // 不存在重复录入则存入数据
            else {

              db.collection('celGeneral').add({
                data: {
                  name: that.data.userInputName,
                  location: that.data.userInputLocation
                }
              })
                .then(res => {
                  console.log(res),
                    wx.showToast({
                      title: '录入成功',
                      icon: 'success',
                      duration: 500
                    })
                })
                .catch(console.error),
                that.data.userInputName = '',
                that.data.userInputLocation = ''
            }
          },

        })
      }
      ////////////////////////////////////////////////////
      /*
      芯片存储器
      */
      ////////////////////////////////////////////////////
      else if (app.globalData.userSelectValue == 5) {
        db.collection('celIC').where({
          name: app.globalData.userInputNameConfirm
        }).get({
          success: res => {
            console.log("get");
            console.log(res.data.length)
            // 重复录入则提示已存在的位置
            if (res.data.length > 0) {
              wx.showModal({
                title: '输入重复未录入',
                content: '请检查' + res.data[0].location + '位置处',
                // image:'../../images/error.png',
                success: function (res) {
                  if (res.confirm) {
                    // 清空输入框
                    that.setData({
                      userInputName: ''
                    })
                  } else if (res.cancel) {

                  }
                }
              });
            }
            // 不存在重复录入则存入数据
            else {

              db.collection('celIC').add({
                data: {
                  name: that.data.userInputName,
                  location: that.data.userInputLocation
                }
              })
                .then(res => {
                  console.log(res),
                    wx.showToast({
                      title: '录入成功',
                      icon: 'success',
                      duration: 500
                    })
                })
                .catch(console.error),
                that.data.userInputName = '',
                that.data.userInputLocation = ''
            }
          },

        })
      }
      ////////////////////////////////////////////////////
      /*
      传感器
      */
      ////////////////////////////////////////////////////
      else if (app.globalData.userSelectValue == 6) {
        db.collection('celTransor').where({
          name: app.globalData.userInputNameConfirm
        }).get({
          success: res => {
            console.log("get");
            console.log(res.data.length)
            // 重复录入则提示已存在的位置
            if (res.data.length > 0) {
              wx.showModal({
                title: '输入重复未录入',
                content: '请检查' + res.data[0].location + '位置处',
                // image:'../../images/error.png',
                success: function (res) {
                  if (res.confirm) {
                    // 清空输入框
                    that.setData({
                      userInputName: ''
                    })
                  } else if (res.cancel) {

                  }
                }
              });
            }
            // 不存在重复录入则存入数据
            else {

              db.collection('celTransor').add({
                data: {
                  name: that.data.userInputName,
                  location: that.data.userInputLocation
                }
              })
                .then(res => {
                  console.log(res),
                    wx.showToast({
                      title: '录入成功',
                      icon: 'success',
                      duration: 500
                    })
                })
                .catch(console.error),
                that.data.userInputName = '',
                that.data.userInputLocation = ''
            }
          },

        })
      }
      ////////////////////////////////////////////////////
      /*
      工具/辅材/线材/五金 
      */
      ////////////////////////////////////////////////////
      else if (app.globalData.userSelectValue == 7) {
        db.collection('celTool').where({
          name: app.globalData.userInputNameConfirm
        }).get({
          success: res => {
            console.log("get");
            console.log(res.data.length)
            // 重复录入则提示已存在的位置
            if (res.data.length > 0) {
              wx.showModal({
                title: '输入重复未录入',
                content: '请检查' + res.data[0].location + '位置处',
                // image:'../../images/error.png',
                success: function (res) {
                  if (res.confirm) {
                    // 清空输入框
                    that.setData({
                      userInputName: ''
                    })
                  } else if (res.cancel) {

                  }
                }
              });
            }
            // 不存在重复录入则存入数据
            else {

              db.collection('celTool').add({
                data: {
                  name: that.data.userInputName,
                  location: that.data.userInputLocation
                }
              })
                .then(res => {
                  console.log(res),
                    wx.showToast({
                      title: '录入成功',
                      icon: 'success',
                      duration: 500
                    })
                })
                .catch(console.error),
                that.data.userInputName = '',
                that.data.userInputLocation = ''
            }
          },

        })
      }
      ////////////////////////////////////////////////////
      /*
      开发板录入
      */
      ////////////////////////////////////////////////////
      else if (app.globalData.userSelectValue == 8) {
        db.collection('celBoard').where({
          name: app.globalData.userInputNameConfirm
        }).get({
          success: res => {
            console.log("get");
            console.log(res.data.length)
            // 重复录入则提示已存在的位置
            if (res.data.length > 0) {
              wx.showModal({
                title: '输入重复未录入',
                content: '请检查' + res.data[0].location + '位置处',
                // image:'../../images/error.png',
                success: function (res) {
                  if (res.confirm) {
                    // 清空输入框
                    that.setData({
                      userInputName: ''
                    })
                  } else if (res.cancel) {

                  }
                }
              });
            }
            // 不存在重复录入则存入数据
            else {

              db.collection('celBoard').add({
                data: {
                  name: that.data.userInputName,
                  location: that.data.userInputLocation
                }
              })
                .then(res => {
                  console.log(res),
                    wx.showToast({
                      title: '录入成功',
                      icon: 'success',
                      duration: 500
                    })
                })
                .catch(console.error),
                that.data.userInputName = '',
                that.data.userInputLocation = ''
            }
          },

        })
      }
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
  bindPickerChange: function (e) {
    console.log('picker下拉项发生变化后，下标为：', e.detail.value)
    app.globalData.userSelectValue = e.detail.value,
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
  },
  // 跳转删除页面
  deleteValue:function(){
    wx.navigateTo({
      url: '../delete/delete'
    })
  }
})
