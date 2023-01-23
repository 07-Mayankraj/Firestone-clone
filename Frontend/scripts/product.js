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
               
                <div class="product-button">
                <button type="button" id ="${ele._id}" class="btn edit-btn  btn-warning btn-block">GET QUOTE</button>
                </div>
                <div class="product-reviews">
                <p>${ele.product_specs}</p>
                <p>${ele.traction}</p>
                <p>${ele.noise_level}</p>
                <p>${ele.wet_traction}</p>
                <p>${ele.tire_wear}</p>
                <p>${ele.ride_comfort}</p>
                <p>${ele.dry_traction}</p>
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


  let sorting_btn = document.querySelector("#sort-by");
  sorting_btn.addEventListener("change", () => {
  console.log(sorting_btn.value);
  if (sorting_btn.value === "default") fetchData();

  if (sorting_btn.value === "price-ases") {
    let sort_url =
      `${baseURL}/products/filter?stability`;
      fetchSortedData(sort_url);
    }
    if (sorting_btn.value === "price-dses") {
      let sort_url =
      `${baseURL}/products/filter?review_count`;
      fetchSortedData(sort_url);
     
  }
  if (sorting_btn.value === "atoz") {
    let sort_url =
      `${baseURL}/products/filter?ride_comfort`;
      fetchSortedData(sort_url);
  }
  if (sorting_btn.value === "ztoa") {
    let sort_url =
      `${baseURL}/products/filter?tire_wear`;
      fetchSortedData(sort_url);
  }
});

async function fetchSortedData(sort_url) {
  try {
    let response = await fetch(`${sort_url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      let product_data = await response.json();
      // console.log(product_data);
      hideLoading()
      renderData(product_data);
    } else {
      console.dir(response);
    }
  } catch (error) {
    console.log(error);
  }
}

let span = document.querySelectorAll('span');
console.log(span);

for (let btn of span) {
  btn.addEventListener("click", (event) => {
    loading()
    console.log(btn.innerText);
    let sort_url =
      `${baseURL}/products/?product_name=${btn.innerText}`;
      fetchSortedData(sort_url);
  });
}
