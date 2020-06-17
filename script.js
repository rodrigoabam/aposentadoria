function cal () {  
    var n = String(document.querySelector('input#name').value)  
    var ag = Number(document.querySelector('input#age').value)
    var t = Number(document.querySelector('input#time').value)
    var g = document.getElementsByName('gender')
    var res = document.querySelector('p')

    if ( n != 0 && ag != 0 && t != 0 ) {
    var c = ag+t    
    res.innerHTML = ""
    if (g[0].checked){    
        c >= 95 ? res.innerHTML = `${n}, você pode se aposentar.` : res.innerHTML = `${n}, você não pode se aposentar.`
    } else if (g[1].checked) {
        c >= 85 ? res.innerHTML = `${n}, você pode se aposentar.` : res.innerHTML = `${n}, você não pode se aposentar.`
    }
    } else {
        alert('Todos os campos são obrigatórios.')
    }
} 