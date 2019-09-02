// pages/delete/delete.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['请选择分类', '图书期刊', '仪器仪表', '电容/电感/电阻', '通用器件', '芯片/存储器', '传感器/驱动器', '工具/辅材/线材/五金', '开发板/功能模块'],
    index: 0,
    languageList:[],
    userDeletInput: ''
  },

  /**
   * 生命周期函数--监听页面加载
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
    // 监听用户选择分类
    bindPickerChange: function (e) {
      console.log('picker下拉项发生变化后，下标为：', e.detail.value)
      app.globalData.userSelectValue = e.detail.value,
      this.setData({
        index: e.detail.value
      })
    },
    userInputName: function (e) {
      this.setData({
        userDeletInput: e.detail.value
      })
    },
    deletThings:function(){
    const db = wx.cloud.database();
    app.globalData.deletValue = this.data.userDeletInput;
    console.log(app.globalData.deletValue)
    console.log(app.globalData.userSelectValue);
    //////////////////////////////////////////
    // 书籍查询
    if (app.globalData.userSelectValue == 1) {
      db.collection('celBook').where({
        name: db.RegExp({
          regexp: app.globalData.deletValue,
          //从搜索栏中获取的value作为规则进行匹配。
          options: 'i',
          //大小写不区分
        })
      }).get({
        success: res => {
          //返回查询到的数据
          console.log('hahah');
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
          this.data.languageList=null;
        },
        fail: err => {
          console.log(err);
        }
      })
    }


    //////////////////////////////////////////
    // 仪器仪表查询
    if (app.globalData.userSelectValue == 2) {
      db.collection('celInstruent').where({
        name: db.RegExp({
          regexp: app.globalData.deletValue,
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
    if (app.globalData.userSelectValue == 3) {
      db.collection('RLC').where({
        name: db.RegExp({
          regexp: app.globalData.deletValue,
          //从搜索栏中获取的value作为规则进行匹配。
          options: 'i',
          //大小写不区分
        })
      }).get({
        success: res => {
          //返回查询到的数据
          // console.log(res.data);
          const k = res.data.length;
          console.log(k);
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
    if (app.globalData.userSelectValue == 4) {
      db.collection('celGeneral').where({
        name: db.RegExp({
          regexp: app.globalData.deletValue,
          //从搜索栏中获取的value作为规则进行匹配。
          options: 'i',
          //大小写不区分
        })
      }).get({
        success: res => {
          //返回查询到的数据
          // console.log(res.data);
          const k = res.data.length;
          console.log(k);
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
    if (app.globalData.userSelectValue == 5) {
      db.collection('celIC').where({
        name: db.RegExp({
          regexp: app.globalData.deletValue,
          //从搜索栏中获取的value作为规则进行匹配。
          options: 'i',
          //大小写不区分
        })
      }).get({
        success: res => {
          //返回查询到的数据
          // console.log(res.data);
          const k = res.data.length;
          console.log(k);
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
    if (app.globalData.userSelectValue == 6) {
      db.collection('celTransor').where({
        name: db.RegExp({
          regexp: app.globalData.deletValue,
          //从搜索栏中获取的value作为规则进行匹配。
          options: 'i',
          //大小写不区分
        })
      }).get({
        success: res => {
          //返回查询到的数据
          // console.log(res.data);
          const k = res.data.length;
          console.log(k);
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
    if (app.globalData.userSelectValue == 7) {
      db.collection('celTool').where({
        name: db.RegExp({
          regexp: app.globalData.deletValue,
          //从搜索栏中获取的value作为规则进行匹配。
          options: 'i',
          //大小写不区分
        })
      }).get({
        success: res => {
          //返回查询到的数据
          // console.log(res.data);
          const k = res.data.length;
          console.log(k);
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
    if (app.globalData.userSelectValue == 8) {
      db.collection('celBoard').where({
        name: db.RegExp({
          regexp: app.globalData.deletValue,
          //从搜索栏中获取的value作为规则进行匹配。
          options: 'i',
          //大小写不区分
        })
      }).get({
        success: res => {
          //返回查询到的数据
          // console.log(res.data);
          const k = res.data.length;
          console.log(k);
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
  },
  deleteValue:function(e){
    const that = this;
    // 获取这个节点的全名
    var viewDataSet = e.target.dataset;
    // console.log(viewId); //输出点击的view的id，第二种情况就不重复写了
    console.log(viewDataSet.text); 
    // 获取分类名 来决定检索的数据库
    let sortName = app.globalData.userSelectValue;
    // console.log(viewDataSet.id); //输出该文本
    // console.log(app.globalData.userSelectValue)
    wx.showModal({
      content: '确认删除',
      success(res) {
        if (res.confirm) {
// 进行celbook数据库检索并删除
          if (sortName == 1) {

            const db = wx.cloud.database();
            db.collection('celBook').where({
              name: viewDataSet.text
            }).get({
              success: res => {
                wx.cloud.callFunction({
                  // 需修改
                  name: 'delCelBook',
                  data: {
                    DataId: res.data[0]._id,
                  },
                  success: res => {
                    wx.showToast({
                      title: '删除成功',
                      icon: 'success',
                      duration: 500
                    })
                    that.setData({
                      'languageList': null
                    })
                  }
                })

                // 重复录入则提示已存在的位置
              }
            })
          }
      ////////////////////////////////////////////////////
      /*
      仪器仪表录入
      */
      ////////

      if (sortName == 2) {

        const db = wx.cloud.database();
        db.collection('celInstruent').where({
          name: viewDataSet.text
        }).get({
          success: res => {
            wx.cloud.callFunction({
              // 需修改
              name: 'delcelInstruent',
              data: {
                DataId: res.data[0]._id,
              },
              success: res => {
                wx.showToast({
                  title: '删除成功',
                  icon: 'success',
                  duration: 500
                })
                that.setData({
                  'languageList': null
                })
              }
            })

            // 重复录入则提示已存在的位置
          }
        })
      }
      ////////////////////////////////////////////////////
      /*
      电容电感电阻
      */
      ///////////////

      if (sortName == 3) {

        const db = wx.cloud.database();
        db.collection('RLC').where({
          name: viewDataSet.text
        }).get({
          success: res => {
            wx.cloud.callFunction({
              // 需修改
              name: 'delRLC',
              data: {
                DataId: res.data[0]._id,
              },
              success: res => {
                wx.showToast({
                  title: '删除成功',
                  icon: 'success',
                  duration: 500
                })
                that.setData({
                  'languageList': null
                })
              }
            })

            // 重复录入则提示已存在的位置
          }
        })
      }
      ////////////////////////////////////////////////////
      /*
      通用器件
      */
      ///////////////////////
      if (sortName == 4) {

        const db = wx.cloud.database();
        db.collection('celGeneral').where({
          name: viewDataSet.text
        }).get({
          success: res => {
            wx.cloud.callFunction({
              // 需修改
              name: 'delcelGeneral',
              data: {
                DataId: res.data[0]._id,
              },
              success: res => {
                wx.showToast({
                  title: '删除成功',
                  icon: 'success',
                  duration: 500
                })
                that.setData({
                  'languageList': null
                })
              }
            })
            // 重复录入则提示已存在的位置
          }
        })
      }
      ////////////////////////////////////////////////////
      /*
      芯片存储器
      */
      //////////////
      if (sortName == 5) {

        const db = wx.cloud.database();
        db.collection('celIC').where({
          name: viewDataSet.text
        }).get({
          success: res => {
            wx.cloud.callFunction({
              // 需修改
              name: 'delcelIC',
              data: {
                DataId: res.data[0]._id,
              },
              success: res => {
                wx.showToast({
                  title: '删除成功',
                  icon: 'success',
                  duration: 500
                })
                that.setData({
                  'languageList': null
                })
              }
            })
                        // 重复录入则提示已存在的位置
          }
        })
      }
      ////////////////////////////////////////////////////
      /*
      传感器
      */
      /////////////////////////
      if (sortName == 6) {

        const db = wx.cloud.database();
        db.collection('celTransor').where({
          name: viewDataSet.text
        }).get({
          success: res => {
            wx.cloud.callFunction({
              // 需修改
              name: 'delcelTransor',
              data: {
                DataId: res.data[0]._id,
              },
              success: res => {
                wx.showToast({
                  title: '删除成功',
                  icon: 'success',
                  duration: 500
                })
                that.setData({
                  'languageList': null
                })
              }
            })
                        // 重复录入则提示已存在的位置
          }
        })
      }
     ////////////////////////////////////////////////////
      /*
      工具/辅材/线材/五金 
      */
      ///////////////////////

      if (sortName == 7) {

        const db = wx.cloud.database();
        db.collection('celTool').where({
          name: viewDataSet.text
        }).get({
          success: res => {
            wx.cloud.callFunction({
              // 需修改
              name: 'delcelTool',
              data: {
                DataId: res.data[0]._id,
              },
              success: res => {
                wx.showToast({
                  title: '删除成功',
                  icon: 'success',
                  duration: 500
                })
                that.setData({
                  'languageList': null
                })
              }
            })
                        // 重复录入则提示已存在的位置
          }
        })
      }
      ////////////////////////////////////////////////////
      /*
      开发板录入
      */
      ///////////////////

      if (sortName == 8) {

        const db = wx.cloud.database();
        db.collection('celBoard').where({
          name: viewDataSet.text
        }).get({
          success: res => {
            wx.cloud.callFunction({
              // 需修改
              name: 'delcelBoard',
              data: {
                DataId: res.data[0]._id,
              },
              success: res => {
                wx.showToast({
                  title: '删除成功',
                  icon: 'success',
                  duration: 500
                })
                that.setData({
                  'languageList': null
                })
              }
            })
            // 重复录入则提示已存在的位置
          }
        })
      }
} else if (res.cancel) {
          that.setData({
            'languageList': null
          })
        }
      }
    });
    //   不知道为什么没法把数据库名作为参数进行传输 未解决

  }
})