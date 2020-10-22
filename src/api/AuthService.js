import axios from 'axios'
import crypto from 'crypto'//功能异常段落
const loginURL='http://10.10.18.98:3000/loginCheck'
const logoutURL='http://10.10.18.98:3000/logout'//功能异常段落
const sessionName='sessionid'

function login({username,password}){
  const hasherMD5=crypto.createHash('md5')
  hasherMD5.update(password)
  password=hasherMD5.digest('hex')
  return new Promise((resolve,reject)=> {
    axios.post(loginURL, {username, password}).then(function(res){
      if(res.data[sessionName])
        resolve(res.data)
      else
        reject('0')   //抛出0表示没有获取到session
    }).catch(err=>{reject(err)})
  })
}
//功能异常段落
function logout(){
  return new Promise(function (resolve, reject) {
    axios.get(logoutURL).then(res=>{
      console.log(res.data)
      if(String(res.data)==='1')//？
      {
        console.log('abc')
        window.localStorage.clear()
        resolve()
      }
      else
        reject('logout error')
    })
  })
}
//到此

export default {
  //功能异常段落
  login,logout 
  // login
}