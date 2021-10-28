window.onscroll = function(){
    
if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    
    document.getElementById("barra").style.display = "block";
    document.getElementById("cuerpo").className ="col-11"
    }

    else{
        document.getElementById("barra").style.display = "none";
        document.getElementById("cuerpo").className ="col-12"
    }
}

