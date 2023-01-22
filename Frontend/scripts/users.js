import loading from "../components/loading.components.js";
import hideLoading from "../components/hideLoading.components.js";
let tbody = document.querySelector('tbody');


console.log(tbody);

// const fetchNote = async() =>{
loading()
async function fetchNote() {
    try {

        const res = await fetch(`https://rich-ruby-kitten-toga.cyclic.app/allusers`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if (res.ok) {
            let data = await res.json();
            console.log(data)
            display(data)
        }
    } catch (error) {
        console.log(error.message);
    }

}

fetchNote()


let display = (data) => {
    tbody.innerHTML = ''
    data.forEach((element, index) => {
        let row = document.createElement('tr')

        let taskname = document.createElement('td')
        taskname.innerText = element.name;

        let type = document.createElement('td')
        type.innerText = element.email;

        let priority = document.createElement('td')
        priority.innerText = element._id;

        let completed = document.createElement('td')
        completed.innerText = 'Delete';

        completed.addEventListener('click', function () {
            deleteNode(element._id)
        })
        hideLoading()
        row.append(taskname, type, priority, completed)
        tbody.append(row)
    });
}


