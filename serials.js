
function serials(image,name){
    const a = document.createElement("a")
    const div = document.createElement("div")
    const img = document.createElement("img")
    const h3 = document.createElement("h3")
    const pf = document.querySelector(".pf")
    pf.prepend(a)
    div.setAttribute("class","film")
    a.prepend(div)
    div.prepend(img)
    img.after(h3)
    img.setAttribute("src",image)
    h3.innerText=name
}
fetch("/serials.json").then(res=>{console.log(res)
    response = res.json()
    console.log(response)
    return response
}).then((res)=>{
    res.forEach(serial => {
    serials(serial["image"],serial["name"])
})
})
