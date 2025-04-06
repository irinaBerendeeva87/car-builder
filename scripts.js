function updatePartsVisualState() {
    Ecwid.Cart.get(cart => {
        let allPartsInCart = carParts.every(part =>
            cart.items.some(item => item.product.id === part.productId)
        );

        carParts.forEach(part => {
            const partElement = document.getElementById(part.id);
            const isInCart = cart.items.some(item => item.product.id === part.productId);

            // Update part visual state
            if (isInCart) {
                partElement.classList.add('in-cart');
            } else {
                partElement.classList.remove('in-cart');
            }
        });

        // Show or hide the completion message based on whether all parts are in the cart
        const completionMessage = document.getElementById('completion-message');
        const carImage = document.getElementById('car-image');
        if (allPartsInCart) {
            completionMessage.style.display = 'block';
            carImage.style.display = 'none';
        } else {
            completionMessage.style.display = 'none';
            carImage.style.display = 'block';
        }
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