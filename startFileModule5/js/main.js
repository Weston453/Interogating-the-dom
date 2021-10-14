// JavaScript Document

// let foundYou = document.getElementById("overview")
// console.log(foundYou)
// console.log(foundYou.innerText)
// foundYou.innerText = "blah blah blah"

// let foundYou = document.getElementsByTagName('p')
// console.log(foundYou)
// console.log(foundYou[1].innerText)
// foundYou[1].innerText = "I changed you"

// let foundYou = document.getElementsByName("description")
// console.log(foundYou[1].innerHTML)
// foundYou[0].innerHTML = "I changed this"

// let foundYou = document.getElementsByClassName("smallCenter")
// console.log(foundYou[0].innerHTML)
// foundYou[0].innerHTML = "Hello"

// let foundYou = document.querySelectorAll("ul#lp_list li")
// console.log(foundYou[0].innerHTML)
// console.log('Length: ' + foundYou.length)
// foundYou[1].innerHTML = "hello"

// let foundYou = document.getElementById("sw_list")
// console.log(foundYou)
// let childArr = foundYou.getElementsByTagName('li')
// console.log(childArr)
// childArr[0].innerHTML = "ahhhhhhhhh"
// childArr[1].innerHTML = "ahhhhhhhhhhhhhhhh"
// childArr[2].innerHTML = "ahhhhhhhhhhhhhhhhhhhhhhh"



// let newOptions =["Orange", "Red", "Blue"]

// let foundYou = document.getElementById('myForm')
// console.log(foundYou)

// let selectArr = foundYou.getElementsByTagName("option")
// console.log(selectArr)

// for (i=0; i<selectArr.length; i++){
//     selectArr[i].innerHTML = newOptions[i]
// }

foundYou = document.getElementById('myForm')
console.log(foundYou)

let selectArr = foundYou.getElementsByTagName('input')
console.log(selectArr)

for (i=0;i<selectArr.length;i++){
    console.log(selectArr[i].value)
}