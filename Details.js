const tourData = {
    title: "Tour Đại Nội - Hoàng Thành Huế",
    img: "IMG_Booking/tour1.jpg",
    duration: "1 ngày",
    price: "1.200.000 VND/người",
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
};

function onloadTourDetails() {
    let tourHTML = `
        <h1>${tourData.title}</h1>
        <img src="${tourData.img}" alt="${tourData.title}">
        <p><strong>Thời gian:</strong> ${tourData.duration}</p>
        <p><strong>Giá:</strong> ${tourData.price}</p>
        <p><strong>Mô tả:</strong> ${tourData.description}</p>
        <h2>Chương Trình Tour</h2>
        <ul>
            ${tourData.schedule.map(item => `<li>${item}</li>`).join("")}
        </ul>
        <a href="${tourData.bookingLink}"><button>Đặt Tour Ngay</button></a>
    `;

    document.querySelector(".tour-detail").innerHTML = tourHTML;
}

