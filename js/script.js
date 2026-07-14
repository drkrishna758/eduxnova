// Back To Top Button

const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.documentElement.scrollTop > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

}

topBtn.onclick = function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}
// =========================
// LOADER
// =========================

window.addEventListener("load", function(){

    setTimeout(function(){

        document.getElementById("loader").style.display="none";

    },1500);

});
// =========================
// DARK MODE
// =========================

const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        localStorage.setItem("theme","light");

        themeBtn.innerHTML='<i class="bi bi-sun-fill"></i>';

    }

    else{

        localStorage.setItem("theme","dark");

        themeBtn.innerHTML='<i class="bi bi-moon-fill"></i>';

    }

});

if(localStorage.getItem("theme")==="light"){

    document.body.classList.add("light-mode");

    themeBtn.innerHTML='<i class="bi bi-sun-fill"></i>';

}