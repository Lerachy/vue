//功能异常文件
import axios from 'axios'
const fileListFetchingAPI='http://127.0.0.1:3000/api/fileList'
async function getFilelist() {
  let res=await __fetchRawData()
  return res
}

export default {getFilelist}

function __fetchRawData(){       // return type:Promise
  let p=new Promise((resolve, reject) => {
    axios.get('http://127.0.0.1:3000/api/fileList').then(function(res){

      resolve(res.data)

    }).catch(function(error){
      reject(error)})

  })


  return p
}
function __md5Map(res){
  //fetchData的回调函数，用于获得返回的列表中的unique字段，并将其和md5的一个映射存入localStorage中
  let md5map=[]
  for(let{md5,unique} of res){
    md5map.push({[md5]:unique})
  }
  localStorage.setItem('md5map',JSON.stringify({md5map}))
  return Promise.resolve()
}

