// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../images/frist.png',
      '../../images/second.png',
      '../../images/third.png'
    ],
    indicatorDots: false,
    autoplay:true,
    interval: 3000,
    duration: 1000

  },
  onShow:function()
  {
 
  },

  submitButton: function(e) {
    console.log(e)
    if(e.detail.value.username=="")
    {
    wx.showModal({
      title: '请输入工号',
      showCancel:false,
    })
    return false;
    }
    if (e.detail.value.passWord == "") {
      wx.showModal({
        title: '请输入密码',
        showCancel: false,
      })
      return false;
    }

    wx.request({
      url: 'http://www.gxfwz36524.com/pe/index/login',
      method: "POST",
      data: {
        username: e.detail.value.username,
        password: e.detail.value.passWord
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      success: function(res) {
        console.log(res)
        if(res.data=='success')
        {
          getApp().globalData.username = e.detail.value.username
          wx.switchTab({
            url: '../index/index',
          })
        }
        else
     {
          getApp().globalData.username = e.detail.value.username
          wx.showModal({
            title: '工号/密码错误',
            showCancel: false,
          })
     }
      }
  })
  }
})