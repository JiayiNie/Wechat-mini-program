// pages/open/open.js
const db = wx.cloud.database().collection("userInfo")
Page({

  data: {
    mobile: " ",
    ImgOpen:"https://716a-qjjh-0gycpoief2f304db-1305060071.tcb.qcloud.la/imgOpen.png?sign=550bfa3d86f5dd5863a4c3a61fdb63ed&t=1615086259"

  },

  onLoad: function (options) {
    

  },
  getPhoneNumber(e) {
    var that = this;
    wx.cloud.callFunction({
        name: 'getMobile',
        data: {
            weRunData: wx.cloud.CloudID(e.detail.cloudID),
        }
    }).then(res => {
        that.setData({
            mobile: res.result.event.weRunData.data.phoneNumber,
        })
        db.add({
          data:{
            mobileNo:res.result.event.weRunData.data.phoneNumber
          }
        })
        console.log("mobile获取成功",res.result.event.weRunData.data.phoneNumber)
    }).catch(err => {
        console.error(err);
    })

    wx.switchTab({
      url: '/pages/index/index',
    })
  }

})
