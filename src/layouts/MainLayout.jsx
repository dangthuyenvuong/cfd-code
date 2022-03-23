import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'


export default function MainLayout({ children, user }) {
    return (
        <>
            <Header user={user}/>
            <Sidebar />
            <Outlet />
            <Footer />
        </>
    )
}
