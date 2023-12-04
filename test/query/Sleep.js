// The express purpose of this function is to avoid the start.gg rate limit for sending requests


const sleep = (ms) => {
    const date = Date.now()
    let currentDate = null
    do {
        currentDate = Date.now()
    } while (currentDate - date < ms)
}




