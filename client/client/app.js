//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({
    onLaunch: function () {
        qcloud.setLoginUrl(config.service.loginUrl)
    },
  globalData: {
    student:'',
    length:'',
     schoolnum:'',
     test:'',
     time:'',
     username:'',
     data:''
  }
})