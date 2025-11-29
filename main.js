//  ================= Header ======================================

const closed = document.querySelector(".close");
let menu = document.querySelector(".menu");
let ul = document.querySelector("ul")


menu.onclick = function () {
    ul.style.cssText = "width: 70%; padding: 50px 12px;"
}

closed.onclick = function () {
    ul.style.cssText = "width: 0; padding: 0px; "
}


let cart = document.querySelector(".cart");
let file_cart = document.querySelector(".file-cart");

file_cart.classList.add("hidden")

cart.onclick = function () {
    if (file_cart.classList.contains("hidden")) {
        file_cart.classList.remove("hidden")
    } else {
        file_cart.classList.add("hidden")
    }
}


// ================= page-- img --- full =================

let pageImg = document.querySelector(".list-img-full");
let right = document.querySelector(".icon-right ");
let left = document.querySelector(".icon-left ");
let inside_img = document.querySelector(".inside-img");
let full_page = document.querySelector(".page-img-full");
let close_back_page = document.querySelector(".close-full");

left.onclick = function () {
    pageImg.prepend(pageImg.querySelector("img:last-child"));
}

right.onclick = function () {
    pageImg.append(pageImg.querySelector("img:first-child"));
}

close_back_page.onclick = function () {
    full_page.style.cssText = "opacity: 0;"
}

inside_img.onclick = function () {
    full_page.style.cssText = "display: flex;"
}


// ================== Section ===============================


let choose = document.querySelectorAll(".choose-img span");
let imgOrgin = document.querySelector(".inside-img img");
let add_card = document.querySelector(".add-card");
let file_avatar = document.querySelector(".file-add-product");
let text_add_product = document.querySelector(".text-add-product");
let counting_cart = document.querySelector(".counting-cart");
let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let number = document.querySelector(".num-count");



choose.forEach((ele) => {
    ele.addEventListener("click", function (e) {
        window.localStorage.setItem("img-product", e.currentTarget.dataset.product);
        imgOrgin.src = `images/${window.localStorage.getItem("img-product")}`;
    })
})

plus.onclick = function () {
    number.textContent = ++num;
}

minus.onclick = function () {
    if (number.textContent === 0) return;
    number.textContent = --num;
}

let price = 125;
// let num_sec = 0;
let num = 0;

add_card.onclick = function () {

    // this code is for stopping multiple
    document.querySelectorAll(".parent-file").forEach((ele) => ele.remove())
    document.querySelectorAll(".checkout").forEach((ele) => ele.remove())

    // ================================

    let grandPa = document.createElement("div");
    let parent = document.createElement("div");
    let img = document.createElement("img");
    let child_title = document.createElement("div");
    let title = document.createElement("div");
    let total = document.createElement("div");
    let deleted = document.createElement("i");
    let span = document.createElement("span");
    let num_count = document.createElement("span");
    let checkout = document.createElement("div");
    let data = number.textContent;

    checkout.className = "checkout";
    checkout.textContent = "Checkout"
    text_add_product.style.cssText = "display: none;";
    num_count.style.cssText = "padding-right: 10px";
    num_count.className = "num-count";
    parent.className = "parent-file";
    child_title.className = "child-title";
    title.className = "title-file";
    total.className = "total";
    span.className = "total-span";
    deleted.className = "fa-solid fa-trash-can";

    title.textContent = "Fall Limited Edition Sneakers";
    img.src = "images/image-product-1-thumbnail.jpg";
    num_count.textContent = `${number.textContent} `
    total.textContent = `$125.00 X`;

    data *= price
    span.textContent = `$${data}.00`;
    counting_cart.textContent = number.textContent;
    counting_cart.style.cssText = "display: grid; place-items: center;"

    if (data === 0) {
        counting_cart.style.cssText = "display:none;";
        return;
    }

    deleted.onclick = function () {
        parent.parentElement.remove()
        text_add_product.style.cssText = "display: grid;";
        counting_cart.style.cssText = "display:none;"
    }

    total.append(num_count, span);
    child_title.append(title, total);

    parent.append(img, child_title, deleted);
    grandPa.append(parent, checkout)
    file_avatar.appendChild(grandPa)
}




