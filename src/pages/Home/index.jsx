import React, { useEffect, useState } from 'react'
import Course from '../Course'
import Banner from './components/Banner'
import Special from './components/Special'
import Customer from './components/Customer'
import Gallery from './components/Gallery'
import CallToAction from './components/CallToAction'
import { courseService } from '../../services/course'
import { homeService } from '../../services/home'
import useQuery from '../../hooks/useQuery'

export default function Home() {

    // const [courses, setCourses] = useState()
    // useEffect(() => {
    //     courseService.getList()
    //     .then(res => {
    //         setCourses(res.data.data)
    //     })
    // }, [])

    const { data: courses } = useQuery(() => {
        return courseService.getList()
    }, [])


    return (
        <main className="homepage" id="main">
            <Banner />
            <Course courses={courses} />
            <Course />
            <Special />
            <Customer />
            <Gallery />
            <CallToAction />
        </main>
    )
}
