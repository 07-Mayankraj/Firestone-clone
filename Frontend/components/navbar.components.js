const navbar = () => {
 return `  <div id="navbar" class="">
 <div class=" top-heading">
   <div class="black-heading top-heading-left">
     <p >CAR CARE IS EVEN MORE COMPLETE WITH MY FIRESTONE APP</p >
   </div>
   <div class="white-heading top-heading-right">
     <p >KEEP TRACT AND MAINTENANCE</p >
   </div>
 </div>
 <div class="right-buttons">
   <div></div>
   <div class="right-buttons-links">
     <a href="#">Blog </a>
     <a href="#">Schedule an Appointment</a>
     <a href="#">Contact Us</a>
     <a href="#">Create an Account</a>
     <a href="../routes/Login.html">Sign in</a>
   </div>
 </div>
 <div id="main-navbar" class="">
   <header>
     <nav class="navbar">
         <div class="nav-logo">
             <img src="/logo/firewheel.png" alt="logo">
         </div>
         <div class="heading-links">
             <ul class="heading-links-list">
                 <li>
                     <a href="">TIRE</a>
                     <div class="mega-menu megamenutire">
                         <div class="mega-menu-items ">
                             <div class="mega-menu-uls">
                                 <ul>

                                     <li> <a
                                             href="./routes/product.html">
                                             Shop Tires by Vehicle</a></li>
                                     <li> <a
                                             href="./routes/product.html">
                                             Shop Tires by Size</a></li>
                                     <li> <a
                                             href="./routes/product.html">
                                             Shop with Tire Decision Guide</a></li>
                                     <li> <a
                                             href="./routes/product.html">
                                             Shop Tires</a></li>
                                     <li> <a
                                             href="./routes/product.html">
                                             Tire Warranties</a></li>
                                 </ul>
                             </div>
                             <div class="second div">
                               <div>
                                 <a href="../routes/product.html">
                                   <img src="../resources/navtire.png" alt="">
                                 </a>
                               </div>
                                   
                             </div>
                             
                             
                         </div>
                     </div>
                 </li>
                 <li><a href="">AUTO REPAIR</a>
                     <div class="mega-menu megamenutire">
                         <div class="mega-menu-items ">
                           <div class="mega-menu-uls">
                             <a href="../routes/product.html">
                               
                               <img src="../resources/dp2.png" alt="">
                             </a>
                             </div>
                         </div>
                     </div>
                 </li>
                 <li><a href="">AUTO MAINTENANCE</a>
                   <div class="mega-menu megamenutire">
                     <div class="mega-menu-items ">
                       <div class="mega-menu-uls">
                         <a href="../routes/product.html">

                           <img src="../resources/dp3.png" alt="">
                         </a>
                         </div>
                     </div>
                 </div>
                 </li>
                 <li><a href="">COUPONS</a></li>
                 <li><a target="_blank" href="#">FIND A STORE</a></li>
             </ul>
         </div>
         <div></div>
         <div class="nav-right">
             <div>
                <img alt="cart" style="width: 50%;" src="https://img.icons8.com/cotton/64/null/shopping-cart--v1.png"/>
                
               </div>
               
               <div id="login">
                 <input style="padding: 5px; width: 120%;" type="number" placeholder="PIN CODE"> 
               </div>

               <div>
                 <img style="width: 50%;" src="https://img.icons8.com/cotton/64/null/search--v1.png"/>
             </div>
         </div>
     </nav>
 </header>
   <!-- logo -->
   <!-- tire -->
   <!-- auto repair -->
   <!-- auto maintenance -->
   <!-- coupons -->
   <!-- find a store -->
   <!-- cart logo -->
   <!-- serach city -->
 </div>
</div>`

}

export default navbar