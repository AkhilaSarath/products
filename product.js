function login() {
    uname = uname.value
    password = p1.value
    if (uname in localStorage) {
        data = JSON.parse(localStorage.getItem(uname))
        if (data["password"] == password) {
            window.location = "home.html"
            alert("login successfull")
        }
        else {
            alert("incorrect password")
        }
    }
    else {
        alert("incorrect user name")
    }
}


function register() {
    username = uname.value
    password = p1.value
    if (username == "" || password == "") {
        alert(" username and password can't be empty")
    }
    else {
        pdetails = { username, password }
        localStorage.setItem(username, JSON.stringify(pdetails))
        alert("succesfully registered")
        window.location = "index.html"
    }

}

function addProduct() {
    pname = pname.value
    pid = pid.value
    price = price.value
    stock = stock.value
    pdetails = { pname, pid, price, stock }
    if (pid in localStorage) {
        alert("product already added.add another product")
        window.location="home.html"

    }
    else {
        localStorage.setItem(pid, JSON.stringify(pdetails))
        alert("product added")
        window.location="home.html"
    }

}
function viewProduct() {
    window.location = "viewProduct.html"
}
function search() {
    pid = pid.value
     if (pid == "") {
        alert(" enter product id")
    }
    else if (pid in localStorage) {
        data = JSON.parse(localStorage.getItem(pid))
        view.innerHTML = '<h3>Product name:' + data.pname + '</h3><h3>Product id:' + data.pid + '</h3><h3>Price:' + data.price + '</h3><h3>Stock:' + data.stock + '</h3'
    }
    else {
        alert("Product not found")
    }

}
function logout() {
    window.location = "index.html"
}