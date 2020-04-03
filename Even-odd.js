function EvenOdd(){
    var num = document.getElementById('num').value;
    if ( num % 2 == 0) {
        document.getElementById('Even').innerHTML = num + ' is a Even number';
    }else{
        document.getElementById('Odd').innerHTML = num + ' is a Odd number';
    }
} 