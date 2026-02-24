/*const left_click=document.querySelector(".left-arrow")
const right_click=document.querySelector(".right-arrow")

const display_box=document.querySelector(".menu_box")

const content_items=document.querySelectorAll(".menu_content")


const box_items=Array.from(content_items)

console.log(box_items.length)

  if(window.innerWidth<=1440){
       let items_per_page=8
     let limit=items_per_page
     for(let item=0;item<box_items.length;item=item+items_per_page){
          if (box_items.length<=items_per_page){
          const page=box_items.slice(item,limit)
          display_box.append(...page)
        }
             else{
                    const next_container=document.createElement("div")
                    const next_page=box_items.slice(item,limit)
                    next_container.append(...next_page)
                    display_box.append(next_container)
                    limit=limit+items_per_page
                    
        }
    }
    }


*/
const close_btn = document.querySelector(".closebtn");

const cart_b = document.querySelector(".cart_box");

const add_button = document.querySelectorAll("#addbtn");

const cartSpanBox = document.querySelector(".icon_cart");

let cartSpan = cartSpanBox.children[1].innerText;

let cartSpanvalue = parseInt(cartSpan);

console.log(cartSpan);

close_btn.addEventListener("click", function () {
  cart_b.style.transform = "translateX(336px)";
});

const toggle_btn = document.querySelector("#togglebtn");

toggle_btn.addEventListener("click", function () {
  {
    cart_b.style.transform = "translateX(-0px)";
  }
});

/*const ListCartHtml = document.querySelector(".listCart");*/

const ListCartHtml = document.createElement("div");
ListCartHtml.classList.add("listCart");
cart_b.append(ListCartHtml);

const leftArrowEntity = "&lt;";
const rightArrowEntity = "&gt;";

let listofProd = [];

const totValue = document.querySelector(".amt");

