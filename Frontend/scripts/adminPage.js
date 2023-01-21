import loading from "../components/loading.components.js";
const baseURL = "https://rich-ruby-kitten-toga.cyclic.app";

// fetching html tags
let popHandler = document.querySelector(".pop-handler");

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

// card data

//

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
                <button type="button" id ="${ele._id}" class="btn edit-btn  btn-warning btn-block">Edit</button>
                <button type="button" id ="${ele._id}" class="btn delete-btn btn-danger btn-block">Delete</button>
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
  let datadisplay = document.querySelector(".product-data-display");
  datadisplay.innerHTML = getCard(product_data);

  // delete button

  let alldeletebtn = document.querySelectorAll(".delete-btn");
  for (let btn of alldeletebtn) {
    btn.addEventListener("click", (event) => {
      let product_id = event.target.id;
      loading();
      deleteproduct(product_id);
    });
  }
  
  // edit 

  let editbtnall = document.querySelectorAll(".edit-btn");
  for (let btn of editbtnall) {
    btn.addEventListener("click", async(event) => {
      let product_id = event.target.id;
      loading();
      localStorage.setItem("quick-data", product_id);
      hideLoading()
      window.location.href = "../routes/editProduct.html"
      
    });
  }


  




}
// delete product
async function deleteproduct(product_id){

  try {
    let product_res = await fetch(`${baseURL}/products/delete/${product_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "applicaton/json",
      },
    });
    if (product_res.ok) {
      alert("product deleted successfully");
      fetchData()
    } else {
      console.log(product_res);
    }
  } catch (error) {
    console.log(error);
  }
};

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


//  hide laoding animations
function hideLoading(){
  popHandler.innerHTML = null
}