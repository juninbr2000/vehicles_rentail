const menuBtn = document.querySelector('.nav_menu_button')
const menuList = document.querySelector('.menu_list')
const divVehicles = document.getElementById('veiculos')



fetch('./Vehicles.json').then(res => res.json()).then(data => {
    const Vehicles = data

    console.log(Vehicles)

    divVehicles.innerHTML += Vehicles.map(car => `<div key=${car.value} class='card_details'>
            <img src=${car.imagem} alt=${car.titulo} />
            <div class="cars_details">
                <h3>${car.titulo}</h3>
                <div class="cars_info">
                    <p>categoria: ${car.tipo}</p>
                    <p>carga: ${car.carga}</p>
                </div>
                <p class="price">Por <span>${car.valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</span> /dia</p>
            </div>
        </div>`
    ).join('')
})

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('ocult')
})