add_button.forEach((item) => {
  item.addEventListener("click", function () {
    cartSpanvalue = cartSpanvalue + 1;
    cartSpanBox.children[1].innerText = cartSpanvalue;

    let productContainer = event.target.closest(".menu_content");
    let findId = productContainer.dataset.id;

    const element = listofProd.find((elem) => elem.id == findId);

    if (!element) {
      let newCartitem = document.createElement("div");
      newCartitem.classList.add("item");

      let imageElement = productContainer.querySelector(".card img");
      let imgSrc = imageElement.getAttribute("src");
      console.log("the count " + productContainer.dataset.id);
      let productData = {
        id: productContainer.dataset.id,
        image: imgSrc,
        name: productContainer.querySelector(".card-body").children[0]
          .innerText,
        price: productContainer.dataset.price,
        /*amount: ListCartHtml.querySelector(".quantity").children[1].innerText,*/
      };

      listofProd.push(productData);

      newCartitem.innerHTML = `
      <div class="cart-image"><img src="${productData.image}"></div>
      <div class="cart-name">${productData.name}</div>
      <div class="cart-price">${productData.price}</div>
      <div class="cart-quantity" style="display:grid;grid-template-columns:25px 30px 30px;padding:12px;">
        <span class="dec" style="width:25px;height:25px;border-radius:50%;background-color:white;cursor:pointer;display:inline-block;"><</span>
        <span class="spanvalue" style="color:white;">1</span>
        <span class="inc" style="width:25px;height:25px;border-radius:50%;background-color:white;cursor:pointer;display:inline-block;">${rightArrowEntity}</span>
      </div>
     `;

    //  const productDiv = document.getElementById("m_box")



    //  const products = [
    //   {
    //     id: 1,
    //     name: "Milkshake",
    //     price:20,
    //   },

    //   {
    //     id: 2,
    //     name: "Milkshake",
    //     price:20,
    //   },

    //   {
    //     id: 3,
    //     name: "Milkshake",
    //     price:20,
    //   },
    //   {
    //     id: 4,
    //     name: "Milkshake",
    //     price:20,
    //   },
    //   {
    //     id: 5,
    //     name: "Milkshake",
    //     price:20,
    //   }
  
    //  ]

    //   const productList = products.map((product, id) => (

    //   `
    //    <div key = ${product.id} class="card">
    //               <img src="uploads/milk.jpg" />
    //               <div class="card-body">
    //                 <p>${product.image}</p>
    //                 <p>${product.price}</p>
    //                 <button class="bg-danger rounded" id="addbtn">Add to cart</button>
    //               </div>
    //               </div>
    //   `

    //  )).join("")


    //  productDiv.innerHTML = productList; 

      newCartitem.style.gap = "10px";
      newCartitem.style.padding = "2px";
      newCartitem.style.margin = "10px";
      newCartitem.style.alignItems = "center";
      newCartitem.style.display = "grid";

      newCartitem.style.gridTemplateColumns = "50px 100px 30px 1fr";

      newCartitem.dataset.id = productContainer.dataset.id;

      /*const incbtn = document.querySelectorAll(".inc");
      const decbtn = document.querySelectorAll(".dec");
      /*const counterValue = document.querySelectorAll(".spanvalue");*/

      /*incbtn.forEach((btn, i) => {
        btn.addEventListener("click", function () {
          const parent=btn.closest(".cart-quantity");
          const span=parent.querySelector(".spanvalue");
          let currentvalue = parseInt(span.textContent);
          console.log(currentvalue);
          span.textContent = currentvalue + 1;
        });
      });
  
      decbtn.forEach((btn, i) => {
        btn.addEventListener("click", function () {
          const parent=btn.closest(".cart-quantity");
          const span=parent.querySelector(".spanvalue");
          let currentvalue = parseInt(span.textContent);
          if (currentvalue > 0) {
            span.textContent = currentvalue - 1;
          }
        });
      });*/

      /*const incbtn = document.getElementsByClassName("inc");
      const decbtn = document.getElementsByClassName("dec");
      const counterValue = document.getElementsByClassName("spanvalue");
  
      for (let i = 0; i < incbtn.length; i++) {
        incbtn[i].addEventListener("click", function () {
          let currentvalue = parseInt(counterValue[i].innerText);
          console.log(currentvalue);
          counterValue[i].innerText = currentvalue + 1;
        });
  
        decbtn[i].addEventListener("click", function () {
          let currentvalue = parseInt(counterValue[i].innerText);
          counterValue[i].innerText = currentvalue - 1;
        });
      }*/

      /*incbtn.forEach(item=>{
        item.addEventListener("click",function(){
          let currentvalue=parseInt(counterValue.innerText);
          currentvalue++;
          counterValue.innerText=currentvalue;
        })
       })*/

      /*console.log(newCartitem.innerHTML);*/

      /*newCartitem.append(listofProd)*/

      ListCartHtml.append(newCartitem);

      let totValue1 = totValue.textContent;

      let totPrice = totValue1.replace("$", "");

      let totPrice1 = parseFloat(totPrice);

      let priceEle = productData.price;

      let priceEle1 = priceEle.replace("$", "");

      let priceEle2 = parseFloat(priceEle1);

      if (totPrice1 == 0.0) {
        totValue.textContent = "$" + priceEle2.toFixed(2);
      } else {
        totValue.textContent = "$" + (totPrice1 + priceEle2).toFixed(2);
      }
    } else {
      let reqBox = document.querySelector(".listCart");

      console.log(reqBox);

      let reqItem = reqBox.querySelectorAll(".item");

      reqItem.forEach((item) => {
        if (item.dataset.id == element.id) {
          let pricereq = item.querySelector(".cart-price");

          let pricereq1 = pricereq.textContent;

          let pricereq2 = pricereq1.replace("$", "");

          let pricereq3 = parseFloat(pricereq2);

          let priceIte = element.price;

          let priceIte2 = priceIte.replace("$", "");

          let priceIte3 = parseFloat(priceIte2);

          pricereq.textContent = "$" + (priceIte3 + pricereq3).toFixed(2);

          let disValue = item.querySelector(".spanvalue");

          let disValue1 = disValue.textContent;

          let disValue2 = parseInt(disValue1);

          disValue.textContent = disValue2 + 1;
        }
      });
      let totValue1 = totValue.textContent;

      let totPrice = totValue1.replace("$", "");

      let totPrice1 = parseFloat(totPrice);

      let priceEle = element.price;

      let priceEle1 = priceEle.replace("$", "");

      let priceEle2 = parseFloat(priceEle1);

      if (totPrice1 == 0.0) {
        totValue.textContent = "$" + priceEle2.toFixed(2);
      } else {
        totValue.textContent = "$" + (totPrice1 + priceEle2).toFixed(2);
      }
    }
  });
});

