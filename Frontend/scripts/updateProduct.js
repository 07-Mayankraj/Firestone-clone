import loading from "../components/loading.components.js";
const baseURL = "https://rich-ruby-kitten-toga.cyclic.app";

// fetching html tags
let popHandler = document.querySelector(".pop-handler");

// card data

//
let getProduct = async (id) => {
  try {
    let product_res = await fetch(`${baseURL}/products/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "applicaton/json",
      },
    });
    if (product_res.ok) {
      let product = await product_res.json();
      return product;
    } else {
      alert("alert in getting the data");
    }
  } catch (error) {
    console.log(error);
  }
};

const data = await getProduct(localStorage.getItem("quick-data"));
renderData(data);
console.log(data);

function getCard(data) {
  let formatedData = data.map((ele) => {
    return `
                <div class="product-cards" id ="${ele._id}" >
                
                <div class="product-logo-div">
                    <img class="dimage" src=${ele.brand_img} 
                        alt="${ele.product_name}">
                </div>
                
                <div class="product-image-div">
                    <img class="dimage" src=${ele.product_img} 
                        alt="${ele.product_name}">
                </div>
                <div class=" product-title">
                    <p><span class="titeloflist">Product Name : </span>${ele.product_name}</p>
                </div>
                <div class=" product-title">
                    <p><span class="titeloflist">Rating : </span>${ele.average_rating}</p>
                </div>
                <div class=" product-title">
                    <p><span class="titeloflist">Product Specs : </span>${ele.product_specs}</p>
                </div>
                <div class=" product-title">
                    <p>${ele.product_specs}</p>
                    <p>${ele.traction}</p>
                    <p>${ele.noise_level}</p>
                    <p>${ele.wet_traction}</p>
                    <p>${ele.tire_wear}</p>
                    <p>${ele.ride_comfort}</p>
                    <p>${ele.dry_traction}</p>
                </div>

                
                <div class="product-reviews">
                        <p>⭐⭐⭐⭐&#160${ele.review_count}</p>
                </div>
            </div>


        `;
  });
  return formatedData.join("");
}

//  render the data

async function renderData(product_data) {
  let datadisplay = document.querySelector(".product-details");
  datadisplay.innerHTML = getCard(product_data);
}

//  hide laoding animations
function hideLoading() {
  popHandler.innerHTML = null;
}
