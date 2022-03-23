import React from 'react'
import { generatePath, Link } from 'react-router-dom'
import { COURSE_DETAIL_PATH, COURSE_REGISTER_PATH } from '../constants/path'

export default function CourseCard({ thumbnail, title, short_description, teacher, slug, id }) {

    const detailPath = generatePath(COURSE_DETAIL_PATH, { slug, id })
    return (
        <div className="col-md-4 course" >
            <div className="wrap">
                <Link className="cover" to={detailPath}>
                    <img src={thumbnail.link} alt="" />
                </Link>
                <div className="info">
                    <Link className="name" to={detailPath}>
                        {title}
                    </Link>
                    <p className="des">{short_description}</p>
                </div>
                <div className="bottom">
                    <div className="teacher">
                        <div className="avatar">
                            <img src={teacher.avatar.link} alt="" />
                        </div>
                        <div className="name">{teacher.title}</div>
                    </div>
                    <Link to={generatePath(COURSE_REGISTER_PATH, { id })} className="register-btn">Đăng Ký</Link>
                </div>
            </div>
        </div>
    )
}
