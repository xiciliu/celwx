// miniprogram/pages/result/result.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bottomHidden1:'none',
    languageList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      languageList:[]
  });
    // console.log(app.globalData.contentValue);
    const db = wx.cloud.database();
    //////////////////////////////////////////
    // 书籍查询
    if (app.globalData.contentSelectValue = 1) {
      db.collection('celBook').where({
        name: db.RegExp({
          regexp: app.globalData.contentValue,
          //从搜索栏中获取的value作为规则进行匹配。
          options: 'i',
          //大小写不区分
        })
      }).get({
        success: res => {
          //返回查询到的数据
          // console.log(res.data);
          const k = res.data.length;
          // console.log(k);
          //实现数据的显示,实质上是循环加数组
          if(k==0){
            wx.showModal({
              content: '未查询到内容请检查输入',
              success(res){
                if(res.confirm){
                  wx.navigateBack({
                    delta: 1
                })
                }else if (res.cancel) {
                  wx.navigateBack({
                    delta: 1
                })
                }
              }
            });
          }
          for (let i = 0; i < k; i++) {
            var newarray=[{
              id:i,
              name:res.data[i].name,
              location:res.data[i].location,
            }]
            this.data.languageList = newarray.concat(this.data.languageList);
            this.setData({
              'languageList':this.data.languageList
         });
          }

        },
        fail: err => {
          console.log(err);
        }
      })
    }


    //////////////////////////////////////////
    // 仪器仪表查询
    if (app.globalData.contentSelectValue = 2) {
      db.collection('celInstruent').where({
        name: db.RegExp({
          regexp: app.globalData.contentValue,
          //从搜索栏中获取的value作为规则进行匹配。
          options: 'i',
          //大小写不区分
        })
      }).get({
        success: res => {
          //返回查询到的数据
          // console.log(res.data);
          const k = res.data.length;
          // console.log(k);
          if(k==0){
            wx.showModal({
              content: '未查询到内容请检查输入',
              success(res){
                if(res.confirm){
                  wx.navigateBack({
                    delta: 1
                })
                }else if (res.cancel) {
                  wx.navigateBack({
                    delta: 1
                })
                }
              }
            });
          }
          //实现数据的显示
          for (let i = 0; i < k; i++) {
            var newarray=[{
              id:i,
              name:res.data[i].name,
              location:res.data[i].location,
            }]
            this.data.languageList = newarray.concat(this.data.languageList);
            this.setData({
              'languageList':this.data.languageList
         });
          }

        },
        fail: err => {
          console.log(err);
        }
      })
    }


    //////////////////////////////////////////
    // 电容电感电阻
    if (app.globalData.contentSelectValue = 3) {
      db.collection('RLC').where({
        name: db.RegExp({
          regexp: app.globalData.contentValue,
          //从搜索栏中获取的value作为规则进行匹配。
          options: 'i',
          //大小写不区分
        })
      }).get({
        success: res => {
          //返回查询到的数据
          // console.log(res.data);
          const k = res.data.length;
          // console.log(k);
          if(k==0){
            wx.showModal({
              content: '未查询到内容请检查输入',
              success(res){
                if(res.confirm){
                  wx.navigateBack({
                    delta: 1
                })
                }else if (res.cancel) {
                  wx.navigateBack({
                    delta: 1
                })
                }
              }
            });
          }
          //实现数据的显示
          for (let i = 0; i < k; i++) {
            var newarray=[{
              id:i,
              name:res.data[i].name,
              location:res.data[i].location,
            }]
            this.data.languageList = newarray.concat(this.data.languageList);
            this.setData({
              'languageList':this.data.languageList
         });
          }

        },
        fail: err => {
          console.log(err);
        }
      })
    }


    //////////////////////////////////////////
    // 通用器件
    if (app.globalData.contentSelectValue = 4) {
      db.collection('celGeneral').where({
        name: db.RegExp({
          regexp: app.globalData.contentValue,
          //从搜索栏中获取的value作为规则进行匹配。
          options: 'i',
          //大小写不区分
        })
      }).get({
        success: res => {
          //返回查询到的数据
          // console.log(res.data);
          const k = res.data.length;
          // console.log(k);
          if(k==0){
            wx.showModal({
              content: '未查询到内容请检查输入',
              success(res){
                if(res.confirm){
                  wx.navigateBack({
                    delta: 1
                })
                }else if (res.cancel) {
                  wx.navigateBack({
                    delta: 1
                })
                }
              }
            });
          }
          //实现数据的显示
          for (let i = 0; i < k; i++) {
            var newarray=[{
              id:i,
              name:res.data[i].name,
              location:res.data[i].location,
            }]
            this.data.languageList = newarray.concat(this.data.languageList);
            this.setData({
              'languageList':this.data.languageList
         });
          }

        },
        fail: err => {
          console.log(err);
        }
      })
    }


    //////////////////////////////////////////
    //  芯片存储器
    if (app.globalData.contentSelectValue = 5) {
      db.collection('celIC').where({
        name: db.RegExp({
          regexp: app.globalData.contentValue,
          //从搜索栏中获取的value作为规则进行匹配。
          options: 'i',
          //大小写不区分
        })
      }).get({
        success: res => {
          //返回查询到的数据
          // console.log(res.data);
          const k = res.data.length;
          // console.log(k);
          if(k==0){
            wx.showModal({
              content: '未查询到内容请检查输入',
              success(res){
                if(res.confirm){
                  wx.navigateBack({
                    delta: 1
                })
                }else if (res.cancel) {
                  wx.navigateBack({
                    delta: 1
                })
                }
              }
            });
          }
          //实现数据的显示
          for (let i = 0; i < k; i++) {
            var newarray=[{
              id:i,
              name:res.data[i].name,
              location:res.data[i].location,
            }]
            this.data.languageList = newarray.concat(this.data.languageList);
            this.setData({
              'languageList':this.data.languageList
         });
          }

        },
        fail: err => {
          console.log(err);
        }
      })
    }


    //////////////////////////////////////////
    // 传感器
    if (app.globalData.contentSelectValue = 6) {
      db.collection('celTransor').where({
        name: db.RegExp({
          regexp: app.globalData.contentValue,
          //从搜索栏中获取的value作为规则进行匹配。
          options: 'i',
          //大小写不区分
        })
      }).get({
        success: res => {
          //返回查询到的数据
          // console.log(res.data);
          const k = res.data.length;
          // console.log(k);
          if(k==0){
            wx.showModal({
              content: '未查询到内容请检查输入',
              success(res){
                if(res.confirm){
                  wx.navigateBack({
                    delta: 1
                })
                }else if (res.cancel) {
                  wx.navigateBack({
                    delta: 1
                })
                }
              }
            });
          }
          //实现数据的显示
          for (let i = 0; i < k; i++) {
            var newarray=[{
              id:i,
              name:res.data[i].name,
              location:res.data[i].location,
            }]
            this.data.languageList = newarray.concat(this.data.languageList);
            this.setData({
              'languageList':this.data.languageList
         });
          }
           

        },
        fail: err => {
          console.log(err);
        }
      })
    }


    //////////////////////////////////////////
    // 工具/辅材/线材/五金 
    if (app.globalData.contentSelectValue = 7) {
      db.collection('celTool').where({
        name: db.RegExp({
          regexp: app.globalData.contentValue,
          //从搜索栏中获取的value作为规则进行匹配。
          options: 'i',
          //大小写不区分
        })
      }).get({
        success: res => {
          //返回查询到的数据
          // console.log(res.data);
          const k = res.data.length;
          // console.log(k);
          if(k==0){
            wx.showModal({
              content: '未查询到内容请检查输入',
              success(res){
                if(res.confirm){
                  wx.navigateBack({
                    delta: 1
                })
                }else if (res.cancel) {
                  wx.navigateBack({
                    delta: 1
                })
                }
              }
            });
          }
          //实现数据的显示
          for (let i = 0; i < k; i++) {
            var newarray=[{
              id:i,
              name:res.data[i].name,
              location:res.data[i].location,
            }]
            this.data.languageList = newarray.concat(this.data.languageList);
            this.setData({
              'languageList':this.data.languageList
         });
          }

        },
        fail: err => {
          console.log(err);
        }
      })
    }


    //////////////////////////////////////////
    // 开发板录入
    if (app.globalData.contentSelectValue = 8) {
      db.collection('celBoard').where({
        name: db.RegExp({
          regexp: app.globalData.contentValue,
          //从搜索栏中获取的value作为规则进行匹配。
          options: 'i',
          //大小写不区分
        })
      }).get({
        success: res => {
          //返回查询到的数据
          // console.log(res.data);
          const k = res.data.length;
          // console.log(k);
          if(k==0){
            wx.showModal({
              content: '未查询到内容请检查输入',
              success(res){
                if(res.confirm){
                  wx.navigateBack({
                    delta: 1
                })
                }else if (res.cancel) {
                  wx.navigateBack({
                    delta: 1
                })
                }
              }
            });
          }
          //实现数据的显示
          for (let i = 0; i < k; i++) {
            var newarray=[{
              id:i,
              name:res.data[i].name,
              location:res.data[i].location,
            }]
            this.data.languageList = newarray.concat(this.data.languageList);
            this.setData({
              'languageList':this.data.languageList
         });
          }

        },
        fail: err => {
          console.log(err);
        }
      })
    }



    // console.log(app.globalData.contentSelectValue);

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