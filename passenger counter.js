
let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
function increment() {

    count = count + 1;
    countEl.innerText = count;
    console.log(countEl.innerText);
}

function save() {

    saveEl.textContent += count + " - " ;
    console.log(count);
    count = 0;
    countEl.innerText = 0
}



