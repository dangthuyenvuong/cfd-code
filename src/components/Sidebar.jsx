import React from 'react'

export default function Sidebar() {

    const close = () => {
        document.body.classList.toggle('menu-is-show')
    }

    return (
        <>
            <nav className="nav">
                <ul>
                    <li className="li_login">
                        <a href="#">Đăng ký / Đăng nhập</a>
                    </li>
                    <li className="active">
                        <a href="#">Trang chủ</a>
                    </li>
                    <li>
                        <a href="#">CFD Team</a>
                    </li>
                    <li>
                        <a href="#">Khóa Học</a>
                    </li>
                    <li>
                        <a href="#">Dự Án</a>
                    </li>
                    <li>
                        <a href="#">Liên hệ</a>
                    </li>
                </ul>
            </nav>
            <div onClick={close} className="overlay_nav" />
        </>
    )
}
