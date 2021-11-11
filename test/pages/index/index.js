Page({
  data:{
    imgHeader:"https://716a-qjjh-0gycpoief2f304db-1305060071.tcb.qcloud.la/cloudbase-cms/upload/2021-03-16/r4pv6zs33laa998vvvckcjuf0fo88fzi_.jpg",
    imgFooter:"https://716a-qjjh-0gycpoief2f304db-1305060071.tcb.qcloud.la/cloudbase-cms/upload/2021-03-17/lnuecx5sf3syzn6za3ev79d4an7u4gpx_.jpg",
    imgUrl1:"https://716a-qjjh-0gycpoief2f304db-1305060071.tcb.qcloud.la/cloudbase-cms/upload/2021-03-17/16nhz87slj6q6an40q7holwmjwy50vut_.jpg",
    imgUrl2:"https://716a-qjjh-0gycpoief2f304db-1305060071.tcb.qcloud.la/cloudbase-cms/upload/2021-03-17/3ubgeqms3bizr6uxe7n1slcvf0xtaj2o_.jpg",
    imgUrl3:"https://716a-qjjh-0gycpoief2f304db-1305060071.tcb.qcloud.la/cloudbase-cms/upload/2021-03-17/vz1jljbcd79e2hsvma2ojw3fahxya64y_.jpg",
    imgUrl4:"https://716a-qjjh-0gycpoief2f304db-1305060071.tcb.qcloud.la/cloudbase-cms/upload/2021-03-17/bnbh1ckyu1e7r08j9x449hbidajalvcx_.jpg",
    imgUrl5:"https://716a-qjjh-0gycpoief2f304db-1305060071.tcb.qcloud.la/cloudbase-cms/upload/2021-03-17/to36jhblagldmvxcudwqbjcm4tbd9k5s_.jpg",
    title1:"https://716a-qjjh-0gycpoief2f304db-1305060071.tcb.qcloud.la/cloudbase-cms/upload/2021-03-16/dav1098d1ghpgvwxqcdwrtnuyicwktga_.jpg",
    title2:"https://716a-qjjh-0gycpoief2f304db-1305060071.tcb.qcloud.la/cloudbase-cms/upload/2021-03-16/c8hs38nuto8a5rx7ubb1zyxktm9sps1s_.jpg",
    title3:"https://716a-qjjh-0gycpoief2f304db-1305060071.tcb.qcloud.la/cloudbase-cms/upload/2021-04-07/yoy0o0d01jf0vrwz05u4ecdpsas6edmc_.jpg",
    title4:"https://716a-qjjh-0gycpoief2f304db-1305060071.tcb.qcloud.la/cloudbase-cms/upload/2021-03-16/3ojbpfwsjz836g139yxzvg28rrgun9iy_.jpg",
    title5:"https://716a-qjjh-0gycpoief2f304db-1305060071.tcb.qcloud.la/cloudbase-cms/upload/2021-04-07/yw7evhdjxy7ko0mr98jupp8nybjrqr63_.jpg",
    // title6:"https://716a-qjjh-0gycpoief2f304db-1305060071.tcb.qcloud.la/cloudbase-cms/upload/2021-03-16/5rmsfxcq9axnbh2xan1ecqapq2zsnu83_.jpg",

    datalist : []
  },
  onShow(){
    
  },
  gotoPageS(event){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  gotoPageC(event){
    wx.navigateTo({
      url: '/pages/compare/compare',
    })
  },
  gotoPageSup(event){
    wx.navigateTo({
      url: '/pages/signup/signup',
    })
  },
  onLoad: function (options) {
    let that = this
    wx.cloud.callFunction({
      name:"fetchArticles",
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
      url: '/pages/article/article?id='+event.currentTarget.dataset.item._id,
    })
  },

  gotoPageSub1(event){
    wx.navigateTo({
      url: '/pages/subpage1/subpage1',
    })
  },
  gotoPageSub1(event){
    wx.navigateTo({
      url: '/pages/subpage1/subpage1',
    })
  },
  gotoPageSub2(event){
    wx.navigateTo({
      url: '/pages/subpage2/subpage2',
    })
  },
  gotoPageSub3(event){
    wx.navigateTo({
      url: '/pages/subpage3/subpage3',
    })
  },
  gotoPageSub4(event){
    wx.navigateTo({
      url: '/pages/subpage4/subpage4',
    })
  },
  gotoPageSub5(event){
    wx.navigateTo({
      url: '/pages/subpage5/subpage5',
    })
  },
  gotoPageSub6(event){
    wx.navigateTo({
      url: '/pages/subpage6/subpage6',
    })
  }
  
  
})
