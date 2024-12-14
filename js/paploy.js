let cart = [];

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    alert(`${productName} has been added to your cart!`);
}

function buyNow(productName, productPrice) {
    alert(`You have purchased ${productName} for $${productPrice}!`);
    // Here you can implement further purchase logic
}

function openCart() {
    const cartItemsDiv = document.getElementById("cart-items");
    cartItemsDiv.innerHTML = ""; // Clear previous items

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        let total = 0; // Initialize total
        cart.forEach((item, index) => {
            cartItemsDiv.innerHTML += `
                <p>${item.name} - $${item.price} 
                <button onclick="removeFromCart(${index})"><i class="fa-solid fa-trash"></i></button></p>`;
            total += item.price; // Add item price to total
        });
        cartItemsDiv.innerHTML += `<h3>Total: $${total}</h3>`; // Display total
    }

    document.getElementById("cart-modal").style.display = "block";
}

function closeCart() {
    document.getElementById("cart-modal").style.display = "none";
}

function removeFromCart(index) {
    cart.splice(index, 1); // Remove item from cart
    openCart(); // Refresh the cart display
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty. Please add items to your cart before checking out.");
    } else {
        alert("Proceeding to checkout...");
        // Here you can implement further checkout logic
        cart = []; // Clear the cart after checkout
        closeCart();
    }
}