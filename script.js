
const chocolates = [
    { id: 1, name: 'Milk Chocolate', price: 100 },
    { id: 2, name: 'Dark Chocolate', price: 300 },
    { id: 3, name: 'White Chocolate', price: 275 },
    { id: 4, name: 'cadbury Chocolate', price: 75 },
    { id: 5, name: 'amul Chocolate', price: 200 },
    { id: 6, name: 'mother dairy Chocolate', price: 25 },
    { id: 7, name: 'light Chocolate', price: 225 },
{ id: 8, name: 'coco Chocolate', price: 100 },
{ id: 9, name: 'nut Chocolate', price: 125 },
{ id: 10, name: 'almond Chocolate', price: 200 },
    { id: 11, name: 'power Chocolate', price: 175 },
    
];

// Initialize total price
let totalPrice = 0;


function renderChocolates() {
    const chocolatesDiv = document.getElementById('chocolates');
    chocolatesDiv.innerHTML = '';

    chocolates.forEach(chocolate => {
        const div = document.createElement('div');
        div.classList.add('chocolate');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `chocolate_${chocolate.id}`;
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                totalPrice += chocolate.price;
            } else {
                totalPrice -= chocolate.price;
            }
            document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
            updateCheckboxStates();
        });

        const label = document.createElement('label');
        label.setAttribute('for', `chocolate_${chocolate.id}`);
        label.textContent = `${chocolate.name} - $${chocolate.price.toFixed(2)}`;

        div.appendChild(checkbox);
        div.appendChild(label);
        chocolatesDiv.appendChild(div);
    });
}

// Function to render chocolates
// function renderChocolates() {
//     const chocolatesDiv = document.getElementById('chocolates');
//     chocolatesDiv.innerHTML = '';

//     chocolates.forEach(chocolate => {
//         const div = document.createElement('div');
//         div.classList.add('col-md-3', 'mb-4');

//         const card = document.createElement('div');
//         card.classList.add('card');

//         const image = document.createElement('img');
//         image.src = `images/${chocolate.id}.jpg`; // Assuming images are named as 1.jpg, 2.jpg, ...

//         const cardBody = document.createElement('div');
//         cardBody.classList.add('card-body');

//         const checkbox = document.createElement('input');
//         checkbox.type = 'checkbox';
//         checkbox.id = `chocolate_${chocolate.id}`;
//         checkbox.addEventListener('change', () => {
//             if (checkbox.checked) {
//                 totalPrice += chocolate.price;
//             } else {
//                 totalPrice -= chocolate.price;
//             }
//             document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
//             updateCheckboxStates();
//         });

//         const label = document.createElement('label');
//         label.setAttribute('for', `chocolate_${chocolate.id}`);
//         label.textContent = `${chocolate.name} - $${chocolate.price.toFixed(2)}`;

//         cardBody.appendChild(checkbox);
//         cardBody.appendChild(label);
//         card.appendChild(image);
//         card.appendChild(cardBody);
//         div.appendChild(card);
//         chocolatesDiv.appendChild(div);
//     });
// }



function updateCheckboxStates() {
    const checkboxes = document.querySelectorAll('.chocolate input[type="checkbox"]');
    let totalChecked = 0;
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            totalChecked++;
        }
    });
    checkboxes.forEach(checkbox => {
        checkbox.disabled = totalChecked >= 8 && !checkbox.checked;
    });

    if (totalChecked >= 8) {
        alert("Maximum capacity reached. Max: 8 chocolates.");
    }
}



renderChocolates();
