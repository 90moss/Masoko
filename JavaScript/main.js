var dell = {
    laptop: "dell.jpeg",
    name: "dell",
    price: 32999,
    originalprice: 35000,
    ItemId: "DLL" 
}
document.getElementById("lap1").src = dell.laptop
document.getElementById("name1").innerText = dell.name
document.getElementById("price1").innerText = dell.price
document.getElementById("original1").innerText = dell.originalprice

var lenovo = {
    laptop: "lenovo.jpeg",
    name: "lenovo",
    price: 42999,
    originalprice: 45000,
    ItemId: "LNV"
}
document.getElementById("lap2").src= lenovo.laptop
document.getElementById("name2").innerText = lenovo.name
document.getElementById("price2").innerText = lenovo.price
document.getElementById("original2").innerText = lenovo.originalprice

var hp = {
    laptop: "hp.jpeg",
    name: "hp",
    price: 52999,
    originalprice: 55000,
    ItemId: "HP"
}
document.getElementById("lap3").src= hp.laptop
document.getElementById("name3").innerText = hp.name
document.getElementById("price3").innerText = hp.price
document.getElementById("original3").innerText = hp.originalprice

var asus = {
    laptop: "asus.png",
    name: "asus",
    price: 62999,
    originalprice: 65000,
    ItemId: "ASS"
}
document.getElementById("lap4").src= asus.laptop
document.getElementById("name4").innerText = asus.name
document.getElementById("price4").innerText = asus.price
document.getElementById("original4").innerText = asus.originalprice

var samsung = {
    laptop: "samsung.jpeg",
    name: "samsung",
    price: 72999,
    originalprice: 75000,
    ItemId: "SAM"
}
document.getElementById("lap5").src= samsung.laptop
document.getElementById("name5").innerText = samsung.name
document.getElementById("price5").innerText = samsung.price
document.getElementById("original5").innerText = samsung.originalprice

var huawei = {
    laptop: "huawei.jpeg",
    name: "huawei",
    price: 82999,
    originalprice: 85000,
    ItemId: "HUA"
}
document.getElementById("lap6").src= huawei.laptop
document.getElementById("name6").innerText = huawei.name
document.getElementById("price6").innerText = huawei.price
document.getElementById("original6").innerText = huawei.originalprice

document.getElementById("dell").onclick = function(){
    window.location.href= "select.html" + "?" + dell.ItemId
}

document.getElementById("lenovo").onclick = function(){
    window.location.href= "select.html" + "?" + lenovo.ItemId
}

document.getElementById("hp").onclick = function(){
    window.location.href= "select.html" + "?" + hp.ItemId
}

document.getElementById("asus").onclick = function(){
    window.location.href= "select.html" + "?" + asus.ItemId
}

document.getElementById("samsung").onclick = function(){
    window.location.href= "select.html" + "?" + samsung.ItemId
}

document.getElementById("huawei").onclick = function(){
    window.location.href= "select.html" + "?" + huawei.ItemId
}