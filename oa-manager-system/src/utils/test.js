/**
 * @author YangLing
 * @date 2022/4/9 4:00 PM
 */

/*
递归：
  函数调用函数本身，并且有一个结束条件，否则造成栈溢出， 这个我们称之为递归

场景：
  有多层结构，并切层级结构基本上大致类似，我们就可以使用递归来进行处理

  递归效率非常低， 非必要情况下，不要滥用递归
 */

// function sport(step){
//   if(step === 0){
//     console.log("我已经达到了")
//   }else{
//     step--
//     console.log(`我还剩下${step}步`)
//     sport(step)
//   }
// }
//
// sport(100)
//
// [
//   {
//     name : "家具"
//     children : [
//       {
//         name : "沙发",
//         children : [
//           {
//             name : "长发"
//           }
//         ]
//
//       }
//     ]
//   }
// ]
//
// 家具分类
//     沙发
//         长沙发
//             红色
//             蓝色
//         短沙发
//             黄色
//             绿色
//     柜子
//         大柜子
//         小柜子
//     床
//     桌子
//
// 上衣分类
//
// 家电分类


// function result(min,max){
//   // 1 + 2 + 3 + 100
//   if(min === max){
//     console.log("加完了")
//     return min
//   }else{
//     //     1   +    2   + 3  + 4 + ... + 100
//     return min + result(min + 1,max)
//   }
//   // 从大到小相加 100 + 99 + 98 + 。。。 + 1
// }
//
// console.log(result(1,100))



