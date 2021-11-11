Page({
  data:{
    datalist:"",
  },

  onLoad: function (options) {
    let that = this
    wx.cloud.callFunction({
      name:"fetchSub4",
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
  gotoArticle(event){
    console.log("点击获取的数据", event.currentTarget.dataset.item._id)
    wx.navigateTo({
      url: '/pages/subpage4_2/subpage4_2?id='+event.currentTarget.dataset.item._id,
    })
  },
})