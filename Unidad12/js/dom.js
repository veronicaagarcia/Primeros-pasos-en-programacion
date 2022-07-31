function hamburguesa (){
    var menus = document.getElementById('menu')

    if(menus.style.display == 'block'){
        menus.style.display = 'none'
    } else {
        menus.style.display = 'block'
    }
    
}


function pasar(caja){
    var fotoGaleria = document.getElementById (caja)
    
    if (fotoGaleria.style.display == 'none')
     {fotoGaleria.style.display = 'block'
        
    }   
}

function cambiar (caja){
    var vuelvo =  document.getElementById (caja)
    vuelvo.style.fontFamily = 'fantasy'
    vuelvo.style.fontSize = '20px'
    vuelvo.style.color = '#000000'
    vuelvo.style.backgroundImage= 'url(images/rockywall.png)'
    vuelvo.style.textDecorationStyle= 'wavy;'
    if (vuelvo.style.display == 'none'){
        vuelvo.style.display = 'block'
    }
}
function vuelvo (caja){
    var vuelto =  document.getElementById (caja)
   
vuelto.style.fontFamily = 'arial'
vuelto.style.fontSize = '18px'
vuelto.style.color = '#664759'
vuelto.style.backgroundColor= "rgb(176, 142, 240);"
vuelto.style.borderColor= '#9d66f8'


}



