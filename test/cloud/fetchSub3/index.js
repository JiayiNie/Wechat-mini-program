// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:"qjjh-0gycpoief2f304db"
})

// 云函数入口函数
exports.main = async (event, context) => {
  return cloud.database().collection("sub3").get({
    success(res){
      return res
    },
    fail(err){
      return err
    }
  })
}