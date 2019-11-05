//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({
    data: {
      array: ['1组', '2组', '3组', '4组', '5组', '6组', '7组', '8组', '9组', '10组', '11组', ' 12组', '13组', '14组', '15组', '16组', '17组', '18组', '19组', '20组'],
      test:['身高','体重','肺活量','体前屈','仰卧起坐','引体向上','立定跳远','50米','800米','1000米'],
        userInfo: {},
        logged: false,
        time:['8:00','9:30','14:00',"15:30"],
        marks:'',
        showstudent:'',
        length:'',
        takeSession: false,
        requestResult: '',
    },
onLoad:function()
{



},
  bindPickerChangeTime:function(e)
  {
    var time = new Array('8:00', '9:30', '14:00', '15:30');

    console.log(e)
    console.log('picker发送选择改变，携带值为', e.detail.value)
    getApp().globalData.time=time[e.detail.value]
    console.log(getApp().globalData.time)
    this.setData({
      showtime: getApp().globalData.time
    })
  },
  bindPickerChange: function (e) {
    var array = new Array('1组', '2组', '3组', '4组', '5组', '6组', '7组', '8组', '9组', '10组', '11组', ' 12组', '13组', '14组', '15组', '16组', '17组', '18组', '19组', '20组');
    getApp().globalData.length=0
    console.log(e)
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: array[e.detail.value]
    })
    var that = this;
    wx.request({

      url: 'http://www.gxfwz36524.com/pe',
      data: {
       index: array[e.detail.value],
        time: getApp().globalData.time
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
             
        if(res.data=="fail")
        {
          wx.showModal({
            title: '请输入时间',
            showCancel:false,
          })
          return false;
        }
        console.log(res.data)
        console.log(typeof(res.data))
        var arrnew = new Array();
        for (var i = 0; i < res.data.length; i++) {
          arrnew[i] = res.data[i].schoolnum + res.data[i].name
        }
        getApp().globalData.schoolnum=res.data[0].schoolnum
        console.log(arrnew[0])
        getApp().globalData.student=res.data
        that.setData({
          student:getApp().globalData.student,
          arr:arrnew,
          showstudent: getApp().globalData.student[0]
        })
       
      },
 
    }) 
  },
  test:function(e)
  {
    var test = new Array('身高', '体重', '肺活量', '体前屈', '仰卧起坐', '引体向上', '立定跳远', '50米', '800米', '1000米');
    getApp().globalData.length = 0;
    console.log(e)
    console.log(test[e.detail.value])
    getApp().globalData.schoolnum = getApp().globalData.student[0].schoolnum
    getApp().globalData.test = test[e.detail.value],
    this.setData({
      studenttest:test[e.detail.value],
      showstudent: getApp().globalData.student[0]
      
    })
  },
  bindPickerChangenew:function(e)
  {
    console.log("changenew")
    console.log(e)
    getApp().globalData.length=e.detail.value,
      getApp().globalData.schoolnum = getApp().globalData.student[e.detail.value].schoolnum;
    console.log(getApp().globalData.student[e.detail.value])
     this.setData({
       showstudent: getApp().globalData.student[e.detail.value]
     })
  },
  listeninput:function(e)
  {

    console.log("dasda",getApp().globalData.schoolnum)
    console.log("test", getApp().globalData.test)
    if (getApp().globalData.test== "") {
      wx.showModal({
        title: '请输入项目',
        showCancel: false,
      })
      return false;
    }
 




    console.log(getApp().globalData.student.length)
    console.log(getApp().globalData.length)
    if (getApp().globalData.student.length==getApp().globalData.length)
  {
    wx.showModal({
      title: '该项目已经结束,请重新选择项目',
      showCancel:'false'
    })
  }
    console.log(e)
    if (e.detail.keyCode==32)
          {
            console.log("keyCode=32");
      console.log("student");
      console.log(e)

      var that = this;
      
      wx.request({
       
        url: 'http://gxfwz36524.com/pe/index/add',
        data: {
          schoolnum: getApp().globalData.schoolnum,
          test: getApp().globalData.test,
          mark: e.detail.value,
          username: getApp().globalData.username
        },
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
          var a='';
          wx.showToast({
            title: '添加成功',
          }),
          console.log("add")
          console.log(getApp().globalData.length)
          console.log(getApp().globalData.student[getApp().globalData.length])
        getApp().globalData.length++
            console.log(getApp().globalData.length)
          console.log(getApp().globalData.student[getApp().globalData.length])
          that.setData({
           marks:"",
            showstudent: getApp().globalData.student[getApp().globalData.length]
          })
          getApp().globalData.schoolnum = getApp().globalData.student[getApp().globalData.length].schoolnum
        },
        fail: function (res) {
          wx.showToast({
            title: '添加失败',
          })
        },
      
      })
     
          }

  },

 weice:function(e)
  {
  
   console.log(getApp().globalData.student.length)
   console.log(getApp().globalData.length)
   if (getApp().globalData.student.length == getApp().globalData.length) {
     wx.showModal({
       title: '该组已经结束,请重新选择分组',
       showCancel: 'false'
     })
   }
   console.log(e)

     console.log("keyCode=32");
     console.log("student");
     console.log(e)

     var that = this;

     wx.request({

       url: 'http://gxfwz36524.com/pe/index/weice',
       data: {
         schoolnum: getApp().globalData.schoolnum,
         test: getApp().globalData.test,
         mark: e.detail.value,
         username: getApp().globalData.username
       },
       method: 'POST',
       header: {
         'content-type': 'application/x-www-form-urlencoded'
       },
       success: function (res) {
         var a = '';
         if(res.data=='fail')
         {
           wx.showModal({
             title: '请选择项目',
             showCancel:false
           })
           return false;
         }
         wx.showToast({
           title: '添加成功',
         }),
           console.log("add")
         getApp().globalData.length++
         console.log(getApp().globalData.length)

         that.setData({
           marks: "",
           showstudent: getApp().globalData.student[getApp().globalData.length]
         })
         getApp().globalData.schoolnum = getApp().globalData.student[getApp().globalData.length].schoolnum
       },
       fail: function (res) {
         wx.showToast({
           title: '添加失败',
         })
       },

     })

   
  },
  zuobi:function(e)
  {
    console.log(e)
    console.log(getApp().globalData.student.length)
    console.log(getApp().globalData.length)
    if (getApp().globalData.student.length == getApp().globalData.length) {
      wx.showModal({
        title: '该项目已经结束,请重新选择项目',
        showCancel: 'false'
      })
    }
    console.log(e)
  
    console.log("keyCode=32");
    console.log("student");
    console.log(e)

    var that = this;

    wx.request({

      url: 'http://gxfwz36524.com/pe/index/zuobi',
      data: {
        schoolnum: getApp().globalData.schoolnum,
        test: getApp().globalData.test,
        mark: e.detail.value,
        username: getApp().globalData.username
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        var a = '';
        if (res.data == 'fail') {
          wx.showModal({
            title: '请选择项目',
            showCancel: false
          })
          return false;
        }
        wx.showToast({
          title: '添加成功',
        }),
          console.log("add")
        getApp().globalData.length++
        console.log(getApp().globalData.length)

        that.setData({
          marks: "",
          showstudent: getApp().globalData.student[getApp().globalData.length]
        })
        getApp().globalData.schoolnum = getApp().globalData.student[getApp().globalData.length].schoolnum
      },
      fail: function (res) {
        wx.showToast({
          title: '添加失败',
        })
      },

    })

    
  }
})
