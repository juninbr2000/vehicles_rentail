const commentDiv = document.querySelector('.user-comment')
const vehiclesDiv = document.querySelector('.vehicles-show')

let commentIndex = 0
let carIndex = 0

let vehicles = []
let comments = []

async function getData (local) {
    try {
        const res = await fetch(`./${local}.json`)

        const data = await res.json()

        return data
        
    } catch(error) {
        console.error(error)
    }
} 

const init = async () => {
    comments = await getData("comments")
    vehicles = await getData("Vehicles")

    if (comments.length > 0) renderComment(comments[0])
    if (vehicles.length > 0) renderVehicle(vehicles[0])
}

function controll (sin, type) {
    
    switch (type) {
        case 'vehicle':
            switch(sin){
                case '+':
                    carIndex ++;
                    if(carIndex > 2){
                        carIndex = 0
                    };
                    renderVehicle(vehicles[carIndex])
                    break;
                case '-':
                    carIndex -- ;
                    if(carIndex < 0){
                        carIndex = 2
                    };
                    renderVehicle(vehicles[carIndex])
                    break
            };
        case 'comment':
            switch(sin){
                case '+':
                    commentIndex = commentIndex + 1;
                    if(commentIndex > 2){
                        commentIndex = 0
                    };
                    renderComment(comments[commentIndex])
                    break;
                case '-':
                    commentIndex -- ;
                    if(commentIndex < 0){
                        commentIndex = 2
                    };
                    renderComment(comments[commentIndex])
                break;
            };
        break;
    }

    console.log(commentIndex)
}

async function renderComment (user) {
    
    console.log(user)

    let stars = ''

    for(let i = 0; i < user.avaliacao; i++){
        stars += '<i class="fa-solid fa-star"></i>'
    }

    commentDiv.innerHTML = `
    <div class='card-comment'>
        <div class='card-user'>
            <p>-${user.nome} <br /> ${user.cidade}</p>
            <div class='stars'>
                ${stars}
            </div>
        </div>
        <p>${user.comentario}</p>
    </div>
    `
}

async function renderVehicle (car) {
    
    vehiclesDiv.innerHTML = `
        <div class="vehicles-show">
            <video class="vehicles-video" src="./assets/${car.video}" autoplay loop muted></video>
            <h1 class="vehicle-title">${car.name}</h1>
            <p class="white vehicle-text">${car.description}</p>
            <button class="primary vehicle-btn">Consulte Disponibilidade</button>
        </div>
    `
}

init()