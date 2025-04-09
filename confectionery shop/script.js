const resultBox=document.querySelector("body")
const addButton = document.querySelectorAll(".add-to-cart")
const layer=document.querySelector(".content")
const before1=document.querySelectorAll(".before")

/*addButton.addEventListener('click', function() {
    const addCart=document.createElement('div')
    /*const closest=event.target.closest("img")
    addCart.appendChild(closest)
    layer.appendChild(addCart)
    layer.appendChild(addCart)
}
)*/


addButton.forEach(item => {
    item.addEventListener("click", function() {
        before1.forEach(item=>{
            item.style.display="none"
        })
        const addCart = document.createElement('div');
        addCart.classList.add("cart1")
        const labell=item.closest("[class^='cover']").querySelector("img")
        addCart.style.display="flex"
        addCart.style.position="relative" 
        addCart.style.padding="10px"
        addCart.style.width="90%"
        addCart.style.justifyContent="center"
        /*addCart.style.left="80px"*/
        const buyButton=document.createElement("button")
        buyButton.id="buy1"
        buyButton.addEventListener("click", function(){
                const addresult=document.createElement('div')
                addresult.classList.add("result1")
                addresult.style.backgroundColor="white"
                addresult.style.border="2px solid black"
                addresult.style.width="50vw"
                addresult.style.height="50vh"
                addresult.style.position="sticky"
                addresult.style.left="30%"
                addresult.style.bottom="20%"
                addresult.style.borderRadius="10px"
                addresult.style.transition="10s"
                addresult.style.opacity="0"
                const contentPara=document.createElement('p')
                contentPara.textContent="Your order has been confirmed"
                const contentimg=document.createElement('img')
                contentimg.setAttribute("src","images/partypop-removebg-preview.png")
                contentimg.setAttribute("height","50")
                contentimg.setAttribute("width","50")
                contentimg.style.position="absolute"
                contentimg.style.top="80%"
                const contentbtn=document.createElement('button')
                contentbtn.textContent="CLOSE"
                contentbtn.style.position="absolute"
                contentbtn.style.top="80%"
                contentbtn.style.left="39%"
                contentbtn.style.color="rgb(245, 74, 74)"
                contentbtn.style.fontWeight="bold"
                contentbtn.style.borderRadius="5px"
                contentbtn.style.backgroundColor="white"
                contentPara.style.color="rgb(245, 74, 74)"
                contentPara.style.position="absolute"
                contentPara.style.left="30%"
                contentPara.style.fontSize="larger"
                contentPara.style.fontWeight="bold"
                contentPara.style.top="40%"
                addresult.appendChild(contentPara)
                addresult.appendChild(contentimg)
                addresult.appendChild(contentbtn)
                resultBox.appendChild(addresult)
                setTimeout(()=>{
                    addresult.style.opacity="1"
                },0.00005)
                contentbtn.addEventListener("click",function(){
                    addresult.style.display="none"
                })
            }
        )
        const buttonText=document.createTextNode("BUY")
        buyButton.appendChild(buttonText)
        buyButton.style.position="absolute"
        buyButton.style.width="100px"
        /*buyButton.style.float="end"*/
        buyButton.style.top="80%"
        /*buyButton.style.left="200px"*/
        const cloneimg=labell.cloneNode(true)
        cloneimg.id="clone1"
        cloneimg.style.borderRadius="10px"
        cloneimg.style.height="300px"
        cloneimg.style.width="400px"
        /*cloneimg.style.left="100px"*/
        addCart.appendChild(cloneimg)
        addCart.appendChild(buyButton)
        layer.appendChild(addCart)
    })
})