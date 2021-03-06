import React from 'react'
import Course from '../Course'
import Payment from '../Payment'
import Info from './Info'
import Project from './Project'
import Coin from './Coin'

export default function Profile() {
    return (
        <main className="profile" id="main">
            <section>
                <div className="top-info">
                    <div className="avatar">
                        {/* <span class="text">H</span> */}
                        <img src="img/avatar-lg.png" alt="" />
                        <div className="camera" />
                    </div>
                    <div className="name">trần nghĩa</div>
                    <p className="des">Thành viên của team CFD1-OFFLINE</p>
                </div>
                <div className="container">
                    <div className="tab">
                        <div className="tab-title">
                            <a href="#" className="active">Thông tin tài khoản</a>
                            <a href="#">Khóa học của bạn</a>
                            <a href="#">Dự án đã làm</a>
                            <a href="#">Lịch sử thanh toán</a>
                            <a href="#">Quản lý COIN của tôi</a>
                        </div>
                        <div className="tab-content">
                            <Info />
                            <Course />
                            <Project />
                            <Payment />
                            <Coin />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
