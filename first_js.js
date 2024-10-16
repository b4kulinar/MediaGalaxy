let x = 25.123
//alert(x)
let y = "привет"
let z = true
//alert(1 / 0)
//alert(y / x)
let a = null
let b
//alert(a)
//alert(b)
let film = { name: "Avatar", release_year: 2023, givename: function () { alert("Привет") } }
// film.givename()
//alert(y.toUpperCase())
//alert(x.toFixed(1))
let massive = ['apple', 'grape', 'melon', 'pear', 'banana']
//alert(massive[2])
massive[0] = "orange"
//alert(massive[0])
//alert(massive.length)
//alert(massive)
//alert(massive.at(-1))
massive.pop()
massive.push("strawberry")
massive.shift()
massive.unshift("watermelon")
//alert(massive)
massive.splice(2, 1)
massive.splice(2, 0, "raspberry", "avocado")
//alert(massive.concat(["avocado","cucumber"]))
//alert(massive)
//for (let i = 0;i<massive.length;i++){console.log(massive[i])}
let massive2 = []
massive.map(function (value, index, array) { console.log(value.length); massive2.push(value.length) })
massive.sort()
massive2.sort()
massive2.forEach(function (value, index, array) { console.log(value) })
//let k = prompt("какой сейчас год?")
//if(k == 2024){alert("вы молодец!")}else{alert("а вот и нет!")}
//let nt = k == 2024?alert("вы молодец!"):alert("вы неправы!")
/*switch(k){
    case "2024":alert("в точку!");break;
    case "2025":alert("вы в будующем?");break;
    case "2020":alert("опять карантин?");break
    default:alert("попробуйте другой год")   
}
*/
/*function showmessage(name){
    y = "пока"
   let message = "привет"+name
    alert(message)
}
showmessage(" Шрек")
alert(y)*/
//age1 = prompt("сколько вам лет?")
//function agechecker(age){
//    if(age>18){alert("добро пожаловать на сайт")}else{alert("сначала позови родителей")}
//}
//agechecker(age1)
//alert(window.innerHeight)
//document.body.style.background="red"
//alert(location.href)
//document.getElementById("a").style.background="red"
//let label2=document.getElementsByClassName("poo")
//console.log(label2)
//label2[0].style.background="green"
//let labels=document.getElementsByTagName("label")
//labels[2].style.background="black"
//document.querySelector("#a").style.background="blue"
//document.querySelectorAll(".poo")[0].style.background="orange"
let p = document.getElementById("opo")
let div = document.createElement("div")
div.className = "alert"
div.innerHTML = "<b>alert</b>"
p.after(div)
setTimeout(() => div.remove(), 20000)
//let p1 = prompt("введите первое число")
//let p2 = prompt("введите второе число")
function summa(n1, n2) {
    let summ = +n1 + +n2
    return summ
}
//alert(summa(p1, p2))
let r = function () {
    alert("message")
}
//r()
/*function yon(question, yes, no) {
    if (confirm(question)) {
        yes()
    }
    else {
        no()
    }
}*/
//function yes() {
//    alert("you have chosen yes")
//}
//function no() {
//    alert("you have chosen no")
//}
//yon("yes or no?", yes, no)
//let g = (n) => {
//   n *= 2
//}
let time = document.getElementById("t_b")
//time.onclick=function(){
//    let date =new Date()
//   let hours = date.getDate()
//    alert(hours)
//}
let promise = new Promise((resolve, reject) => {
//    setTimeout(() => resolve("done"), 10000)
    setTimeout(() => reject(new Error("ERROR 404")), 13000)
})
//promise.then((res) => console.log(res), (err) => console.log(err))
//promise.catch(console.log)
promise.finally(() => console.log("proise is ready")).catch(console.log)
let promis = new Promise((resolve,reject) => {
    setTimeout(() => resolve(100),5000)
})
promis.then((res)=>{console.log(res)
    return res +10
}).then((res)=>{console.log(res)
    return res * 5
})

