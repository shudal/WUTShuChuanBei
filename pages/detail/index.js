//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    page:1,
    currentArticle:{},
    isEmpty:false,
    allPage:1,
    cat:1,
  },
  nextPage(){
    if (this.data.allPage <= this.data.page) {
      return
    }

    var page = this.data.page + 1
    var article = app.globalData.articleData[page-1]
    article = this.handlerArticle(article)
    this.setData({
      page:page,
      currentArticle:article,
    })
    
    
    if (this.data.allPage - 1 <= this.data.page) {
      qq.showLoading({title:"加载中"})
      qq.request({
        url:"http://shu.kingfish404.cn/post/cat?size=5&page="+(parseInt(this.data.page/5)+1)+"&cat="+this.data.cat,
        method:"GET",
        success:this.handlerRes,
        dataType:"json",
        fail:function(res){qq.showToast({title:"网络异常",icon:"none"})},
        complete:function(res){qq.hideLoading()}
      })
    }
  },
  prePage(){
    if (this.data.page <= 1) {
      return
    }

    var page = this.data.page 
    page = page - 1
    var article = app.globalData.articleData[page-1]
    article = this.handlerArticle(article)
    this.setData({
      page:page,
      currentArticle:article
    })
  },
  handlerArticle:function (rowArticle) {
    var article = rowArticle
    var monthList = ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]
    article.contentList = rowArticle.content.split("|")
    var date = new Date(Number(rowArticle.cretime))
    var d = {}
    d.year = date.getFullYear()
    d.month = monthList[date.getMonth()-1]
    d.date = date.getDate()
    article.date = d
    return article
  },
  handlerRes: function(res) {
    if (!res.data|| res.data.code != 0) {
      qq.showToast({title:"网络异常",icon:"none"})
      return
    }
    if (!res.data.data || res.data.data.length <=0) {
      this.setData({
        isEmpty:true
      })
      return
    }
    
    app.globalData.articleData = app.globalData.articleData.concat(res.data.data)
    this.setData({
      allPage:app.globalData.articleData.length
    })
  },
  onLoad: function (options) {
    
    if (!app.globalData.articleData ||app.globalData.articleData.length <= 0) {
      qq.navigateBack({delta:1})
      return
    }

    var article = app.globalData.articleData[0]
    article = this.handlerArticle(article)
    this.setData({
      page:1,
      currentArticle:article,
      allPage:app.globalData.articleData.length,
      cat: options.cat
    })
    console.log(options)
  },
})
