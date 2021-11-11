// pages/detail2/detail2.js

Page({
  data:{
    detail:[],
  },

  onLoad: function (options) {
    this.setData({
      id: options.id
    })
    console.log("详情页面接受的", options)
    console.log("详情页面接受的id", options.id)
    console.log("id", this.data.id)
    //查询表中的id
    
    wx.cloud.database().collection("Uni2021")
    .doc(options.id)
    .get()
    .then(res =>{
      console.log("详情页打印成功",res)
      this.setData({
        detail: res.data,
        name: res.data.name
      })
    })
    .catch(res =>{
      console.log("详情页打印失败",res)
    })
  }
})
