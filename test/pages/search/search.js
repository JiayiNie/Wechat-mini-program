// pages/search/search.js
Page({

  data: {
      imgHeader:"https://716a-qjjh-0gycpoief2f304db-1305060071.tcb.qcloud.la/cloudbase-cms/upload/2021-03-16/r4pv6zs33laa998vvvckcjuf0fo88fzi_.jpg",
      
    datalist : [],
    datalist2021: [],
  },

  onLoad: function (options) {
    let that = this
    wx.cloud.callFunction({
      name:"fetchData",
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
    // wx.cloud.callFunction({
    //   name:"fetch2021",
    //   success(res){
    //     console.log("云函数请求成功",res)
    //     that.setData({
    //       datalist2021:res.result.data
    //     })
    //   },
    //   fail(res){
    //     console.log("云函数请求失败",res)
    //   }
    // })
  },
    goDetail(event){
      console.log("点击获取的数据", event.currentTarget.dataset.item._id)
      wx.navigateTo({
        url: '/pages/detail/detail?id='+event.currentTarget.dataset.item._id,
      })

    },
    goto2021(event){
      wx.navigateTo({
        url: '/pages/detail2/detail2'
      })
  
    }

  })

  