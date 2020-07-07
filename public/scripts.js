const services = document.querySelectorAll('.service')
const card = document.querySelector('.card')

for(let service of services){
    service.addEventListener("click", () => {
        const serviceId = service.getAttribute("id")
        window.location.href = `http://127.0.0.1:5500/views/${serviceId}.html`
    })
}

card.querySelector('img').addEventListener("click", () => {
    window.location.href = `http://127.0.0.1:5500/views/home.html`
})



/* Retirement */

function cal () {  
    var section = document.querySelector('section .card')
    var n = String(document.querySelector('input#name').value)  
    var ag = Number(document.querySelector('input#age').value)
    var t = Number(document.querySelector('input#time').value)
    var g = document.getElementsByName('gender')
    var res = document.querySelector('p')

    
    if ( n != 0 && ag != 0 && t != 0 ) {
    var c = ag+t    
    res.innerHTML = ""
        if (g[0].checked){    
            if(c >= 95){
                res.innerHTML = `${n}, you can retirement.`
                section.style.boxShadow = "0.5em 0.5em 1em #3F826D"
                section.style.border = "solid 1px #3F826D"
            } else {
                res.innerHTML = `${n}, you can't retirement.`
                section.style.boxShadow = "0.5em 0.5em 1em #C03221"
                section.style.border = "solid 1px #C03221"
            } 
        } else if (g[1].checked) {
            if(c >= 85){
                res.innerHTML = `${n}, you can retirement.`
                section.style.boxShadow = "0.5em 0.5em 1em #3F826D"
                section.style.border = "solid 1px #3F826D"
            } else {
                res.innerHTML = `${n}, you can't retirement.`
                section.style.boxShadow = "0.5em 0.5em 1em #C03221"
                section.style.border = "solid 1px #C03221"
            } 
        }
        } else {
            alert('All fields are mandatory. Check the fields and try again.')
        }
} 

/* BMI */

function calBmi () {  

    var n = String(document.querySelector('input#name').value)  
    var w = Number(document.querySelector('input#weight').value)
    var h = Number(document.querySelector('input#height').value)
    var res = document.querySelector('p')

    if (n != 0 && w != 0 && h!= 0){   
        res.innerHTML = "" 
        var imc = w/(h*h)
        imc >= 25 ? res.innerHTML = `${n}, you're overweight!` : res.innerHTML = `${n}, you aren't overweight.`
    } else {
        alert('All fields are mandatory. Check the fields and try again.')
    }
        
} 