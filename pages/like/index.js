//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isSearching:false,
    userInfo: {},
    hasUserInfo: false,
  },
  tapOpen(e){
    var source = this
    qq.authorize({
      scope:"scope.userInfo",
      success(){
        qq.getUserInfo({
          success: res => {
            app.globalData.userInfo = res.userInfo
          }
        })
        source.setData({
          userInfo:app.globalData.userInfo,
          hasUserInfo:true
        })
      }
    })
  },
  onLoad: function () {
    console.log(app.globalData.userInfo)
    this.setData({
      hasUserInfo:app.globalData.userInfo != null,
      userInfo:app.globalData.userInfo
    })
  },
})
