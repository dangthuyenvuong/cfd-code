
import React, { useState } from 'react'
import styles from './style.module.scss'

export default function RegisterForm() {

    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})

    const onClick = (ev) => {
        ev.preventDefault()
        const errorsObj = {}

        if(!form.username) {
            errorsObj.username = 'Username không được bỏ trống'
        }

        if(!form.email) {
            errorsObj.email = 'email không được bỏ trống'
        } else if(!/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/.test(form.email)){
            errorsObj.email = 'Email không đúng định dạng'
        }

        if(!form.phone) {
            errorsObj.phone = 'phone không được bỏ trống'
        } else if(!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone)){
            errorsObj.phone = 'Số điện thoại không đúng định dạng'
        }

        if(!form.facebook) {
            errorsObj.facebook = 'facebook không được bỏ trống'
        }

        setErrors(errorsObj)
        if(Object.keys(errorsObj).length === 0){
            console.log('Thanh công')
            //  tien hanh goi api len BE
        }
    }
    return (
        <section className={styles['register-course']}>
            <h1 className="title">ĐĂNG KÝ</h1>
            <form action="">
                <label>
                    <p>Họ và tên<span>*</span></p>
                    <input onChange={ev => form.username = ev.target.value} type="text" placeholder="Họ và tên bạn" />
                    {
                        errors.username && <p className='error-text'>{errors.username}</p>
                    }
                </label>
                <label>
                    <p>Số điện thoại<span>*</span></p>
                    <input onChange={ev => form.phone = ev.target.value} type="text" placeholder="Số điện thoại" />
                    {
                        errors.phone && <p className='error-text'>{errors.phone}</p>
                    }
                </label>
                <label>
                    <p>Email<span>*</span></p>
                    <input onChange={ev => form.email = ev.target.value} type="text" placeholder="Email của bạn" />
                    {
                        errors.email && <p className='error-text'>{errors.email}</p>
                    }
                </label>
                <label>
                    <p>URL Facebook<span>*</span></p>
                    <input onChange={ev => form.facebook = ev.target.value} type="text" placeholder="https://facebook.com" />
                    {
                        errors.facebook && <p className='error-text'>{errors.facebook}</p>
                    }
                </label>
                <label>
                    <p>Ý kiến cá nhân</p>
                    <textarea onChange={ev => form.note = ev.target.value} type="text" placeholder="Mong muốn cá nhân và lịch bạn có thể học." />
                </label>
                <button onClick={onClick} className="btn main rect">ĐĂNG KÝ</button>
            </form>
        </section>
    )
}
