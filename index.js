// document.addEventListener("DOMContentLoaded", function () {
//     // Nút lên đầu trang
//     let backToTop = document.createElement("button");
//     backToTop.innerText = "▲";
//     backToTop.id = "backToTop";
//     backToTop.style.position = "fixed";
//     backToTop.style.bottom = "20px";
//     backToTop.style.right = "20px";
//     backToTop.style.padding = "10px";
//     backToTop.style.background = "#800000";
//     backToTop.style.color = "white";
//     backToTop.style.border = "none";
//     backToTop.style.borderRadius = "5px";
//     backToTop.style.cursor = "pointer";
//     backToTop.style.display = "none";
//     document.body.appendChild(backToTop);

//     window.addEventListener("scroll", function () {
//         if (window.scrollY > 300) {
//             backToTop.style.display = "block";
//         } else {
//             backToTop.style.display = "none";
//         }
//     });

//     backToTop.addEventListener("click", function () {
//         window.scrollTo({ top: 0, behavior: "smooth" });
//     });

//     // Hiệu ứng hover và click vào tour
//     // let tours = document.querySelectorAll(".tour");
//     // tours.forEach(tour => {
//     //     tour.addEventListener("mouseenter", function () {
//     //         tour.style.transform = "scale(1.05)";
//     //         tour.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
//     //     });

//     //     tour.addEventListener("mouseleave", function () {
//     //         tour.style.transform = "scale(1)";
//     //         tour.style.boxShadow = "none";
//     //     });

//     //     tour.addEventListener("click", function () {
//     //         let desc = tour.querySelector("p");
//     //         if (desc.style.display === "none" || !desc.style.display) {
//     //             desc.style.display = "block";
//     //         } else {
//     //             desc.style.display = "none";
//     //         }
//     //     });
//     // });
// });

//places
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

//history
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

//cuisine
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

//eventsevents
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







