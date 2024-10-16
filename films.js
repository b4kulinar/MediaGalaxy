let pf = document.querySelector(".pf")
function c_film(image, name, href) {
    let div = document.createElement("div")
    const a = document.createElement("a")
    div.classList.add("film")
    let img = document.createElement("img")
    img.setAttribute("src", image)
    let h3 = document.createElement("h3")
    h3.innerText = name
    a.setAttribute("href", href)
    pf.append(a)
    a.append(div)
    div.append(img)
    div.append(h3)
}
fetch("/db.json").then((res) => {
    if (!res.ok) {
        throw new Error("something went wrong "+ res.statusText)
    }
    return res.json()
}).then((res) => {
    console.log(res)
    res.forEach(e => {
        c_film(e.image, e.name, e.href)
    });
}).catch((err)=>{
    console.error("Error whyle catching ",  err.statusText)
})