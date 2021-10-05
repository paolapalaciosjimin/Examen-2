const A_btn = document.getElementById("A")
const S_btn = document.getElementById("S")
const D_btn = document.getElementById("D")
const F_btn = document.getElementById("F")
const G_btn = document.getElementById("G")
const H_btn = document.getElementById("H")
const J_btn = document.getElementById("J")
const K_btn = document.getElementById("K")
const L_btn = document.getElementById("L")
const audio1 = document.getElementById("audio1")
const audio2 = document.getElementById("audio2")
const audio3 = document.getElementById("audio3")
const audio4 = document.getElementById("audio4")
const audio5 = document.getElementById("audio5")
const audio6 = document.getElementById("audio6")
const audio7 = document.getElementById("audio7")
const audio8 = document.getElementById("audio8")
const audio9 = document.getElementById("audio9")
document.addEventListener("keypress", (event) =>{
    if(event.key == "A"){
        audio1.A();
    }
    else if(event.key == "S"){
        audio2.S();
    }
    else if(event.key == "D"){
        audio3.D();
    }
    else if(event.key == "F"){
        audio4.F();
    }
    else if(event.key == "G"){
        audio5.G();
    }
    else if(event.key == "H"){
        audio6.H();
    }
    else if(event.key == "J"){
        audio7.J();
    }
    else if(event.key == "K"){
        audio8.K();
    }
    else if(event.key == "L"){
        audio9.L();
    }

})


