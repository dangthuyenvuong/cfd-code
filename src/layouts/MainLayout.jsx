import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'


export default function MainLayout({ children }) {
    return (
        <>
            <Header />
            <Sidebar />
            {children}
            <Footer />
        </>
    )
}
