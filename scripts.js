
function updatePartsVisualState() {
    Ecwid.Cart.get(cart => {
        // First reset all parts to their default state
        carParts.forEach(part => {
            document.getElementById(part.id).classList.remove('in-cart');
        });

        // Then highlight parts that are in the cart
        cart.items.forEach(item => {
            const cartProductId = item.product.id;
            const matchingPart = carParts.find(part => part.productId === cartProductId);
            if (matchingPart) {
                document.getElementById(matchingPart.id).classList.add('in-cart');
            }
        });
    });
}

// Function to show the products in the cart using an alert
function showCartProducts() {
    Ecwid.Cart.get(cart => {
        if (cart.items.length === 0) {
            alert('Your cart is empty.');
        } else {
            const productDetails = cart.items.map(item => `${item.product.name} - Quantity: ${item.quantity}`).join('\n');
            alert(`Cart Details:\n${productDetails}`);
        }
    });
}