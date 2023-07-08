document.getElementById('text').style.color = 'greenyellow';
document.getElementById('anali').style.color = 'greenyellow';

function slec(){
    cors = document.getElementById('colors').value
    text = document.getElementById('text')

    if(cors == 1){
        text.style.color = 'yellow';
    }else if( cors == 3){
        text.style.color = 'red';
    }else if( cors == 5){
        text.style.color = 'blue';
    }else if( cors == 7){
        text.style.color = 'green';
    }else if( cors == 9){
        text.style.color = 'pink';
    }else if( cors == 2){
        text.style.color = '#c8a2c8';
    }else if( cors == 4){
        text.style.color = 'brown';
    }    
}

y = 1

function jo(){
    fot = document.getElementById('gat')

    if(y == 0){
        fot.style.opacity = 1
        y = 1
    }else{
        fot.style.opacity = 0
        y = 0
    }
}
