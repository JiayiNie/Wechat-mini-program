// pages/detailcp/detailcp.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      imgHeader:"https://716a-qjjh-0gycpoief2f304db-1305060071.tcb.qcloud.la/cloudbase-cms/upload/2021-03-16/r4pv6zs33laa998vvvckcjuf0fo88fzi_.jpg",
      
    detail:[],
    length:[],
    mylist:[],
   

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var mylist = decodeURIComponent((options.model));
    var mylist = JSON.parse(mylist)
    console.log(mylist)
    
    for (var j in mylist)
    {
      if (mylist[j] == null)
      {
        mylist.splice(j,1)
      }
      console.log(mylist)

    }
    for (var i in mylist)
    {
      wx.cloud.database().collection("Universities")
      .doc(mylist[i])
      .get()
      .then(res =>{
        console.log("详情页打印成功",res.data)
        this.data.detail.push(res.data)
        var len = this.data.detail.length
        this.setData({
          detail: this.data.detail,
          length: len
        })
        console.log(this.data.detail)
      })
      .catch(res =>{
        console.log("详情页打印失败",res)
      })
    }

    
  },
  
 
  
})