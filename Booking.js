const tours = [
    {
        id: 1,
        img: "IMG_Booking/tour1.jpg",
        name: "Tour Đại Nội",
        desc: "Khám phá Hoàng Thành Huế cổ kính với hướng dẫn viên.",
        duration: "1 ngày",
        price: "1.200.000 VND",
        rating: 4.5,
        reviews: 100,
        reviewer: "Nguyễn Gia A",
        reviewDate: "15/02/2025",
        reviewContent: "Tuyệt cà là vời!!!"
    },
    {
        id: 2,
        img: "IMG_Booking/tour2.jpg",
        name: "Tour Sông Hương",
        desc: "Thả hồn trên thuyền rồng và nghe ca Huế trên sông Hương.",
        duration: "Nửa ngày",
        price: "800.000 VND",
        rating: 4.5,
        reviews: 100,
        reviewer: "Nguyễn Gia A",
        reviewDate: "15/02/2025",
        reviewContent: "Tuyệt cà là vời!!!"
    },
    {
        id: 3,
        img: "IMG_Booking/tour3.jpg",
        name: "Tour Lăng Tẩm",
        desc: "Tham quan những lăng tẩm uy nghi của các vị vua triều Nguyễn.",
        duration: "1 ngày",
        price: "1.000.000 VND",
        rating: 4.5,
        reviews: 100,
        reviewer: "Nguyễn Gia A",
        reviewDate: "15/02/2025",
        reviewContent: "Tuyệt cà là vời!!!"
    },
    {
        id: 4,
        img: "IMG_Booking/tour4.jpg",
        name: "Tour chợ Đông Ba",
        desc: "Thưởng thức những món ăn, đặc sản độc đáo của Huế.",
        duration: "4 giờ",
        price: " 600.000 VND",
        rating: 4.5,
        reviews: 100,
        reviewer: "Nguyễn Gia A",
        reviewDate: "15/02/2025",
        reviewContent: "Tuyệt cà là vời!!!"
    },
    {
        id: 5,
        img: "IMG_Booking/tour5.jpg",
        name: "Tour Biển Lăng Cô",
        desc: "Thư giãn trên bãi biển trong xanh và tận hưởng thiên nhiên.",
        duration: "2 ngày 1 đêm",
        price: "2.500.000 VND",
        rating: 4.5,
        reviews: 100,
        reviewer: "Nguyễn Gia A",
        reviewDate: "15/02/2025",
        reviewContent: "Tuyệt cà là vời!!!"
    },
    {
        id: 6,
        img: "IMG_Booking/tour6.jpg",
        name: "Tour Chùa Thiên Mụ",
        desc: "Viếng thăm ngôi chùa cổ linh thiêng bên dòng sông Hương.",
        duration: "Nửa ngày",
        price: "700.000 VND",
        rating: 4.5,
        reviews: 100,
        reviewer: "Nguyễn Gia A",
        reviewDate: "15/02/2025",
        reviewContent: "Tuyệt cà là vời!!!"
    },
    {
        id: 7,
        img: "IMG_Booking/tour7.jpg",
        name: "Tour Phố Cổ Huế",
        desc: "Khám phá những con phố cổ với các công trình kiến trúc cổ điển.",
        duration: "1 ngày",
        price: "1.500.000 VND",
        rating: 4.5,
        reviews: 100,
        reviewer: "Nguyễn Gia A",
        reviewDate: "15/02/2025",
        reviewContent: "Tuyệt cà là vời!!!"
    },
    {
        id: 8,
        img: "IMG_Booking/tour8.jpg",
        name: "Tour Đầm Lập An",
        desc: "KKhám phá vẻ đẹp tự nhiên của đầm nước và hải sản tươi sống.",
        duration: "1 ngày",
        price: " 1.300.000 VND",
        rating: 4.5,
        reviews: 100,
        reviewer: "Nguyễn Gia A",
        reviewDate: "15/02/2025",
        reviewContent: "Tuyệt cà là vời!!!"
    },
    {
        id: 9,
        img: "IMG_Booking/tour9.jpg",
        name: "Tour Làng Nghề Huế",
        desc: "Khám phá các làng nghề truyền thống, nơi sản xuất những sản phẩm thủ công tinh xảo.",
        duration: "1 ngày",
        price: "1.000.000 VND",
        rating: 4.5,
        reviews: 100,
        reviewer: "Nguyễn Gia A",
        reviewDate: "15/02/2025",
        reviewContent: "Tuyệt cà là vời!!!"
    },
    {
        id: 10,
        img: "IMG_Booking/tour10.jpg",
        name: "Tour Lăng Gia Long",
        desc: "Tham quan lăng mộ của vị vua đầu tiên của triều Nguyễn.",
        duration: "1 ngày",
        price: "1.500.000 VND",
        rating: 4.5,
        reviews: 100,
        reviewer: "Nguyễn Gia A",
        reviewDate: "15/02/2025",
        reviewContent: "Tuyệt cà là vời!!!"
    },
    {
        id: 11,
        img: "IMG_Booking/tour11.jpg",
        name: "Tour Vườn Quốc Gia Bạch Mã",
        desc: "Khám phá vẻ đẹp hoang sơ của vườn quốc gia Bạch Mã với những ngọn thác hùng vĩ.",
        duration: "2 ngày 1 đêm",
        price: "2.200.000 VND",
        rating: 4.5,
        reviews: 100,
        reviewer: "Nguyễn Gia A",
        reviewDate: "15/02/2025",
        reviewContent: "Tuyệt cà là vời!!!"
    },
    {
        id: 12,
        img: "IMG_Booking/tour12.jpg",
        name: "Tour Lăng Tự Đức",
        desc: "Tham quan lăng mộ của vua Tự Đức, một trong những công trình nổi bật của triều Nguyễn.",
        duration: "1 ngày",
        price: "1.500.000 VND",
        rating: 4.5,
        reviews: 100,
        reviewer: "Nguyễn Gia A",
        reviewDate: "15/02/2025",
        reviewContent: "Tuyệt cà là vời!!!"
    },
    {
        id: 13,
        img: "IMG_Booking/tour13.jpg",
        name: "Tour Phá Tam Giang",
        desc: "Khám phá đầm phá lớn nhất miền Trung với hệ sinh thái phong phú.",
        duration: "1 ngày",
        price: "1.300.000 VND",
        rating: 4.5,
        reviews: 100,
        reviewer: "Nguyễn Gia A",
        reviewDate: "15/02/2025",
        reviewContent: "Tuyệt cà là vời!!!"
    },
    {
        id: 14,
        img: "IMG_Booking/tour14.jpg",
        name: "Tour Đồi Vọng Cảnh",
        desc: "Ngắm toàn cảnh sông Hương và thành phố Huế từ đồi Vọng Cảnh, nơi lý tưởng để chụp ảnh và thư giãn.",
        duration: "1 buổi sáng",
        price: "600.000 VND",
        rating: 4.5,
        reviews: 100,
        reviewer: "Nguyễn Gia A",
        reviewDate: "15/02/2025",
        reviewContent: "Tuyệt cà là vời!!!"
    },
    {
        id: 15,
        img: "IMG_Booking/tour15.jpg",
        name: "Tour Suối Voi",
        desc: "Thư giãn tại suối Voi với không gian xanh mát và nước suối trong lành.",
        duration: "1 ngày",
        price: "900.000 VND",
        rating: 4.5,
        reviews: 100,
        reviewer: "Nguyễn Gia A",
        reviewDate: "15/02/2025",
        reviewContent: "Tuyệt cà là vời!!!"
    },
];

