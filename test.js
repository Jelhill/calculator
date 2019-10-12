
//display values on the screen

function screen(val) {
    document.getElementById('box').value=val;
}

function shownum(val) {
    document.getElementById('box').value+=val;
}

//calculate whatever in on the screen.
function calculate(){
    try{
        screen(eval(document.getElementById('box').value));
        
    }
    catch(e){
        screen('Error');
    }
}

function clearScreen() {
    document.getElementById('box').value = " ";
    return '0';
}

function delBack(){
    var valueNeeded = document.getElementById('box').value;
    var finalValueNeeded = valueNeeded.substr(0, valueNeeded.length-1);
    document.getElementById('box').value=finalValueNeeded;
}

let 