console.log(listofProd);

ListCartHtml.addEventListener("click", function (event) {
  if (event.target.classList.contains("inc")) {
    const cartItem = event.target.closest(".item");
    const cartId = cartItem.dataset.id;
    console.log(cartId);
    let priceElement = cartItem.querySelector(".cart-price");

    const element = listofProd.find((elem) => elem.id == cartId);

    console.log(element);

    const elemPrice = element.price;

    console.log(elemPrice);

    let priceElem = elemPrice.replace("$", "");

    console.log(priceElem);

    /*let priceEl=cartItem.price;

    let priceElem=priceEl.textContent;

    

    let cleanedPrice=priceElem.replace("$","");*/

    const parent = event.target.closest(".cart-quantity");
    const span = parent.querySelector(".spanvalue");

    let baseprice = parseFloat(priceElem);

    let totValue1 = totValue.textContent;

    let totPrice = totValue1.replace("$", "");

    let totPrice1 = parseFloat(totPrice);

    let current = parseInt(span.textContent);

    span.textContent = current + 1;

    priceElement.textContent = "$" + (baseprice * (current + 1)).toFixed(2);

    cartSpanvalue = cartSpanvalue + 1;

    cartSpanBox.children[1].innerText = cartSpanvalue;

    totValue.textContent = "$" + (totPrice1 + baseprice).toFixed(2);
  }

  if (event.target.classList.contains("dec")) {
    const cartItem = event.target.closest(".item");
    let priceElement = cartItem.querySelector(".cart-price");

    const cartId = cartItem.dataset.id;

    const element = listofProd.find((elem) => elem.id == cartId);

    const eleId = listofProd.indexOf(element);

    const elemPrice = element.price;

    let priceElem = elemPrice.replace("$", "");

    const parent = event.target.closest(".cart-quantity");
    const span = parent.querySelector(".spanvalue");

    let baseprice = parseFloat(priceElem);
    let current = parseInt(span.textContent);

    let totValue1 = totValue.textContent;

    let totPrice = totValue1.replace("$", "");

    let totPrice1 = parseFloat(totPrice);

    if (current > 1) {
      span.textContent = current - 1;
      priceElement.textContent = "$" + (baseprice * (current - 1)).toFixed(2);
      console.log(priceElement);
      totValue.textContent = "$" + (totPrice1 - baseprice).toFixed(2);
    } else {
      event.target.closest(".item").remove();
      totValue.textContent = "$" + (totPrice1 - baseprice).toFixed(2);
      listofProd.splice(eleId, 1);
    }

    if (cartSpanvalue > listofProd.length) {
      cartSpanvalue = cartSpanvalue - 1;

      cartSpanBox.children[1].innerText = cartSpanvalue;
    }
  }
  console.log(listofProd);
});

const formInputName = document.getElementById("exampleinputname1");

const formInputEmail = document.getElementById("exampleinputemail1");

var a=document.getElementById("alert");

const closeAlert=document.getElementById("close1");



function validateForm() {
  if (formInputName.value === "" && formInputEmail.value === "") {
    alert("Please Enter required fields!");
    
  } else if (formInputEmail.value === "") {
    alert("Please Enter email!");
    
  } else if (formInputName.value === "" ) {
    alert("Please Enter name!");
    
  } else {
    a.style.display="block";
  }
}

function closeAlertt(){
  a.style.display="none";
  window.location.reload();
}

/*closeAlert.addEventListener("click",function(e){
  e.preventDefault();
  a.style.display="none";
  window.location.reload();
})*/


const left_click = document.querySelector(".left-arrow");
const right_click = document.querySelector(".right-arrow");

const display_view = document.querySelector(".wrapper");

const display_box = document.querySelector(".menu_box");

/*next_container is declared outside because then only one can assign every elements without creating a container each time and assigning last element*/

var counter = 2;

