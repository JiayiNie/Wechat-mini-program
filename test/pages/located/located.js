Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:" ",
  },

  
  onLoad: function (options) {
    var mylist = JSON.parse(options.model)
    console.log("接受的list", mylist)
    if (mylist.length == 0)
    {
      this.setData({
        detail: ["no"]
      })
    }
    else{
      this.setData({
        detail: mylist
      })
    }
   
  }




  
  
})