var elTitle = document.querySelector('.title')
var num = prompt('num string')

 if (num == 18){
    elTitle.textContent = "do'st"
 }
 else if(num<18) {
    elTitle.textContent = 'uka'
 }
 else if(num>18){
    elTitle.textContent = 'aka'
 }