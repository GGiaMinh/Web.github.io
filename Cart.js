// Khi tải trang, hiển thị giỏ hàng và tóm tắt
window.onload = function () {
    renderCart();
};

// Hàm hiển thị giỏ hàng
function renderCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartSummaryContainer = document.querySelector('.cart-summary');
    const cartActionsContainer = document.querySelector('.cart-actions');

    console.log("Dữ liệu giỏ hàng từ localStorage:", cart);

    if (!cartItemsContainer || !cartSummaryContainer || !cartActionsContainer) {
        console.error("Không tìm thấy các container HTML cần thiết.");
        return;
    }

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Giỏ hàng của bạn đang trống.</p>';
        cartSummaryContainer.innerHTML = '';
        cartActionsContainer.innerHTML = ''; // Ẩn nút xác nhận nếu giỏ hàng trống
        return;
    }

    let totalPrice = 0;
    cartItemsContainer.innerHTML = cart.map((item, index) => {
        if (!item.price) {
            console.error(`Sản phẩm không có thuộc tính 'price':`, item);
            return `<p style="color: red;">Lỗi: Sản phẩm không hợp lệ</p>`;
        }

        const pricePerPerson = parseInt(item.price.replace(/\D/g, '')); // Loại bỏ ký tự không phải số
        const totalItemPrice = pricePerPerson * item.quantity;
        totalPrice += totalItemPrice;

        return `
            <div class="cart-item">
            <div class="cart-item-img">
                <img src="${item.img}" alt="${item.title}">
            </div>
            <div class="cart-item-details">
                <h3>${item.title}</h3>
                <p><strong>Giá mỗi người:</strong> ${item.price}</p>
                <p><strong>Số lượng:</strong> ${item.quantity}</p>
                <p><strong>Tổng:</strong> ${totalItemPrice.toLocaleString()} VND</p>
            </div>
            <div class="cart-item-actions">
                <button class="remove-btn" onclick="removeFromCart(${index})">Xóa</button>
            </div>
        </div>
        `;
    }).join('');

    cartSummaryContainer.innerHTML = `
        <p><strong>Tổng Tiền Sản Phẩm:</strong> ${totalPrice.toLocaleString()} VND</p>
        <p><strong>Phí Dịch Vụ:</strong> 50.000 VND</p>
        <p><strong>Tổng Thanh Toán:</strong> ${(totalPrice + 50000).toLocaleString()} VND</p>
    `;

    cartActionsContainer.innerHTML = `
        <button id="confirm-cart-btn" onclick="confirmCart()">Xác nhận giỏ hàng</button>
    `;
}

// Hàm xóa sản phẩm khỏi giỏ hàng
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (index < 0 || index >= cart.length) {
        console.error("Index không hợp lệ:", index);
        return;
    }

    cart.splice(index, 1); // Xóa sản phẩm tại vị trí index
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Đã xóa vật phẩm khỏi giỏ hàng!');

    // Cập nhật giao diện
    renderCart();
}

// Hàm xác nhận giỏ hàng
function confirmCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert("Giỏ hàng của bạn đang trống!");
        return;
    }
    window.location.href = 'Confirm.html';
}

// Hiển thị thông tin người dùng trên navbar
document.addEventListener("DOMContentLoaded", function () {
    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn")) || false;
    const username = localStorage.getItem("username");

    const userInfoContainer = document.querySelector(".user-info");
    const cartIcon = document.querySelector(".cart-icon");

    if (isLoggedIn && username) {
        userInfoContainer.innerHTML = `
            <i class="fas fa-user"></i>
            <span>${username}</span>
            <button id="logout-btn" class="logout-btn">Đăng Xuất</button>
        `;

        // Xử lý đăng xuất
        document.getElementById("logout-btn").addEventListener("click", function () {
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("username");
            alert("Bạn đã đăng xuất!");
            window.location.href = "index.html";
        });
    } else {
        userInfoContainer.innerHTML = `
            <a href="Login.html" class="login-btn">Đăng nhập</a>
            <a href="Register.html" class="register-btn">Đăng ký</a>
        `;

        if (cartIcon) {
            cartIcon.style.display = "none";
        }
    }
});

// Hiệu ứng scroll reveal
document.addEventListener("DOMContentLoaded", function () {
    const revealElements = document.querySelectorAll(".scroll-reveal");

    function revealOnScroll() {
        revealElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 50) {
                element.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});