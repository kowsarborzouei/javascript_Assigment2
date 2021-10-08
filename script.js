function  Food(name,type,price,isReady,deliverTime) {
    this.name = name;
    this.type = type;
    this.price = price;
    this.isReady = isReady;
    this.createComment = function (author, text) {
        return {
            author,
            date:new Date(),
            rate:0,
            text,
        }

    }
    this.comments=[]
    this.deliverTime = deliverTime;
}
const pizza=new Food('peperoni','fastfood',550000,false,30)

pizza.comments.push(pizza.createComment('kowsar','good'))

console.log(pizza)