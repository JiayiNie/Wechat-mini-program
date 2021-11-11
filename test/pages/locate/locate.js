// pages/locate/locate.js
Page({
  data: {
    imgHeader:"https://716a-qjjh-0gycpoief2f304db-1305060071.tcb.qcloud.la/cloudbase-cms/upload/2021-03-16/r4pv6zs33laa998vvvckcjuf0fo88fzi_.jpg",
    imgFooter:"https://716a-qjjh-0gycpoief2f304db-1305060071.tcb.qcloud.la/footer.png?sign=95b13c86ee9e022df6df6e3043f098a1&t=1615040433",
    choice: ["文科","理科"],
    grade:"",
    datalist : [],
    selectedlist: [],
    

  },


  bindChange: function (e) {
    const val = e.detail.value
    console.log(val);
    this.setData({
      day: val,
      selection: this.data.choice[val],
    })
    console.log(this.data.selection)
    console.log(this.data.day)

    if(this.data.selection =="文科")
    {
      let that = this
      wx.cloud.callFunction({
        name:"fetchLiberal",
        success(res){
          console.log("云函数请求成功",res.result.data)
          that.setData({
            datalist:res.result.data
          })
        },
        fail(res){
          console.log("云函数请求失败",res)
        }
    })
    }
    else if(this.data.selection =="理科")
    {
      let that = this
      wx.cloud.callFunction({
        name:"fetchScience",
        success(res){
          console.log("云函数请求成功",res.result.data)
          that.setData({
            datalist:res.result.data
          })
        },
        fail(res){
          console.log("云函数请求失败",res)
        }
      }) 
    }
  },

  bindKeyInput: function (e) {
    this.setData({
      choice: e.detail.value
    })

    if(this.data.choice =="文科")
    {
      let that = this
      wx.cloud.callFunction({
        name:"fetchLiberal",
        success(res){
          console.log("云函数请求成功",res.result.data)
          that.setData({
            datalist:res.result.data
          })
        },
        fail(res){
          console.log("云函数请求失败",res)
        }
    })
    }
    else if(this.data.choice =="理科")
    {
      let that = this
      wx.cloud.callFunction({
        name:"fetchScience",
        success(res){
          console.log("云函数请求成功",res.result.data)
          that.setData({
            datalist:res.result.data
          })
        },
        fail(res){
          console.log("云函数请求失败",res)
        }
      }) 
    }
  },
  bindKeyInput1: function (e) {
    this.setData({
      grade: e.detail.value
    })
  },

  getValue:function(e){
   var value = this.data.grade;
    if (0<value%10<5)
    {
      value = parseInt(value /10) *10
      console.log(value)
    }
    else if(5<= value%10 <=9)
    {
      value = parseInt(value /10) *10
      console.log(value)
    }
    else{
      console.log(value)
    }
    
    var obj = this.data.datalist
    this.setData({
      selectedlist : []
    })
    
    for(var i in obj) {
      if ( parseInt(obj[i].mark) <this.data.grade  && (this.data.grade -parseInt(obj[i].mark))<=5)
      {
        this.data.selectedlist.push(obj[i])
        console.log("小于" +obj[i].mark)
        <= parseInt(obj[i].mark)>= this.data.grade +10
      }
      else if( parseInt(obj[i].mark) >this.data.grade  && (parseInt(obj[i].mark)-this.data.grade)<=10)
      {  this.data.selectedlist.push(obj[i])
        console.log("大于" +obj[i].mark)
      }
      else if(parseInt(obj[i].mark) ==this.data.grade)
      {
        this.data.selectedlist.push(obj[i])
        console.log("等于" +obj[i].mark)
      }
      
    }
    // console.log(this.data.selectedlist)

    this.setData({
      selectedlist : this.data.selectedlist
    })
    var model = JSON.stringify(this.data.selectedlist)
    wx.navigateTo({
      url: '/pages/located/located?model=' +model,
    })
   },

  
  
  
})