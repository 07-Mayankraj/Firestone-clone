import loading from "../components/loading.components.js";
const baseURL = "https://rich-ruby-kitten-toga.cyclic.app";






// fetching html tags 
let popHandler = document.querySelector(".pop-handler");  



loading();





async function fetchData() {
    loading();
    console.log('data loaded');
    try {
        let response = await fetch(`${baseURL}/products`, {
            method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (response.ok) {
        let product_data = await response.json();
        console.log(product_data);
        // renderData(product_data);
        popHandler.innerHTML = null
    } else {
        console.dir(response);
    }
} catch (error) {
    console.log(error);
}
}
// fetchData()


// card data

function getCard(data) {
  let formatedData = data.map((ele) => {
    return `
                <div class="product-cards" id ="${ele.id}" >
                <div class=" product-cards-fav">
                    <div>
                    <lord-icon
                    class="fav-btn"
                    src="https://cdn.lordicon.com/pnhskdva.json"
                    trigger="hover"
                    style="width:40px;height:40px">
                    </lord-icon>
                    </div>
                </div>
                <div class="product-image-div">
                    <img src=${ele.image}
                        alt="${ele.title}">
                </div>
                <div class=" product-title">
                    <p>${ele.title}</p>
                </div>
                <div class="product-discount-div">
                    <button class="product-discount-button">25% off with code RREPLAY</button>
                </div>
                <div class="product-price">
                    <span class="product-price">$${ele.price}</span>
                </div>
                <div class="product-button">
                    <button class="productQuickbuy">Quick Buy</button>
                </div>
                <div class="product-reviews">
                        <p>⭐⭐⭐⭐&#160(234)</p>
                </div>
            </div>


        `;
  });
  return formatedData.join("");
}









