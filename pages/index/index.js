//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isSearching:false,
    userInfo: {},
    hasUserInfo: false,
    canIUse: qq.canIUse('button.open-type.getUserInfo')
  },
  tapToSearch: function(event) {
    this.setData({
      isSearching:true
    })
  },
  tapToCloseSearch: function(event){
    this.setData({
      isSearching:false
    })
  },
  tapToNavigate: function(event) {
    var cat = event.currentTarget.dataset['cat'];
    var source = this
    qq.showLoading({title:"加载中"})
    qq.request({
      url:"http://shu.kingfish404.cn/post/cat?page=1&size=5&cat="+cat,
      method:"GET",
      dataType:"json",
      fail:function(res) {
        qq.showToast({
          title:"网络异常",
          icon:"none"
        })
      },
      success(res){source.handlerRes(res, cat)},
      complete:function(res) {qq.hideLoading()},
    })
  },
  handlerRes: function(res,cat) {
    if (!res.data || res.data.code != 0) {
      qq.showToast({
        title:"网络异常",
        icon:"none"
      })
      return
    }
    if (res.data.data.length <= 0) {
      qq.showToast({
        title:"网络异常",
        icon:"none"
      })
      return
    }
    app.globalData.articleData = res.data.data
    qq.navigateTo({
      url:"../detail/index?cat="+cat
    })
  
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      qq.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
