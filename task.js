const xhr = new XMLHttpRequest();
const url =  "https://netology-slow-rest.herokuapp.com";
const items = document.querySelector('#items');



xhr.open('GET', url);

xhr.onload = () => {
    let dataValute = JSON.parse(xhr.response);
    const itemsValute = dataValute['response']['Valute'];
    const arrValute = Object.entries(itemsValute);
    for (const el of arrValute) {
        items.innerHTML += `
        <div class="item"> ${el[1]['Name']}
            <div class="item__code"> ${el[1]['CharCode']}</div>
            <div class="item__value"> ${el[1]['Value']}</div>
            <div class="item__currency"> руб.</div>
        </div>
        `
    }
}

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === 4) {
        const loader = document.querySelector('.loader_active');
        loader.classList.remove('loader_active');
        
    }
})


xhr.send();
