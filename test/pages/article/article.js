// pages/article/article.js
Page({

  data: {
    detail:" ",
  },
  onLoad: function (options) {
    console.log("详情页面接受的id", options.id)
    //查询表中的id
    wx.cloud.database().collection("article")
    .doc(options.id)
    .get()
    .then(res =>{
      console.log("详情页打印成功",res)
      this.setData({
        detail: res.data
      })
    })
    .catch(res =>{
      console.log("详情页打印失败",res)
    })
  }
})