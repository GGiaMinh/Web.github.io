function onloadTourDetails() {
    // Get the query parameter from the URL
    const params = new URLSearchParams(window.location.search);
    const tourId = params.get('tourId'); // Retrieve the tourId from the URL

const tours = [
    {
        id: 1,
        title: "Tour Đại Nội - Hoàng Thành Huế",
        img: "IMG_Booking/tour1.jpg",
        duration: "1 ngày",
        price: "1.200.000 VND/người",
        description: "Khám phá Hoàng Thành Huế cổ kính với hướng dẫn viên chuyên nghiệp. Trải nghiệm văn hóa cung đình xưa với các công trình kiến trúc độc đáo.",
        schedule: [
            "07:30 - Đón khách tại điểm hẹn",
            "08:00 - Tham quan Ngọ Môn, Điện Thái Hòa",
            "09:30 - Khám phá Tử Cấm Thành",
            "11:00 - Tham quan Thế Miếu và Hiển Lâm Các",
            "12:30 - Nghỉ trưa, thưởng thức đặc sản Huế",
            "14:00 - Tiếp tục tham quan Cửu Đỉnh",
            "15:30 - Kết thúc chương trình, đưa khách về điểm hẹn"
    ],
    bookingLink: "Confirm.html"
    },{
        id: 2,
        title: "Tour Sông Hương",
        img: "IMG_Booking/tour2.jpg",
        duration: "nửa ngày",
        price: "800.000 VND/người",
        description: "Khám phá Sông Hương thơ mộng với hướng dẫn viên chuyên nghiệp. Trải nghiệm văn hóa Huế qua các hoạt động thú vị.",
        schedule: [
            "07:30 - Đón khách tại điểm hẹn",
            "08:00 - Tham quan cầu Trường Tiền",
            "09:00 - Du thuyền trên Sông Hương",
            "10:30 - Nghe ca Huế trên thuyền",
            "12:00 - Kết thúc chương trình"
    ],
    bookingLink: "Confirm.html"
    },{
        id: 3,
        title: "Tour Lăng Tẩm",
        img: "IMG_Booking/tour3.jpg",
        duration: "1 ngày",
        price: "1.000.000 VND/người",
        description: "Khám phá Hoàng Thành Huế cổ kính với hướng dẫn viên chuyên nghiệp. Trải nghiệm văn hóa cung đình xưa với các công trình kiến trúc độc đáo.",
        schedule: [
            "08:00 - Đón khách tại điểm hẹn",
            "09:00 - Tham quan Ngọ Môn, Điện Thái Hòa",
            "10:30 - Khám phá Tử Cấm Thành",
            "12:00 - Nghỉ trưa, ăn đặc sản Huế",
            "14:00 - Tiếp tục tham quan lăng tẩm",
            "16:00 - Kết thúc chương trình"
    ],
    bookingLink: "Confirm.html"
    },{
        id: 4,
        title: "Tour chợ Đông Ba",
        img: "IMG_Booking/tour4.jpg",
        duration: "4 giờ",
        price: "600.000 VND/người",
        description: "Khám phá Hoàng Thành Huế cổ kính với hướng dẫn viên chuyên nghiệp. Trải nghiệm văn hóa cung đình xưa với các công trình kiến trúc độc đáo.",
        schedule: [
            "08:00 - Đón khách tại điểm hẹn",
            "09:00 - Tham quan Ngọ Môn, Điện Thái Hòa",
            "10:30 - Khám phá Tử Cấm Thành",
            "12:00 - Nghỉ trưa, ăn đặc sản Huế",
            "14:00 - Tiếp tục tham quan lăng tẩm",
            "16:00 - Kết thúc chương trình"
    ],
    bookingLink: "Confirm.html"
    },{
        id: 5,
        title: "Tour Biển Lăng Cô",
        img: "IMG_Booking/tour5.jpg",
        duration: "2 ngày 1 đêm",
        price: "2.500.000 VND/người",
        description: "Khám phá Hoàng Thành Huế cổ kính với hướng dẫn viên chuyên nghiệp. Trải nghiệm văn hóa cung đình xưa với các công trình kiến trúc độc đáo.",
        schedule: [
            "08:00 - Đón khách tại điểm hẹn",
            "09:00 - Tham quan Ngọ Môn, Điện Thái Hòa",
            "10:30 - Khám phá Tử Cấm Thành",
            "12:00 - Nghỉ trưa, ăn đặc sản Huế",
            "14:00 - Tiếp tục tham quan lăng tẩm",
            "16:00 - Kết thúc chương trình"
    ],
    bookingLink: "Confirm.html"
    },{
        id: 6,
        title: "Tour Chùa Thiên Mụ",
        img: "IMG_Booking/tour6.jpg",
        duration: "nửa ngày",
        price: "700.000 VND/người",
        description: "Khám phá Hoàng Thành Huế cổ kính với hướng dẫn viên chuyên nghiệp. Trải nghiệm văn hóa cung đình xưa với các công trình kiến trúc độc đáo.",
        schedule: [
            "08:00 - Đón khách tại điểm hẹn",
            "09:00 - Tham quan Ngọ Môn, Điện Thái Hòa",
            "10:30 - Khám phá Tử Cấm Thành",
            "12:00 - Nghỉ trưa, ăn đặc sản Huế",
            "14:00 - Tiếp tục tham quan lăng tẩm",
            "16:00 - Kết thúc chương trình"
    ],
    bookingLink: "Confirm.html"
    },{
        id: 7,
        title: "Tour Phố Cổ Huế",
        img: "IMG_Booking/tour7.jpg",
        duration: "1 ngày",
        price: "1.500.000 VND/người",
        description: "Khám phá Hoàng Thành Huế cổ kính với hướng dẫn viên chuyên nghiệp. Trải nghiệm văn hóa cung đình xưa với các công trình kiến trúc độc đáo.",
        schedule: [
            "08:00 - Đón khách tại điểm hẹn",
            "09:00 - Tham quan Ngọ Môn, Điện Thái Hòa",
            "10:30 - Khám phá Tử Cấm Thành",
            "12:00 - Nghỉ trưa, ăn đặc sản Huế",
            "14:00 - Tiếp tục tham quan lăng tẩm",
            "16:00 - Kết thúc chương trình"
    ],
    bookingLink: "Confirm.html"
    },
    {
        id: 8,
        title: "Tour Đầm Lập An",
        img: "IMG_Booking/tour8.jpg",
        duration: "1 ngày",
        price: "1.300.000 VND/người",
        description: "Khám phá Hoàng Thành Huế cổ kính với hướng dẫn viên chuyên nghiệp. Trải nghiệm văn hóa cung đình xưa với các công trình kiến trúc độc đáo.",
        schedule: [
            "08:00 - Đón khách tại điểm hẹn",
            "09:00 - Tham quan Ngọ Môn, Điện Thái Hòa",
            "10:30 - Khám phá Tử Cấm Thành",
            "12:00 - Nghỉ trưa, ăn đặc sản Huế",
            "14:00 - Tiếp tục tham quan lăng tẩm",
            "16:00 - Kết thúc chương trình"
    ],
    bookingLink: "Confirm.html"
    },{
        id: 9,
        title: "Tour Làng Nghề Huế",
        img: "IMG_Booking/tour9.jpg",
        duration: "1 ngày",
        price: "1.000.000 VND/người",
        description: "Khám phá Hoàng Thành Huế cổ kính với hướng dẫn viên chuyên nghiệp. Trải nghiệm văn hóa cung đình xưa với các công trình kiến trúc độc đáo.",
        schedule: [
            "08:00 - Đón khách tại điểm hẹn",
            "09:00 - Tham quan Ngọ Môn, Điện Thái Hòa",
            "10:30 - Khám phá Tử Cấm Thành",
            "12:00 - Nghỉ trưa, ăn đặc sản Huế",
            "14:00 - Tiếp tục tham quan lăng tẩm",
            "16:00 - Kết thúc chương trình"
    ],
    bookingLink: "Confirm.html"
    },{
        id: 10,
        title: "Tour Lăng Gia Long",
        img: "IMG_Booking/tour10.jpg",
        duration: "1 ngày",
        price: "1.550.000 VND/người",
        description: "Khám phá Hoàng Thành Huế cổ kính với hướng dẫn viên chuyên nghiệp. Trải nghiệm văn hóa cung đình xưa với các công trình kiến trúc độc đáo.",
        schedule: [
            "08:00 - Đón khách tại điểm hẹn",
            "09:00 - Tham quan Ngọ Môn, Điện Thái Hòa",
            "10:30 - Khám phá Tử Cấm Thành",
            "12:00 - Nghỉ trưa, ăn đặc sản Huế",
            "14:00 - Tiếp tục tham quan lăng tẩm",
            "16:00 - Kết thúc chương trình"
    ],
    bookingLink: "Confirm.html"
    },{
        id: 111,
        title: "Tour Vườn Quốc Gia Bạch Mã",
        img: "IMG_Booking/tour11.jpg",
        duration: "2 ngày 1 đêm",
        price: "2.200.000 VND/người",
        description: "Khám phá Hoàng Thành Huế cổ kính với hướng dẫn viên chuyên nghiệp. Trải nghiệm văn hóa cung đình xưa với các công trình kiến trúc độc đáo.",
        schedule: [
            "08:00 - Đón khách tại điểm hẹn",
            "09:00 - Tham quan Ngọ Môn, Điện Thái Hòa",
            "10:30 - Khám phá Tử Cấm Thành",
            "12:00 - Nghỉ trưa, ăn đặc sản Huế",
            "14:00 - Tiếp tục tham quan lăng tẩm",
            "16:00 - Kết thúc chương trình"
    ],
    bookingLink: "Confirm.html"
    },{
        id: 12,
        title: "Tour Lăng Tự Đức",
        img: "IMG_Booking/tour12.jpg",
        duration: "1 ngày",
        price: "1.500.000 VND/người",
        description: "Khám phá Hoàng Thành Huế cổ kính với hướng dẫn viên chuyên nghiệp. Trải nghiệm văn hóa cung đình xưa với các công trình kiến trúc độc đáo.",
        schedule: [
            "08:00 - Đón khách tại điểm hẹn",
            "09:00 - Tham quan Ngọ Môn, Điện Thái Hòa",
            "10:30 - Khám phá Tử Cấm Thành",
            "12:00 - Nghỉ trưa, ăn đặc sản Huế",
            "14:00 - Tiếp tục tham quan lăng tẩm",
            "16:00 - Kết thúc chương trình"
    ],
    bookingLink: "Confirm.html"
    },{
        id: 13,
        title: "Tour Phá Tam Giang",
        img: "IMG_Booking/tour13.jpg",
        duration: "1 ngày",
        price: "1.300.000 VND/người",
        description: "Khám phá Hoàng Thành Huế cổ kính với hướng dẫn viên chuyên nghiệp. Trải nghiệm văn hóa cung đình xưa với các công trình kiến trúc độc đáo.",
        schedule: [
            "08:00 - Đón khách tại điểm hẹn",
            "09:00 - Tham quan Ngọ Môn, Điện Thái Hòa",
            "10:30 - Khám phá Tử Cấm Thành",
            "12:00 - Nghỉ trưa, ăn đặc sản Huế",
            "14:00 - Tiếp tục tham quan lăng tẩm",
            "16:00 - Kết thúc chương trình"
    ],
    bookingLink: "Confirm.html"
    },{
        id: 14,
        title: "Tour Đồi Vọng Cảnh",
        img: "IMG_Booking/tour14.jpg",
        duration: "1 buổi sáng",
        price: "600.000 VND/người",
        description: "Khám phá Hoàng Thành Huế cổ kính với hướng dẫn viên chuyên nghiệp. Trải nghiệm văn hóa cung đình xưa với các công trình kiến trúc độc đáo.",
        schedule: [
            "08:00 - Đón khách tại điểm hẹn",
            "09:00 - Tham quan Ngọ Môn, Điện Thái Hòa",
            "10:30 - Khám phá Tử Cấm Thành",
            "12:00 - Nghỉ trưa, ăn đặc sản Huế",
            "14:00 - Tiếp tục tham quan lăng tẩm",
            "16:00 - Kết thúc chương trình"
    ],
    bookingLink: "Confirm.html"
    },{
        id: 15,
        title: "Tour Suối Voi",
        img: "IMG_Booking/tour15.jpg",
        duration: "1 ngày",
        price: "900.000 VND/người",
        description: "Khám phá Hoàng Thành Huế cổ kính với hướng dẫn viên chuyên nghiệp. Trải nghiệm văn hóa cung đình xưa với các công trình kiến trúc độc đáo.",
        schedule: [
            "08:00 - Đón khách tại điểm hẹn",
            "09:00 - Tham quan Ngọ Môn, Điện Thái Hòa",
            "10:30 - Khám phá Tử Cấm Thành",
            "12:00 - Nghỉ trưa, ăn đặc sản Huế",
            "14:00 - Tiếp tục tham quan lăng tẩm",
            "16:00 - Kết thúc chương trình"
    ],
    bookingLink: "Confirm.html"
    }
]

// Tìm tour theo ID
const tour = tours.find(t => t.id == tourId);

// Cập nhật nội dung trang
const tourDetailSection = document.querySelector('.tour-detail');
if (tour) {
    const scheduleList = tour.schedule.map(item => `<li>${item}</li>`).join('');
    tourDetailSection.innerHTML = `
        <h1>${tour.title}</h1>
        <img src="${tour.img}" alt="${tour.title}">
        <p>${tour.description}</p>
        <p><strong>Thời gian:</strong> ${tour.duration}</p>
        <p><strong>Giá:</strong> ${tour.price}</p>
        <p><strong>Lịch trình:</strong></p>
        <ul>${scheduleList}</ul>
        <label for="quantity">Số lượng người:</label>
        <input type="number" id="quantity" name="quantity" min="1" value="1">
        <button id="add-to-cart" onclick="addToCart(${tour.id})">Thêm vào giỏ hàng</button>
    `;
} else {
    tourDetailSection.innerHTML = `
        <h1>Tour không tồn tại</h1>
        <p>Vui lòng chọn một tour hợp lệ từ trang đặt tour.</p>
    `;
}
}

