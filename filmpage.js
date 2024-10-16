let a = document.querySelector(".movie_name") 
let image = document.querySelector(".movie_img")
let adress = window.location.pathname.slice(1)
console.log(adress)
fetch("/db.json").then((res) => {
    return res.json()
}).then((res) => {
    res.forEach(film => {
        if(adress == film.href)
        {
            a.innerText = film.name
            image.setAttribute("src", film.image)  
        }
    });
})  