const content_items = document.querySelectorAll(".menu_content");

const full_page = document.querySelector(".mid_part");

const box_items = Array.from(content_items);

var counter = 1;

var page_arr = [];

var count = 0;

if (window.innerWidth >= 1440) {
  let items_per_page = 8;
  limit = items_per_page;
  if (box_items.length <= items_per_page ) {
    const page = box_items.slice(item, limit);
    display_box.append(...page);
    display_box.setAttribute("data-name", "page-1");
    console.log("hi");
  } else {
    for (let item = 0; item < box_items.length; item = item + items_per_page) {
      console.log("the count of box_items is " + box_items.length);
      if (count == 0) {
        var page = box_items.slice(item, limit);
        display_box.append(...page);
        display_box.setAttribute("data-name", "page-1");
        page_arr.push(display_box);
        display_view.appendChild(display_box);
        limit = limit + items_per_page;
        count++;
        console.log(limit);
        console.log(count);
        counter++;
      } else {
        console.log("the count of item is " + item);
        var next_page = box_items.slice(item, limit);
        console.log(limit);
        var next_container = display_box.cloneNode(false);
        next_container.append(...next_page);
        next_container.setAttribute("data-name", "page-" + counter);
        page_arr.push(next_container);
        console.log(next_container.getAttribute("data-name"));
        limit = limit + items_per_page;
        counter++;
      }
    }
  }
} else if (window.innerWidth >= 1024) {
  let items_per_page = 6;
  limit = items_per_page;
  if (box_items.length < items_per_page) {
    const page = box_items.slice(item, limit);
    display_box.append(...page);
    display_box.setAttribute("data-name", "page-1");
    console.log("hi");
  } else {
    for (let item = 0; item < box_items.length; item = item + items_per_page) {
      console.log("the count of box_items is " + box_items.length);
      if (count == 0) {
        var page = box_items.slice(item, limit);
        display_box.append(...page);
        display_box.setAttribute("data-name", "page-1");
        page_arr.push(display_box);
        display_view.appendChild(display_box);
        limit = limit + items_per_page;
        count++;
        console.log(limit);
        console.log(count);
        counter++;
      } else {
        console.log("the count of item is " + item);
        var next_page = box_items.slice(item, limit);
        console.log(limit);
        var next_container = display_box.cloneNode(false);
        next_container.append(...next_page);
        next_container.setAttribute("data-name", "page-" + counter);
        page_arr.push(next_container);
        console.log(next_container.getAttribute("data-name"));
        limit = limit + items_per_page;
        counter++;
      }
    }
  }
} else if (window.innerWidth >= 768) {
  let items_per_page = 4;
  limit = items_per_page;
  if (box_items.length < items_per_page) {
    const page = box_items.slice(item, limit);
    display_box.append(...page);
    display_box.setAttribute("data-name", "page-1");
    console.log("hi");
  } else {
    for (let item = 0; item < box_items.length; item = item + items_per_page) {
      console.log("the count of box_items is " + box_items.length);
      if (count == 0) {
        var page = box_items.slice(item, limit);
        display_box.append(...page);
        display_box.setAttribute("data-name", "page-1");
        page_arr.push(display_box);
        display_view.appendChild(display_box);
        limit = limit + items_per_page;
        count++;
        console.log(limit);
        console.log(count);
        counter++;
      } else {
        console.log("the count of item is " + item);
        var next_page = box_items.slice(item, limit);
        console.log(limit);
        var next_container = display_box.cloneNode(false);
        next_container.append(...next_page);
        next_container.setAttribute("data-name", "page-" + counter);
        page_arr.push(next_container);
        console.log(next_container.getAttribute("data-name"));
        limit = limit + items_per_page;
        counter++;
      }
    }
  }
} else if ((window.innerWidth <= 425) ||(window.innerWidth>=425)) {
  let items_per_page = 2;
  limit = items_per_page;
  if (box_items.length < items_per_page) {
    const page = box_items.slice(item, limit);
    display_box.append(...page);
    display_box.setAttribute("data-name", "page-1");
    console.log("hi");
  } else {
    for (let item = 0; item < box_items.length; item = item + items_per_page) {
      console.log("the count of box_items is " + box_items.length);
      if (count == 0) {
        var page = box_items.slice(item, limit);
        display_box.append(...page);
        display_box.setAttribute("data-name", "page-1");
        page_arr.push(display_box);
        display_view.appendChild(display_box);
        limit = limit + items_per_page;
        count++;
        console.log(limit);
        console.log(count);
        counter++;
      } else {
        console.log("the count of item is " + item);
        var next_page = box_items.slice(item, limit);
        console.log(limit);
        var next_container = display_box.cloneNode(false);
        next_container.append(...next_page);
        next_container.setAttribute("data-name", "page-" + counter);
        page_arr.push(next_container);
        console.log(next_container.getAttribute("data-name"));
        limit = limit + items_per_page;
        counter++;
      }
    }
  }
}

