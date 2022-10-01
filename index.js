function btnClick(val){
    document.getElementById('input').value += val;
}

function clr(){
    document.getElementById('input').value = "";
}

function equalValue(){
    if(document.getElementById('input').value !=0 ){
        let x = document.getElementById('input').value;
        let y = eval(x);
        document.getElementById('input').value = y;
    }else{
        alert('Please enter some value')
    }
    
}