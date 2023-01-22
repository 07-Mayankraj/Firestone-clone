import { footer } from "../components/footer.js";
import navbar from "../components/navbar.components.js";

import hideLoading from "../components/hideLoading.components.js";
import loading from "../components/loading.components.js";

const baseURL = "https://rich-ruby-kitten-toga.cyclic.app";

// fetching html tags


// footer 
let footerDiv = document.querySelector('.footer');
let naverbarDiv = document.querySelector('.navbar-section')
naverbarDiv.innerHTML = navbar()
footerDiv.innerHTML = footer()

loading();

async function fetchData() {
  loading();
  console.log("data loaded");
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
      renderData(product_data);
      hideLoading()
    } else {
      console.dir(response);
    }
  } catch (error) {
    console.log(error);
  }
}
fetchData();



function getCard(data) {
  let formatedData = data.map((ele) => {
    return `
                <div class="product-cards" id ="${ele._id}" >
                
                <div class="product-logo-div">
                    <img class="pimage" src=${ele.brand_img} 
                        alt="${ele.product_name}">
                </div>
                
                <div class="product-image-div">
                    <img class="pimage" src=${ele.product_img} 
                        alt="${ele.product_name}">
                </div>
                <div class=" product-title">
                    <p>${ele.product_name}</p>
                </div>
                <div class="product-price">
                    <span class="product-price">${ele.review_count}</span>
                </div>
                <div class="product-button">
                <button type="button" id ="${ele._id}" class="btn edit-btn  btn-warning btn-block">GET QUOTE</button>
                </div>
                <div class="product-reviews">
                        <p>⭐⭐⭐⭐&#160${ele.review_count}</p>
                </div>
            </div>


        `;
  });
  return formatedData.join("");
}


async function renderData(product_data) {
    let datadisplay = document.querySelector(".product-data-display");
    datadisplay.innerHTML = getCard(product_data);
  
    // delete button
  
    // let alldeletebtn = document.querySelectorAll(".delete-btn");
    // for (let btn of alldeletebtn) {
    //   btn.addEventListener("click", (event) => {
    //     let product_id = event.target.id;
    //     loading();
    //     deleteproduct(product_id);
    //   });
    // }
    
    // // edit 

  
  }