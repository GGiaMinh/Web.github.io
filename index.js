// Danh sách địa danh
const placesData = [
    { id: 1, img: "IMG/ngomon.jpg", name: "Ngọ Môn", desc: "Cổng chính dẫn vào Đại Nội Huế." },
    { id: 2, img: "IMG/cuudinh.jpg", name: "Cửu Đỉnh", desc: "Biểu tượng quyền lực nhà Nguyễn." },
    { id: 3, img: "IMG/dienthaihoa.jpg", name: "Điện Thái Hòa", desc: "Nơi tổ chức các nghi lễ quan trọng." }
];

function onloadPlaces() {
    let kq = "";
    for (let i = 0; i < placesData.length; i++) {
        kq += `<div class="place">
            <img src="${placesData[i].img}" alt="${placesData[i].name}">
            <h3>${placesData[i].name}</h3>
            <p>${placesData[i].desc}</p>
        </div>`;
    }
    document.getElementById("dsdd").innerHTML = kq;
}

// Lịch sử
const historyData = {
    mainImage: "IMG/lichsu.jpg",
    sideImages: ["IMG/lichsu2.jpg", "IMG/lichsu3.jpg"],
    description: "Cung thành Huế được xây dựng từ thời vua Gia Long, là trung tâm chính trị, văn hóa của triều Nguyễn trong suốt hơn 140 năm. Nơi đây lưu giữ nhiều dấu ấn lịch sử quan trọng của dân tộc Việt Nam."
};

function onloadHistory() {
    let content = `
        <div class="history-content">
            <div class="main-image">
                <img src="${historyData.mainImage}" alt="Hình chính lịch sử Cung thành Huế">
            </div>
            <div class="side-images">
    `;

    for (let img of historyData.sideImages) {
        content += `<img src="${img}" alt="Hình phụ lịch sử Cung thành Huế">`;
    }

    content += `
            </div>
        </div>
        <br>
        <p>${historyData.description}</p>
    `;

    document.getElementById("history-content").innerHTML = content;
}

// Ẩm thực
const cuisineData = [
    { img: "IMG/banhbeo.jpg", name: "Bánh bèo", desc: "Món ăn dân dã, đặc trưng bằng bột gạo, kèm tôm khô và nước mắm." },
    { img: "IMG/bunbo.jpg", name: "Bún bò Huế", desc: "Món ăn trái tim của ẩm thực Huế với nước dùng đậm đà và gia vị đặc biệt." },
    { img: "IMG/chehatluu.jpg", name: "Chè hạt lựu", desc: "Món tráng miệng ngọt ngào, thể hiện sự khéo léo trong nghệ thuật nấu ăn." },
    { img: "IMG/nemlui.jpg", name: "Nem lụi", desc: "Món thịt nướng xiên que đặc trưng, ăn kèm bánh tráng và nước chấm đặc biệt." },
    { img: "IMG/banhkhoai.jpg", name: "Bánh khoái", desc: "Món bánh giòn rụm, nhân tôm thịt, ăn kèm rau sống và nước lèo." }
];

function onloadCuisine() {
    let content = '<div class="cuisine-list">';
    
    cuisineData.forEach(dish => {
        content += `
            <div class="dish">
                <img src="${dish.img}" alt="${dish.name}">
                <h3>${dish.name}</h3>
                <p>${dish.desc}</p>
            </div>
        `;
    });

    content += '</div>';
    document.getElementById("cuisine-list").innerHTML = content;
}

// Sự kiện
const eventData = [
    {
        img: "IMG/aodai.jpg",
        name: "Lễ hội Áo dài",
        date: "20/01/2025",
        desc: "Thưởng thức vẻ đẹp của tà áo dài truyền thống trong không gian cung đình."
    },
    {
        img: "IMG/namgiao.jpg",
        name: "Lễ tế Nam Giao",
        date: "15/02/2025",
        desc: "Sự kiện tái hiện nghi lễ truyền thống của triều Nguyễn."
    }
];

function onloadEvents() {
    let content = '<div class="event-list">';
    
    eventData.forEach(event => {
        content += `
            <div class="event">
                <img src="${event.img}" alt="${event.name}">
                <div class="event-info">
                    <h3>${event.name}</h3>
                    <p><strong>Ngày:</strong> ${event.date}</p>
                    <p>${event.desc}</p>
                </div>
            </div>
        `;
    });

    content += '</div>';
    document.getElementById("event-list").innerHTML = content;
}

// Hàm cập nhật số lượng giỏ hàng trên navbar
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalItems;
}

// Slider cho banner
let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelector(".slides");
    const totalSlides = document.querySelectorAll(".slide").length;

    // Tính toán slide mới
    currentSlide += direction;

    // Nếu vượt quá slide cuối, quay lại slide đầu
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    // Nếu vượt quá slide đầu, quay lại slide cuối
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    // Cập nhật vị trí của slider
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Tự động chuyển slide sau mỗi 5 giây
setInterval(() => {
    moveSlide(1);
}, 5000);

// Tự động chuyển slide sau mỗi 5 giây
setInterval(() => {
    moveSlide(1);
}, 5000);

// Hiển thị tên người dùng và xử lý đăng xuất
document.addEventListener("DOMContentLoaded", function () {
    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn")) || false;
    const username = localStorage.getItem("username");

    // Xử lý hiển thị thông tin người dùng hoặc nút Đăng nhập/Đăng ký
    const userInfo = document.querySelector(".user-info");
    if (isLoggedIn && username) {
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
                <a href="Login.html" class="login-btn">Đăng nhập</a>
                <a href="Register.html" class="register-btn">Đăng ký</a>
            `;

            // Ẩn nút giỏ hàng
            const cartIcon = document.querySelector(".cart-icon");
            if (cartIcon) {
                cartIcon.style.display = "none";
            }
        });
    } else {
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

    // Kiểm tra trạng thái đăng nhập khi nhấn vào giỏ hàng
    const cartIcon = document.querySelector(".cart-icon");
    if (cartIcon) {
        cartIcon.addEventListener("click", function (event) {
            event.preventDefault();

            if (isLoggedIn) {
                window.location.href = "Cart.html";
            } else {
                alert("Bạn cần đăng nhập để xem giỏ hàng!");
                window.location.href = "Login.html";
            }
        });
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

// Gọi hàm khi trang được tải
window.onload = function () {
    updateCartCount();
    onloadPlaces();
    onloadHistory();
    onloadCuisine();
    onloadEvents();
};