var j = 0;
right_click.addEventListener("click", function (e) {
  /*const current_page=document.querySelector("page-1")*/

 

  /*var curr_page=document.querySelector(".menu_box")*/
  /*while(display_box.firstChild){
			  display_box.removeChild(display_box.firstChild)
	      }
		  */

  /*note*/ /*while loop is useless here since it changes the content more than once and append the final content*/ if (
    j < page_arr.length-1
  ) {
    display_view.removeChild(display_view.firstElementChild);
    display_view.appendChild(page_arr[j+1]);
    /*console.log(page_arr[j].outerHTML)*/
    j++;
  }

   console.log("the length of page_arr is "+page_arr.length);
  console.log(j);
  console.log(page_arr[j] === page_arr.length);

  /*(page_arr[j]-1).replaceWith(page_arr[j])*/
  /*curr_page.replaceWith(page_arr[j])*/

  /*j++
    k++
    console.log("the value of j is"+j)*/
});

left_click.addEventListener("click", function (e) {
  /*const current_page=document.querySelector("page-1")*/

  console.log(page_arr.length);
  console.log(j);
  console.log(page_arr[j] === display_box);

  /*var curr_page=document.querySelector(".menu_box")*/
  /*while(display_box.firstChild){
        display_box.removeChild(display_box.firstChild)
        }
      display_box.replaceWith(next_container)
      next_container.append(page_arr[j])*/
  if (j >0) {
    display_view.removeChild(display_view.firstElementChild);
    display_view.appendChild(page_arr[j - 1]);
    j--;
  }

  /*(page_arr[j]-1).replaceWith(page_arr[j])*/
  /*curr_page.replaceWith(page_arr[j])*/

  /*j++
    k++
    console.log("the value of j is"+j)*/
});
/*else if (window.innerWidth <= 1024 && window.innerWidth>=768) {
  let items_per_page = 6
  let limit = items_per_page
  for (let item = 0; item < box_items.length; item = item + items_per_page) {
    if (box_items.length <= items_per_page) {
      const page = box_items.slice(item, limit)
      display_box.append(...page)
    }
    else {
      const next_container = display_box.cloneNode(false)
      const next_page = box_items.slice(item, limit)
      next_container.append(...next_page)
      /*display_box.append(next_container)
      limit = limit + items_per_page
    }
  }
}
else if (window.innerWidth>=425 && window.innerWidth<=768) {
  let items_per_page = 4
  let limit = items_per_page
  for (let item = 0; item < box_items.length; item = item + items_per_page) {
    if (box_items.length <= items_per_page) {
      const page = box_items.slice(item, limit)
      display_box.append(...page)
    }
    else {
      const next_container = display_box.cloneNode(true)
      const next_page = box_items.slice(item, limit)
      next_container.append(...next_page)
      /*display_box.append(next_container)
      limit = limit + items_per_page
    }
  }
}
else  {
  let items_per_page = 2
  let limit = items_per_page
  for (let item = 0; item < box_items.length; item = item + items_per_page) {
    if (box_items.length <= items_per_page) {
      const page = box_items.slice(item, limit)
      display_box.append(...page)
    }
    else {
      const next_container = display_box.cloneNode(true)
      const next_page = box_items.slice(item, limit)
      next_container.append(...next_page)
      /*display_box.append(next_container)
      limit = limit + items_per_page
    }
  }
}
*/


