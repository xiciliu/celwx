// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'xccstu-265',
})
const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  var userDeleteValue = db.collection('celInstruent').doc(event.DataId)
  await userDeleteValue.remove()
  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}

