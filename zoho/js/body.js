let products=[]
submitbtn=document.getElementById('submit');
console.log(submitbtn,document.getElementById('form') )

const addProduct = (ev) => {
    ev.preventDefault();
    if (document.getElementById('r1').checked){
        availability = document.getElementById('r1').value;
    }
    else {
        availability = document.getElementById('r2').value;
    }
    
    let product = {
        name: document.getElementById('Pname').value,
        rate: document.getElementById('Prate').value,
        discount: document.getElementById('Pdiscount').value,
        description:document.getElementById('desc').value,
        availability: availability,
    }
    products.push(product);
    document.getElementById('form').reset();
    localStorage.setItem('ProductList', JSON.stringify(products));
}

document.addEventListener('DOMContentLoaded', ()=>{
    submitbtn.addEventListener('click', addProduct);
});

