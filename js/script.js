let button = document.querySelector("#btn")


button.addEventListener('click', randombg)

function randombg() {
    document.body.style.backgroundColor = '#' + Math.random().toString(16).slice(2, 8);


}

// rgb(255)