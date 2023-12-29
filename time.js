const output = document.querySelector('#output');


setInterval(function () {

    let date = new Date()
    output.innerHTML = date.toLocaleTimeString();

} , 1000)