// Hàm hiển thị danh sách tour
function onloadTours(tourList = tours) {
    let content = "";
    tourList.forEach(tour => {
        content += `
            <div class="tour" data-tour-id="${tour.id}">
                <div class="tour-img">
                    <img src="${tour.img}" alt="${tour.name}">
                </div>
                <div class="tour-info">
                    <h3>${tour.name}</h3>
                    <p>${tour.desc}</p>
                    <p class="details">Thời gian: ${tour.duration} | Giá: ${tour.price}</p>
                    <p class="rating">Đánh giá: ${tour.rating} ⭐ (${tour.reviews} đánh giá)</p>
                </div>
                <div class="tour-overlay">
                    <button onclick="viewDetails(${tour.id})">Xem chi tiết</button>
                </div>
            </div>
        `;
    });
    document.getElementById("tour-list").innerHTML = content;
}

// Hàm cập nhật số lượng giỏ hàng trên navbar
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalItems;
}

// Hàm xử lý khi nhấn nút Chi Tiết
function viewDetails(tourId) {
    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn")) || false;

    if (!isLoggedIn) {
        // Lưu tourId để chuyển hướng sau khi đăng nhập
        localStorage.setItem("redirectToTourId", tourId);
        alert("Bạn cần đăng nhập để xem chi tiết tour!");
        window.location.href = "Login.html";
    } else {
        window.location.href = `Details.html?tourId=${tourId}`;
    }
}

// Hàm lọc danh sách tour
function filterTours() {
    let filteredTours = [...tours];

    // Lọc theo giá
    const filterPrice = document.getElementById("filter-price").value;
    if (filterPrice === "low-to-high") {
        filteredTours.sort((a, b) => parseFloat(a.price.replace(/[^0-9]/g, "")) - parseFloat(b.price.replace(/[^0-9]/g, "")));
    } else if (filterPrice === "high-to-low") {
        filteredTours.sort((a, b) => parseFloat(b.price.replace(/[^0-9]/g, "")) - parseFloat(a.price.replace(/[^0-9]/g, "")));
    }

    // Lọc theo thời gian
    const filterDuration = document.getElementById("filter-duration").value;
    if (filterDuration === "half-day") {
        filteredTours = filteredTours.filter(tour => tour.duration.toLowerCase().includes("nửa ngày"));
    } else if (filterDuration === "one-day") {
        filteredTours = filteredTours.filter(tour => tour.duration.toLowerCase().includes("1 ngày"));
    } else if (filterDuration === "two-days") {
        filteredTours = filteredTours.filter(tour => tour.duration.toLowerCase().includes("2 ngày"));
    }

    // Hiển thị danh sách tour đã lọc
    onloadTours(filteredTours);
}

document.addEventListener("DOMContentLoaded", function () {
    onloadTours();

    document.getElementById("filter-price").addEventListener("change", filterTours);
    document.getElementById("filter-duration").addEventListener("change", filterTours);

    // Tìm kiếm tour
    const searchInput = document.querySelector("#search input");
    searchInput.addEventListener("input", function (event) {
        const searchText = event.target.value.toLowerCase();
        const filteredTours = tours.filter(tour => tour.name.toLowerCase().includes(searchText));
        onloadTours(filteredTours);
    });

    updateCartCount();
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