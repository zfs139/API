import requset from '../utils/requset';

/**
 * 例子 获取首页列表
 */
function getArticleList(){
  return new Promise((resolve, reject) => {
    requset("get",'/article/home/index',{name:"1"}).then(res => {
      resolve (res);
    },error => {
      console.log("网络异常~",error);
      reject(error)
    })
  }) 
}

export {
   getArticleList
}

  // 接口调用方法
//   getArticleList().then(
//     (res) => {
//         console.log("get article response:", res);
//     },
//    (error) => {
//         console.log("get response failed!");
//     }
//  );

