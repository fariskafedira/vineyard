async function getProducts() {
    return fetch("get-product/").then((res) => res.json())
}

async function refreshProducts() {
    document.getElementById("product_table").innerHTML = ""
    const products = await getProducts()
    let htmlString = ` `
    products.forEach((item) => {
        htmlString += `
            <div class="col-md-6 col-lg-6 col-sm-12">
                <div class="product-card">
                    <div class="product-image">
                        <img src="static/${item.fields.image}" alt="Product Image">
                    </div>
                    <div class="product-details">
                        <div class="product-name">${item.fields.name}</div>
                        <div class="product-description">${item.fields.description}</div>
                        <div class="product-amount">In Stock: ${item.fields.amount}</div>
                    </div>
                    <div class="product-actions mt-auto">
                        <button class="product-button-dark" onclick="increaseProduct(event, ${item.pk})">+</button>
                        <button class="product-button-dark" onclick="removeProduct(${item.pk})">-</button>
                        <button class="product-button-dark" onclick="editProduct(${item.pk})">Edit</button>
                        <button class="product-button-dark" onclick="deleteProduct(${item.pk})">Delete</button>
                    </div>
                </div>
            </div>`;
    });

    document.getElementById("product_table").innerHTML = htmlString
}

refreshProducts()

function addProduct() {
    fetch("/create-product-ajax/", {
        method: "POST",
        body: new FormData(document.querySelector('#form'))
    }).then(refreshProducts)

    document.getElementById("form").reset()
    return false
}

document.getElementById("button_add").onclick = addProduct

// Fungsi untuk menambahkan produk
function increaseProduct(event, productId) {
    event.preventDefault();
    fetch("/increase_product/"+productId+"/")
    .then(refreshProducts)    
}

// Fungsi untuk mengurangi produk
function removeProduct(productId) {
    fetch("/remove_product/"+productId+"/")
    .then(refreshProducts)
}

// Fungsi untuk mengedit produk
function editProduct(productId) {
    fetch("/edit_product/"+productId+"/")
    .then(refreshProducts)
}

// Fungsi untuk menghapus produk
async function deleteProduct(productId) {
    if (confirm("Are you sure you want to delete this product?")) {
        fetch("/delete-product-ajax/"+productId+"/", {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(data => {
            refreshProducts();
            alert(data.message);
        })
    }
}