//LEVEL 1
let value = "9.8"
let vvalue = parseInt(value)
console.log(vvalue==value)
let num = 2
let numm = '2'
console.log(num==numm)
console.log(2<3)

let word = 'python'
let word2 = 'jargon'
console.log(word.length!= word2.length)

let now = new Date()
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getTime())

//LEVEL 2
let input = prompt("Enter the base of the triangle", "Number goes here")
let input2 = prompt("Enter the Height of the triangle", "Number goes here")
console.log(0.5* input * input2)

let x1 = 2
let x2 = 2
let y1 = 6
let y2 = 10
let m = ((y2 - y1)/(x2 - x1))
console.log(m)

//let input3 = prompt("Enter the number of years", "Number goes here")
//let noww = 100 - input3
//console.log(new Date(noww).getSeconds())

//level 3
let hour = now.getHours()
let min = now.getMinutes()
let month = now.getMonth() + 1
let hourr2 = ['00', '01', '02', '03', '04', '05', '06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23']
console.log(now.getFullYear() + "-"+ month + "-"+ now.getDate() + " " + hourr2[hour] + ":" + hourr2[min])
