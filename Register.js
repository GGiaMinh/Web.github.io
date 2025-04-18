document.addEventListener("DOMContentLoaded", function () {
    const signupButton = document.getElementById("signupButton");

    if (signupButton) {
        signupButton.addEventListener("click", (event) => {
            event.preventDefault();

            // Lấy giá trị từ các trường nhập liệu
            let fullNameUser = document.getElementById("fullname").value.trim();
            let usernameUser = document.getElementById("username").value.trim();
            let phoneUser = document.getElementById("phone").value.trim();
            let passwordUser = document.getElementById("password").value;
            let passwordConfirmation = document.getElementById("password_confirmation").value;
            let checkSignup = document.getElementById("checkbox-signup").checked;

            let isValid = true;

            // Kiểm tra tên đầy đủ
            if (fullNameUser.length === 0) {
                document.querySelector('.form-message-name').innerHTML = 'Vui lòng nhập họ và tên';
                isValid = false;
            } else if (fullNameUser.length < 3) {
                document.querySelector('.form-message-name').innerHTML = 'Họ và tên phải lớn hơn 3 kí tự';
                isValid = false;
            } else {
                document.querySelector('.form-message-name').innerHTML = '';
            }

            // Kiểm tra tên đăng nhập
            if (usernameUser.length === 0) {
                document.querySelector('.form-message-username').innerHTML = 'Vui lòng nhập tên đăng nhập';
                isValid = false;
            } else if (usernameUser.length < 3) {
                document.querySelector('.form-message-username').innerHTML = 'Tên đăng nhập phải lớn hơn 3 kí tự';
                isValid = false;
            } else {
                document.querySelector('.form-message-username').innerHTML = '';
            }

            // Kiểm tra số điện thoại
            if (phoneUser.length === 0) {
                document.querySelector('.form-message-phone').innerHTML = 'Vui lòng nhập số điện thoại';
                isValid = false;
            } else if (!/^\d{10}$/.test(phoneUser)) {
                document.querySelector('.form-message-phone').innerHTML = 'Số điện thoại phải gồm 10 chữ số';
                isValid = false;
            } else {
                document.querySelector('.form-message-phone').innerHTML = '';
            }

            // Kiểm tra mật khẩu
            if (passwordUser.length === 0) {
                document.querySelector('.form-message-password').innerHTML = 'Vui lòng nhập mật khẩu';
                isValid = false;
            } else if (passwordUser.length < 6) {
                document.querySelector('.form-message-password').innerHTML = 'Mật khẩu phải dài ít nhất 6 kí tự';
                isValid = false;
            } else {
                document.querySelector('.form-message-password').innerHTML = '';
            }

            // Kiểm tra xác nhận mật khẩu
            if (passwordConfirmation.length === 0) {
                document.querySelector('.form-message-password-confi').innerHTML = 'Vui lòng nhập lại mật khẩu';
                isValid = false;
            } else if (passwordConfirmation !== passwordUser) {
                document.querySelector('.form-message-password-confi').innerHTML = 'Mật khẩu không khớp';
                isValid = false;
            } else {
                document.querySelector('.form-message-password-confi').innerHTML = '';
            }

            // Kiểm tra checkbox
            if (!checkSignup) {
                document.querySelector('.form-message-checkbox').innerHTML = 'Vui lòng đồng ý với điều khoản';
                isValid = false;
            } else {
                document.querySelector('.form-message-checkbox').innerHTML = '';
            }

            // Nếu hợp lệ, tiếp tục xử lý đăng ký
            if (isValid) {
                let user = {
                    fullname: fullNameUser,
                    username: usernameUser,
                    phone: phoneUser,
                    password: passwordUser,
                    join: new Date(),
                };
                let accounts = JSON.parse(localStorage.getItem('accounts')) || [];
                let isUsernameExist = accounts.some(account => account.username === user.username);
                let isPhoneExist = accounts.some(account => account.phone === user.phone);

                if (isUsernameExist) {
                    document.querySelector('.form-message-username').innerHTML = 'Tên đăng nhập đã được sử dụng!';
                } else if (isPhoneExist) {
                    document.querySelector('.form-message-phone').innerHTML = 'Số điện thoại đã được đăng ký!';
                } else {
                    accounts.push(user);
                    localStorage.setItem('accounts', JSON.stringify(accounts));

                    alert("Tạo tài khoản thành công!");
                    // Chuyển hướng đến trang đăng nhập
                    window.location.href = "Login.html";
                }
            }
        });

        // Xóa thông báo lỗi khi người dùng sửa số điện thoại
        document.getElementById("phone").addEventListener("input", function () {
            document.querySelector('.form-message-phone').innerHTML = '';
        });

        // Xóa thông báo lỗi khi người dùng sửa tên đăng nhập
        document.getElementById("username").addEventListener("input", function () {
            document.querySelector('.form-message-username').innerHTML = '';
        });
    } else {
        console.error("Không tìm thấy nút Đăng Ký!");
    }
});