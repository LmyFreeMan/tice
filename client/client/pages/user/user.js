// client/pages/user/user.js
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

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
tap:function(e)
{
  console.log(e)
  wx.request({
    url: 'http://www.gxfwz36524.com/pe/index/search',
    method: 'POST',
    data: {
      id:e.currentTarget.id,
      username: getApp().globalData.username
    }  ,
    header: {
      //设置参数内容类型为x-www-form-urlencoded
      'content-type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    },
    success: function (res) {
      getApp().globalData.data=res.data
      console.log(res.data)
     wx.navigateTo({
       url: '/pages/detail/detail?pro='+e.currentTarget.id
     })
    }

  })
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