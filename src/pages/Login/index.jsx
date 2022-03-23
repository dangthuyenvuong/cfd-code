import React, { useContext, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import useQuery from '../../hooks/useQuery'
import { courseService } from '../../services/course'
import { currency } from '../../utils/number'

export default function Login() {

    const { handleLogin, user } = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState('')

    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})

    const onClick = async (ev) => {
        ev.preventDefault()
        const errorsObj = {}

        if (!form.username) {
            errorsObj.username = 'Tên đăng nhập không được bỏ trống'
        } else if (!/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/.test(form.username)) {
            errorsObj.username = 'Tên đăng nhập không đúng định dạng'
        }

        if (!form.password) {
            errorsObj.password = 'Mật khẩu không được bỏ trống'
        }


        setErrors(errorsObj)
        if (Object.keys(errorsObj).length === 0) {
            const message = await handleLogin(form)
            if(message){
                setErrorMessage(message)
            }
        }
    }

    if(user) return <Navigate to="/"/>

    return (
        <main className="register-course" id="main">
            <section>
                <div className="container">
                    <div className="wrap container">
                        <div className="main-title">ĐĂNG NHẬP</div>
                        {
                            errorMessage && <p className="error-message">{errorMessage}</p>
                        }
                        <form className="form">
                            <label>
                                <p>Tên đăng nhập<span>*</span></p>
                                <input onChange={ev => form.username = ev.target.value} type="text" />

                            </label>
                            {
                                errors.username && <p className='error-text'>{errors.username}</p>
                            }
                            <label>
                                <p>Mật khẩu<span>*</span></p>
                                <input onChange={ev => form.password = ev.target.value} type="password" />

                            </label>
                            {
                                errors.password && <p className='error-text'>{errors.password}</p>
                            }
                            <button onClick={onClick} className="btn main rect">Đăng nhập</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}
