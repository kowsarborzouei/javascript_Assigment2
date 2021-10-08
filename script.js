// // #################################################### 1 #################################################
//
// function  Food(name,type,price,isReady,deliverTime) {
//     this.name = name;
//     this.type = type;
//     this.price = price;
//     this.isReady = isReady;
//     this.rate=5;
//     this.comments=[]
//     this.deliverTime = deliverTime;
//     this.createComment = function (author, text) {
//         return {
//             author,
//             date:new Date(),
//             rate:0,
//             text,
//         }
//
//     }
//     this.order=function createOrder(a){
//         if(a===true){
//            console.log('premium')
//             let priceNew=(8/10*price)
//             console.log(priceNew , this.rate)
//         }
//         else {console.log('no premium')
//         console.log(price , this.rate)}
//
//     }
//     this.setRate=function (rateMe){
//         let sum=0;
//         for(let i=0;i<rateMe.length;i++){
//             let sum=rateMe[i]
//         }
//         this.rate= sum/rateMe.length;
//         return this.rate;
//     }
//
// }
//
// const pizza1=new Food('peperoni','fastfood',700000,false,30)
// const pizza2=new Food('peperoni','fastfood',650000,false,30)
//
//
//
// pizza1.comments.push(pizza2.createComment('zahra','good'))
// pizza2.comments.push(pizza1.createComment('kowsar','thats great',20))
//
// console.log(pizza1)
// console.log(pizza1.order(true))
// console.log(pizza2.order(false))
// console.log(pizza1.setRate([20,30,10]))
//
// // ################################################### Factory Function #####################################################
// function  creatFood(name,type,price,isReady,deliverTime){
//     return{
//         name,
//         type,
//         price,
//         isReady,
//         deliverTime,
//         rate:0,
//         comments :function (author,text) {
//         return {
//             author,
//             data: new Date(),
//             rate: 0,
//             text,
//         }
//     },
//         order:function (a){
//             if (a===true){
//                 console.log('premium')
//                 let priceNew=(8/10*price)
//                 console.log(priceNew , this.rate)
//             }
//             else {console.log('no premium')
//                 console.log(price , this.rate)}
//         },
//         setRate:function (rateMe){
//             let sum=0;
//             for(let i=0;i<rateMe.length;i++){
//                 let sum=rateMe[i]
//             }
//             this.rate= sum/rateMe.length;
//             return this.rate;
//         }
//
//     }
//
// }
// const pizza1=new creatFood('peperoni','fastfood',700000,false,30)
// console.log(pizza1)

// ###########################################  2/1 #############################################

//
// const obj1={
//     key0:false,
//     key1:'vall',
//     key2:20,
//     key3:[0,1,2],
//     key4:{name:'kowsar'}
// }
// const obj2=obj1
// function isEqual(obj1,obj2){
//     if(obj1===obj2){
//         console.log(true)
//     }
//     else {console.log(false)}
//
// }
// isEqual(obj1,obj2)

// ######################################### 2/2 #####################################
const obj1={
    key0:false,
    key1:'vall',
    key2:20,
    key3:[0],
}
const obj2={
    key0:false,
    key1:'vall',
    key2:20,
    key3:[0],
    key4:{},
}
function  isSame(obj1,obj2){
    if(obj1===obj2){
        console.log(true)
    }
    else {
        console.log(false)
    }

}
isSame(obj1,obj2)