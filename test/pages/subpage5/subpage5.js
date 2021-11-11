// pages/subpage1/subpage1.js
Page({
  data:{
    datalist:"",
  },

  onLoad: function (options) {
    let that = this
    wx.cloud.callFunction({
      name:"fetchSub5",
      success(res){
        console.log("云函数请求成功",res)
        that.setData({
          datalist:res.result.data
        })
      },
      fail(res){
        console.log("云函数请求失败",res)
      }

    })
  },
})