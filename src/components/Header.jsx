import React from 'react'

export default function Header() {

    const toggleMenu = () => {
        document.body.classList.toggle('menu-is-show')
    }


    return (
        <header id="header">
            <div className="wrap">
                <div className="menu-hambeger" onClick={toggleMenu}>
                    <div className="button">
                        <span />
                        <span />
                        <span />
                    </div>
                    <span className="text">menu</span>
                </div>
                <a href="#" className="logo">
                    <img src="img/logo.svg" alt="" />
                    <h1>CFD</h1>
                </a>
                <div className="right">
                    <div className="have-login">
                        <div className="account">
                            <a href="#" className="info">
                                <div className="name">Đặng Thuyền Vương</div>
                                <div className="avatar">
                                    <img src="https://www.cfdtraining.vn/uploads/vuong-cfd.jpg" alt="" />
                                </div>
                            </a>
                        </div>
                        <div className="hamberger">
                        </div>
                        <div className="sub">
                            <a href="#">Khóa học của tôi</a>
                            <a href="#">Thông tin tài khoản</a>
                            <a href="#">Đăng xuất</a>
                        </div>
                    </div>
                    {/* <div class="not-login bg-none">
                    <a href="#" class="btn-register">Đăng nhập</a>
                    <a href="login.html" class="btn main btn-open-login">Đăng ký</a>
                </div> */}
                </div>
            </div>
        </header>
    )
}
