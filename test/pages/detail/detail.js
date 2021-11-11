// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:" ",
      imgHeader:"https://716a-qjjh-0gycpoief2f304db-1305060071.tcb.qcloud.la/cloudbase-cms/upload/2021-03-16/r4pv6zs33laa998vvvckcjuf0fo88fzi_.jpg",
      imgFooter:"https://716a-qjjh-0gycpoief2f304db-1305060071.tcb.qcloud.la/footer.png?sign=95b13c86ee9e022df6df6e3043f098a1&t=1615040433",
      id :[],
      id1:[],
      datalist2021:[],
      name:""

  },

  
  onLoad: function (options) {
    this.setData({
      id: options.id
    })
    console.log("详情页面接受的", options)
    console.log("详情页面接受的id", options.id)
    console.log("id", this.data.id)
    //查询表中的id
    wx.cloud.database().collection("Universities")
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
    
    let that = this
    wx.cloud.callFunction({
      name:"fetch2021",
      success(res){
        console.log("云函数请求成功",res)
        that.setData({
          datalist2021:res.result.data
        })
      },
      fail(res){
        console.log("云函数请求失败",res)
      }
    })
  },

  goDetail(event){
    // console.log("点击获取的数据", event.currentTarget.dataset.item._id)
    
    
    for (var i in this.data.datalist2021)
    {
      // console.log(this.data.datalist2021[i].name)
      // console.log(this.data.datalist2021[i])

      if (this.data.name == this.data.datalist2021[i].name)
      {
        this.setData({
          id1: this.data.datalist2021[i]._id
        })
      }
    }

    // console.log(this.data.id.length)
    if(this.data.id1.length ==0)
    {
      wx.navigateTo({
        url: '/pages/detail3/detail3?id=',
      })
    }
    else{
      wx.navigateTo({
        url: '/pages/detail2/detail2?id='+this.data.id1,
      })
  
    }

  },

  
})