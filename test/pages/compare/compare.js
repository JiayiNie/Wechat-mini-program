const school_list = [];
const school_list1 = [];
const id_list=[];
const id_list1=[];
const temp=[];
// const datalist = [];
// console.log(datalist)
Page({
  
  data: {
    school:[],
    id:[],
    datalist : [],
    templist : [],
    detail:[],
    detail2:[],
      imgHeader:"https://716a-qjjh-0gycpoief2f304db-1305060071.tcb.qcloud.la/cloudbase-cms/upload/2021-03-16/r4pv6zs33laa998vvvckcjuf0fo88fzi_.jpg",
    
  },
  onShow: function (options) {
    let that = this
    wx.cloud.callFunction({
      name:"fetchData",
      success(res){
        console.log("云函数请求成功",res)
        school_list.push("不选择")
        id_list.push(null)
        for( var i in  res.result.data)
        {
          
          school_list1.push(res.result.data[i].name)
          id_list1.push(res.result.data[i]._id)
          school_list.push(res.result.data[i].name)
          id_list.push(res.result.data[i]._id)
          that.setData({
            school:school_list,
            id:id_list,
            school1:school_list1,
            id1:id_list1,
          })
        }
        console.log(that.data.school)
        console.log(that.data.id)
      
        
      },
      fail(res){
        console.log("云函数请求失败",res)
      }
    })
    
  },
  
 
  bindChange: function (e) {
    this.data.templist.length = 0;
    temp.length = 0;
    const val = e.detail.value
    console.log(val);
    
    temp.push(this.data.id1[val[0]])
    temp.push(this.data.id[val[1]])
    temp.push(this.data.id[val[2]])
    this.setData({
      templist: temp
    })
   
    
  },
  checkboxChange(event){
    console.log("check的数据", event.detail.value)
    this.setData({
      templist: event.detail.value
    })
    },
    




check(e){
  console.log(this.data.templist)
  var model = JSON.stringify(this.data.templist)
  wx.navigateTo({
    url: '/pages/detailcp/detailcp?model='+encodeURIComponent(model),
  })
}
   
  
})
