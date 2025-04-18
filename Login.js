// Xử lý đăng nhập
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Lấy thông tin từ form
            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();
            const rememberMe = document.getElementById("remember-me").checked;

            let isValid = true;

            // Kiểm tra tên đăng nhập
            const usernameMessage = document.querySelector(".form-message-username");
            if (username.length === 0) {
                usernameMessage.innerHTML = "Vui lòng nhập tên đăng nhập.";
                isValid = false;
            } else {
                usernameMessage.innerHTML = "";
            }

            // Kiểm tra mật khẩu
            const passwordMessage = document.querySelector(".form-message-password");
            if (password.length === 0) {
                passwordMessage.innerHTML = "Vui lòng nhập mật khẩu.";
                isValid = false;
            } else {
                passwordMessage.innerHTML = "";
            }

            // Nếu không hợp lệ, dừng xử lý
            if (!isValid) {
                return;
            }

            // Lấy danh sách tài khoản từ localStorage
            const accounts = JSON.parse(localStorage.getItem("accounts")) || [];

            // Kiểm tra thông tin đăng nhập
            const user = accounts.find(account => account.username === username && account.password === password);

            if (user) {
                // Nếu thông tin hợp lệ, lưu trạng thái đăng nhập
                localStorage.setItem("isLoggedIn", true);
                localStorage.setItem("username", username);

                if (rememberMe) {
                    localStorage.setItem("rememberMe", true);
                } else {
                    localStorage.removeItem("rememberMe");
                }

                alert("Đăng nhập thành công!");

                // Kiểm tra nếu có tourId cần chuyển hướng
                const redirectToTourId = localStorage.getItem("redirectToTourId");
                if (redirectToTourId) {
                    localStorage.removeItem("redirectToTourId"); // Xóa giá trị sau khi sử dụng
                    window.location.href = `Details.html?tourId=${redirectToTourId}`;
                } else {
                    window.location.href = "index.html"; // Chuyển về trang chủ nếu không có tourId
                }
            } else {
                // Nếu thông tin không hợp lệ
                usernameMessage.innerHTML = "";
                passwordMessage.innerHTML = "Tên đăng nhập hoặc mật khẩu không đúng!";
            }
        });

        // Xóa thông báo lỗi khi người dùng sửa tên đăng nhập
        document.getElementById("username").addEventListener("input", function () {
            document.querySelector(".form-message-username").innerHTML = "";
        });

        // Xóa thông báo lỗi khi người dùng sửa mật khẩu
        document.getElementById("password").addEventListener("input", function () {
            document.querySelector(".form-message-password").innerHTML = "";
        });
    } else {
        console.error("Không tìm thấy form đăng nhập!");
    }
});

// Kiểm tra trạng thái đăng nhập
function checkLoginStatus() {
    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn")) || false;

    if (isLoggedIn) {
        const username = localStorage.getItem("username");
        alert(`Bạn đã đăng nhập với tài khoản: ${username}`);
        window.location.href = "index.html"; // Chuyển về trang chủ nếu đã đăng nhập
    }
}

// Gọi hàm kiểm tra trạng thái đăng nhập khi tải trang
checkLoginStatus();

// Xử lý đăng xuất
function logout() {
    localStorage.removeItem("isLoggedIn"); // Xóa trạng thái đăng nhập
    localStorage.removeItem("username"); // Xóa thông tin người dùng (nếu cần)
    alert("Bạn đã đăng xuất!");
    window.location.href = "Login.html"; // Chuyển về trang đăng nhập
}