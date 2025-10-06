const comments = document.querySelector('.user-comment')


async function getData (local) {
    try {
        const res = await fetch(`./${local}.json`)

        const data = await res.json()

        return data
        
    } catch(error) {
        console.error(error)
    }
}

async function showComments () {
    const user = await getData(comments)

    console.log(user)
}

showComments()