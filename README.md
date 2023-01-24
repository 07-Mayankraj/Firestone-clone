#   [FireWheeeel](https://firewheeeeeel.netlify.app/)

 ## FireWheel is a clone Firestone which sales Tires,automobile-parts and provdies services.

---

<br>

# Frontend Of Firewheel: 

<br>

For Frontend is designed `HTML` `CSS` and `JavaScript`. <br>
Externally library used in FireWheel `Bootstrap`.

* Home page
* products page
* Login page
* Signup page
* Admin panel
       



# backend of Firewheel -> [BaseURL](https://rich-ruby-kitten-toga.cyclic.app)

## npm packages used in Firewheel

   * express     : for setup the server 
   * mongoose    : for makign connections between server and mongodb
   * JWT         : for jwt authentication
   * bcrypt      : for encrypting the password

## Database

   * MongoDB     : for storing details 

* nodemon 
 
<br>
 <hr>
<br>

  

# API endpoints

## user
```javascript
    login    ->    localhost:3500/users/login    {post}
    register ->    localhost:3500/users/register  {post}
```

## product
```javascript
    getall      ->   localhost:3500/products/
    getById     ->   localhost:3500/products/:id
    update      ->   localhost:3500/products/update/:id
    delete      ->   localhost:3500/products/delete/:id
    filter      ->   localhost:3500/products/filter?product_rating
    find qurey  ->   localhost:3500/products/?product_name=1212121212121212raj (anything from schema)
```

---

## body for update or create new 

Method :  post -> localhost:3500/products/add

```javascript
    {
    "product_id": 332,
    "product_img": "https://assets.firestonecompleteautocare.com/content/dam/bsro-sites/global/images/tires/full-60/h175/TuranzaEL40002RFT.png",
    "brand_img": "https://assets.firestonecompleteautocare.com/content/dam/bsro-sites/global/images/tires/brands/Bridgestone_logo.png",
    "product_name": "Mayank raj",
    "average_rating": "",
    "review_count": "",
    "product_specs": "chikkuuu",
    "stability": "Stability: Mayank",
    "traction": "Traction: Mayank",
    "dry_traction": "Dry Traction: Mayank",
    "ride_comfort": "Ride Comfort: Mayank",
    "tire_wear": "Tire Wear: Mayank",
    "wet_traction": "Wet Traction: 8",
    "noise_level": "Noise Level: Mayank",
    "__v": 0
    }
```

## cart

```javascript
    getall ->   localhost:3500/cart/
    add    ->   localhost:3500/cart/add
    delete ->   localhost:3500/cart/delete/:id
```
# cart flow design
![cartoperations](https://user-images.githubusercontent.com/87657007/213551092-2d5992b1-29f2-4731-9174-efad13874eb5.png)

 
# frontend screenshot 

![Screenshot (445)](https://user-images.githubusercontent.com/87657007/214338799-dd8045ec-3cd5-4aec-82f7-f362396d0440.png)
![Screenshot (446)](https://user-images.githubusercontent.com/87657007/214338884-5aab6b8c-41a3-46a0-836a-adf90f0382ae.png)
![Screenshot (447)](https://user-images.githubusercontent.com/87657007/214338905-2ae31903-3420-4027-b1e8-253b7fb6fdd0.png)
![Screenshot (448)](https://user-images.githubusercontent.com/87657007/214338931-6b798c48-3aa0-4aa0-abdd-abfd248cf66c.png)
![Screenshot (449)](https://user-images.githubusercontent.com/87657007/214338964-83115554-4984-44b1-906e-7b5a4c636ab0.png)
![Screenshot (450)](https://user-images.githubusercontent.com/87657007/214338990-0a4b3466-98ff-4309-b0ac-aa7fa3467f67.png)



