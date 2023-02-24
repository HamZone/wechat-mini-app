const app = getApp()

Page({
  data: {
    url: "https://bbs.hamzone.cn",
    shareData:{}
  },
  onShareAppMessage(options){
    return this.shareData
  },
  message (e) {
    var that = this
    that.shareData = {
      title: e.detail.data[0].title,
      path: "pages/share/share?shareUrl=" +e.detail.data[0].path
    }
  }
})