const baseurl = "https://rich-ruby-kitten-toga.cyclic.app"

let form = document.querySelector("#signupfrom")
let body = document.querySelector("body");
import loading from "../components/loading.components.js";
import hideLoading from "../components/hideLoading.components.js";



form.addEventListener('submit',function(event){
    event.preventDefault(event);
    let user = {
        name : form.name.value,
        email:form.email.value,
        phone:form.phone.value,
        password:form.password.value,
    }
    body.style.backgroundImage = "url('https://img.rawpixel.com/private/static/images/website/2022-05/pf-s124-ak-2615_2.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=c77077de245e55401603da8711ee87a7')";
    loading()
    register(user)
})


const register = async(user) =>{
    try {

        const res = await fetch(`https://rich-ruby-kitten-toga.cyclic.app/users/register`,{
            method : "POST",
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(user) 
        })
        let data = await res.json()
        if(data.err){
            alert(data.err)
            hideLoading()
            window.location.reload();

        }
        else{
            alert(user.name + " user created successfully")  
            window.location.href = "../routes/Login.html"  
        }
    } catch (error) {
        console.log(error.message);
    }

}