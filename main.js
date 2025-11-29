//  ================= Header ======================================

const closed = document.querySelector(".close");
const menu = document.querySelector(".menu");
const ul = document.querySelector("ul")


menu.onclick = function () {
    ul.style.cssText = "width: 70%; padding: 50px 12px;"
}

closed.onclick = function () {
    ul.style.cssText = "width: 0; padding: 0px; "
}


const cart = document.querySelector(".cart");
const file_cart = document.querySelector(".file-cart");

file_cart.classList.add("hidden")

cart.onclick = function () {
    if (file_cart.classList.contains("hidden")) {
        file_cart.classList.remove("hidden")
    } else {
        file_cart.classList.add("hidden")
    }
}


// ================= page-- img --- full =================

const pageImg = document.querySelector(".list-img-full");
const right = document.querySelector(".icon-right ");
const left = document.querySelector(".icon-left ");
const inside_img = document.querySelector(".inside-img");
const full_page = document.querySelector(".page-img-full");
const close_back_page = document.querySelector(".close-full");

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


const choose = document.querySelectorAll(".choose-img span");
const imgOrgin = document.querySelector(".inside-img img");
const add_card = document.querySelector(".add-card");
const file_avatar = document.querySelector(".file-add-product");
const text_add_product = document.querySelector(".text-add-product");
const counting_cart = document.querySelector(".counting-cart");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const number = document.querySelector(".num-count");



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

const price = 125;
const num = 0;

add_card.onclick = function () {

    // this code is for stopping multiple
    document.querySelectorAll(".parent-file").forEach((ele) => ele.remove())
    document.querySelectorAll(".checkout").forEach((ele) => ele.remove())

    // ================================

    const grandPa = document.createElement("div");
    const parent = document.createElement("div");
    const img = document.createElement("img");
    const child_title = document.createElement("div");
    const title = document.createElement("div");
    const total = document.createElement("div");
    const deleted = document.createElement("i");
    const span = document.createElement("span");
    const num_count = document.createElement("span");
    const checkout = document.createElement("div");
    const data = number.textContent;

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




