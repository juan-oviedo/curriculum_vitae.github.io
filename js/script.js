let suma = 1;
let control = 0;
const lista = document.getElementsByTagName("aside");
const aside = lista[0];
const div_article = document.getElementById("div_article");
const aside_div = document.getElementById("aside_div");

function onoffaside (){
    if (suma % 2 == 1){
        aside.style.display = 'none';
        div_article.style.display = 'block';
        document.body.style.gridTemplateColumns = 'auto';
    }
    else {
        aside.style.display = 'block';
        div_article.style.display = 'block';
        document.body.style.gridTemplateColumns = 'auto 300px';
    }
}


function fullwidthaside (){
    if (suma % 2 == 1){
        aside.style.display = 'none';
        div_article.style.display = 'block';
        aside_div.style.gridTemplateColumns = '50% 50%';
        document.body.style.gridTemplateColumns = 'auto';
        
    }
    else{
        aside.style.display = 'block';
        div_article.style.display = 'none';
        aside_div.style.gridTemplateColumns = 'auto';
        document.body.style.gridTemplateColumns = 'auto';
    }
}

function size (){
    
    if (document.body.clientWidth <= 700){
        fullwidthaside ();
    }
    else{
        if (control == 0){
            suma = suma + 1;
        }
        onoffaside();
    }
    control = control + 1;   
}
/*
function condicional() {
    if (suma % 2 == 1 &&  document.body.clientWidth > 700){
        div_article.style.display = 'block';
    }
    else if (suma % 2 == 1 &&  document.body.clientWidth <= 700){
        div_article.style.display = 'none';
    }
}
*/
window.addEventListener('resize', size);


document.getElementById("header_menu").onclick = function () {
    suma = suma + 1;
    size();
}