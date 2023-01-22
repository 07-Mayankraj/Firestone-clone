import { footer } from "../components/footer.js";
import navbar from "../components/navbar.components.js";


console.log(footer());
// footer 
let footerDiv = document.querySelector('.footer');
// let naverbarDiv = document.querySelector('#main-navbar')
naverbarDiv.innerHTML = navbar()
footerDiv.innerHTML = footer()