// Hàm thêm vào giỏ hàng
function addToCart(tourId) {
    const quantityInput = document.getElementById('quantity');
    const quantity = parseInt(quantityInput.value) || 1;

    if (quantity <= 0) {
        alert("Số lượng phải lớn hơn 0!");
        return;
    }

    // Lấy giỏ hàng từ localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === tourId);

    if (existingItem) {
        // Nếu sản phẩm đã tồn tại, tăng số lượng
        existingItem.quantity += quantity;
    } else {
        const tours = [
            { id: 1, title: "Tour Đại Nội", img: "/IMG_Booking/tour1.jpg", price: "1.200.000 VND" },
            { id: 2, title: "Tour Sông Hương", img: "/IMG_Booking/tour2.jpg", price: "800.000 VND" },
            { id: 3, title: "Tour Lăng Tẩm", img: "/IMG_Booking/tour3.jpg", price: "1.000.000 VND" },
            { id: 4, title: "Tour chợ Đông Ba", img: "/IMG_Booking/tour4.jpg", price: "600.000 VND" },
            { id: 5, title: "Tour Biển Lăng Cô", img: "/IMG_Booking/tour5.jpg", price: "2.500.000 VND" },
            { id: 6, title: "Tour Chùa Thiên Mụ", img: "/IMG_Booking/tour6.jpg", price: "700.000 VND" },
            { id: 7, title: "Tour Phố Cổ Huế", img: "/IMG_Booking/tour7.jpg", price: "1.500.000 VND" },
            { id: 8, title: "Tour Đầm Lập An", img: "/IMG_Booking/tour8.jpg", price: "1.300.000 VND" },
            { id: 9, title: "Tour Làng Nghề Huế", img: "/IMG_Booking/tour9.jpg", price: "1.000.000 VND" },
            { id: 10, title: "Tour Lăng Gia Long", img: "/IMG_Booking/tour10.jpg", price: "1.500.000 VND" },
            { id: 11, title: "Tour Vườn Quốc Gia Bạch Mã", img: "/IMG_Booking/tour11.jpg", price: "2.200.000 VND" },
            { id: 12, title: "Tour Lăng Tự Đức", img: "/IMG_Booking/tour12.jpg", price: "1.500.000 VND" },
            { id: 13, title: "Tour Phá Tam Giang", img: "/IMG_Booking/tour13.jpg", price: "1.300.000 VND" },
            { id: 14, title: "Tour Đồi Vọng Cảnh", img: "/IMG_Booking/tour14.jpg", price: "600.000 VND" },
            { id: 15, title: "Tour Suối Voi", img: "/IMG_Booking/tour15.jpg", price: "900.000 VND" },
        ];

        const tour = tours.find(t => t.id === tourId);
        if (!tour) {
            alert("Không tìm thấy tour!");
            return;
        }

        cart.push({ ...tour, quantity });
    }

    // Lưu lại giỏ hàng vào localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log("Dữ liệu giỏ hàng sau khi thêm:", cart);
    alert('Đã thêm vào giỏ hàng!');
    updateCartCount();
    window.location.href = "Booking.html";
}

// Hàm cập nhật số lượng trên icon giỏ hàng
function updateCartCount() {
const cart = JSON.parse(localStorage.getItem('cart')) || [];
const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
document.getElementById('cart-count').textContent = totalItems;
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
        // Xóa trạng thái đăng nhập
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("username");

        // Hiển thị thông báo
        alert("Bạn đã đăng xuất!");

        // Chuyển hướng về trang chủ
        window.location.href = "index.html";
    });
} else {
    userInfoContainer.innerHTML = `
        <a href="Login.html" class="login-btn">Đăng nhập</a>
        <a href="Register.html" class="register-btn">Đăng ký</a>
    `;

    // Ẩn nút giỏ hàng
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

// Gọi các hàm khi trang được tải
window.onload = function () {
onloadTourDetails();
updateCartCount();
};

