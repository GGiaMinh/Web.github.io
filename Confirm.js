// Khi tải trang, hiển thị giỏ hàng và tóm tắt
window.onload = function () {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartSummaryContainer = document.querySelector('.cart-summary');
    const comboSelection = document.querySelector('.combo-selection');
    console.log("Dữ liệu giỏ hàng:", cart);

    if (cart.length === 0) {
        // Nếu giỏ hàng trống
        cartItemsContainer.innerHTML = '<p>Giỏ hàng của bạn đang trống.</p>';
        cartSummaryContainer.innerHTML = '';
        return;
    }

    let totalPrice = 0;

    // Hiển thị danh sách sản phẩm trong giỏ hàng
    cartItemsContainer.innerHTML = cart.map((item) => {
        if (!item.price) {
            console.error(`Sản phẩm không có thuộc tính 'price':`, item);
            return `<p style="color: red;">Lỗi: Sản phẩm không hợp lệ</p>`;
        }

        const pricePerPerson = parseInt(item.price.replace(/\D/g, '')); // Loại bỏ ký tự không phải số
        const totalItemPrice = pricePerPerson * item.quantity;
        totalPrice += totalItemPrice;

        return `
            <div class="cart-item">
                <img src="${item.img}" alt="${item.title}">
                <p><strong>Tour:</strong> ${item.title}</p>
                <p><strong>Thời gian:</strong> ${item.duration || 'Không xác định'}</p>
                <p><strong>Giá mỗi người:</strong> ${item.price}</p>
                <p><strong>Số lượng:</strong> ${item.quantity}</p>
                <p><strong>Tổng:</strong> ${totalItemPrice.toLocaleString()} VND</p>
            </div>
        `;
    }).join('');

    /// Hàm tính tổng tiền bao gồm combo
    function updateTotalPrice() {
        let comboPrice = 0;

        // Kiểm tra các combo được chọn
        const combo1 = document.getElementById('combo1');
        const combo2 = document.getElementById('combo2');
        const combo3 = document.getElementById('combo3');

        if (combo1.checked) comboPrice += 150000; // Giá combo 1
        if (combo2.checked) comboPrice += 250000; // Giá combo 2
        if (combo3.checked) comboPrice += 50000;  // Giá combo 3

        // Cập nhật tổng tiền
        cartSummaryContainer.innerHTML = `
            <p><strong>Tổng Tiền Sản Phẩm:</strong> ${totalPrice.toLocaleString()} VND</p>
            <p><strong>Combo Ăn Uống:</strong> ${comboPrice.toLocaleString()} VND</p>
            <p><strong>Phí Dịch Vụ:</strong> 50.000 VND</p>
            <p><strong>Tổng Thanh Toán:</strong> ${(totalPrice + comboPrice + 50000).toLocaleString()} VND</p>
        `;
    }

    // Lắng nghe sự kiện thay đổi trên các checkbox combo
    comboSelection.addEventListener('change', updateTotalPrice);

    // Hiển thị tổng tiền ban đầu
    updateTotalPrice();
};

// Xử lý hiển thị thông tin người dùng và đăng nhập/đăng xuất
document.addEventListener("DOMContentLoaded", function () {
    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn")) || false;
    const username = localStorage.getItem("username");

    const userInfo = document.querySelector(".user-info");
    if (isLoggedIn && username) {
        // Hiển thị thông tin người dùng
        userInfo.innerHTML = `
            <i class="fas fa-user"></i>
            <span>${username}</span>
            <button id="logout-btn" class="logout-btn">Đăng Xuất</button>
        `;

        // Xử lý đăng xuất
        document.getElementById("logout-btn").addEventListener("click", function () {
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("username");
            alert("Bạn đã đăng xuất!");

            // Cập nhật lại giao diện
            userInfo.innerHTML = `
                <a href="Login.html" class="login-btn">Đăng nhập/Đăng ký</a>
            `;

            // Ẩn nút giỏ hàng
            const cartIcon = document.querySelector(".cart-icon");
            if (cartIcon) {
                cartIcon.style.display = "none";
            }
        });
    } else {
        // Hiển thị nút Đăng nhập/Đăng ký
        userInfo.innerHTML = `
            <a href="Login.html" class="login-btn">Đăng nhập</a>
            <a href="Register.html" class="register-btn">Đăng ký</a>
        `;

        // Ẩn nút giỏ hàng
        const cartIcon = document.querySelector(".cart-icon");
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
    revealOnScroll(); // Kích hoạt ngay khi tải trang
});

// Hàm xác nhận đơn hàng
function confirmOrder() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert("Giỏ hàng của bạn đang trống!");
        return;
    }

    // Xử lý logic xác nhận đơn hàng
    alert("Đơn hàng của bạn đã được xác nhận!");
    localStorage.removeItem('cart'); // Xóa giỏ hàng sau khi xác nhận
    window.location.href = 'index.html'; // Chuyển hướng về trang chủ
}