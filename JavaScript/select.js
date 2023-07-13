var dell = {
    laptop: "dell.jpeg",
    name: "dell",
    price: 32900,
    originalprice: 3500,
    ItemId: "DLL"
}

var lenovo = {
    laptop: "lenovo.jpeg",
    name: "lenovo",
    price: 42999,
    originalprice: 45000,
    ItemId: "LNV"
}

var hp = {
    laptop: "hp.jpeg",
    name: "hp",
    price: 52999,
    originalprice: 55000,
    ItemId: "HP"
}

var asus = {
    laptop: "asus.png",
    name: "asus",
    price: 62999,
    originalprice: 65000,
    ItemId: "ASS"
}

var samsung = {
    laptop: "samsung.jpeg",
    name: "samsung",
    price: 72999,
    originalprice: 75000,
    ItemId: "SAM"
}

var huawei = {
    laptop: "huawei.jpeg",
    name: "huawei",
    price: 82999,
    originalprice: 85000,
    ItemId: "HUA"
}

var selectId = decodeURIComponent(window.location.search)

var selectedItem = selectId.substring(1)

if (selectedItem==dell.ItemId){
    document.getElementById("lap1").src = dell.laptop
    document.getElementById("name1").innerText = dell.name
    document.getElementById("price1").innerText = dell.price
    document.getElementById("original1").innerText = dell.originalPrice
    
    var cost = dell.price
    qty (cost)
}

else if (selectedItem==lenovo.ItemId){
    document.getElementById("lap1").src = lenovo.laptop
    document.getElementById("name1").innerText = lenovo.name
    document.getElementById("price1").innerText = lenovo.price
    document.getElementById("original1").innerText = lenovo.originalprice

    var cost = lenovo.price 
    qty (cost)
}

else if (selectedItem==hp.ItemId) {
    document.getElementById("lap1").src = hp.laptop
    document.getElementById("name1").innerText = hp.name
    document.getElementById("price1").innerText = hp.price
    document.getElementById("original1").innerText = hp.originalprice

    var cost = hp.price
    qty (cost)
}

else if (selectedItem==asus.ItemId) {
    document.getElementById("lap1").src = asus.laptop
    document.getElementById("name1").innerText = asus.name
    document.getElementById("price1").innerText = asus.price
    document.getElementById("original1").innerText = asus.originalprice

    var cost = asus.price
    qty (cost)
}

else if (selectedItem==samsung.ItemId){
    document.getElementById("lap1").src = samsung.laptop
    document.getElementById("name1").innerText = samsung.name
    document.getElementById("price1").innerText = samsung.price
    document.getElementById("original1").innerText = samsung.originalprice

    var cost = samsung.price
    qty (cost)
}

else if (selectedItem==huawei.ItemId){
    document.getElementById("lap1").src = huawei.laptop
    document.getElementById("name1").innerText = huawei.name
    document.getElementById("price1").innerText = huawei.price
    document.getElementById("original1").innerText = huawei.originalprice

    var cost = huawei.price
    qty (cost)
}

function qty(cost) {
    document.getElementById("quantity").onkeyup = function(){
        let quantity = document.getElementById("quantity").value
        let amount = cost

        if (quantity>1){
         let   total = quantity * amount
            document.getElementById("total").innerText = total
            UserLocation(total)
        }
        else if (quantity==1){
         let   total = amount
            document.getElementById("total").innerText = total
            UserLocation(total)
        }
    }
}

function UserLocation(total) {
    document.getElementById("location").onchange = function(){
        let delivery = document.getElementById("location").value
        let Ruaka = 500
        let Kiambu = 900
        let Thindigua = 700

        if (delivery=="Ruaka"){
            document.getElementById("total").innerText = Ruaka + total
        }

        else if (delivery=="Kiambu"){
            document.getElementById("total").innerText = Kiambu + total
        }

        else if (delivery=="Thindigua"){
            document.getElementById("total").innerText = Thindigua + total
        }

        else if (delivery == " ") {
            document.getElementById("total").innerText = total
        }
    }
}