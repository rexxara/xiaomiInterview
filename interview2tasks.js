////////////////task1
function Func(){
    getInfo=function () {
        console.log('1')
    }
    return this
}
Func.getInfo=function(){
    console.log('2')
}
Func.prototype.getInfo=function(){
    console.log('3')
}
var getInfo=function(){
    console.log('4')
}
function getInfo() {
    console.log('5')
}
Func.getInfo()//2
getInfo()//4
Func().getInfo()//1
getInfo()//1
new Func.getInfo()//2
new Func().getInfo()//3
new new Func().getInfo()//3

//////////////task2
function ff(param) {
    let sum=0
    return function (param) {
        if(arguments.length>1){
            return Array.prototype.reduce.call(arguments,(i,v)=>i+v)
        }
        sum+=param;
        console.log(sum)
        return　f
    }
}
const f=ff()
f(1)(2)(3)(4)(5)
let res=f(1,2,3,4,5)
console.log(res)

/////////////////task3
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const s = 16
arr.filter((v, k) => {
    arr.filter((vv) => {
        if (vv === s - v) {
            console.log(v, vv)
        }
    })
})