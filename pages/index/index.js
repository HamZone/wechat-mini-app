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
      title: e.detail.data[e.detail.data.length-1].title,
      path: "pages/share/share?shareUrl=" +e.detail.data[e.detail.data.length-1].path
    }
  }
})