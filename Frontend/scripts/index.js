import { footer } from "../components/footer.js";
import navbar from "../components/navbar.components.js";

import loading from "../components/loading.components.js";
import hideLoading from "../components/hideLoading.components.js";
let popHandler = document
loading()

// navbar

let naverbarDiv = document.querySelector('.navbar-section')
naverbarDiv.innerHTML = navbar()

// footer 
let footerDiv = document.querySelector('.footer');
footerDiv.innerHTML = footer()

hideLoading()


