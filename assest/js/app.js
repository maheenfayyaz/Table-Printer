function generatetable() {
    let number = parseInt(document.getElementById('number').value);
    let start = parseInt(document.getElementById('start').value);
    let end = parseInt(document.getElementById('end').value);
    let result = '';
    
    for (let i = start; i <= end; i++) {
        result += `${number} * ${i} = ${(number * i)}  <br>`;
    }

    document.getElementById('display').innerHTML= 'multiplication table of ' + number + '<br>' + result;
}



