import React, { useState, useEffect } from 'react'
import ToDoList from '../components/ToDoList'
const TODO_APP_KEY_STORAGE = 'TODO_APP'
export default function ToDoApp() {

    const [toDoList, setToDoList] = useState([])

    useEffect(() => {
        const toDoList = localStorage.getItem(TODO_APP_KEY_STORAGE)
        if (toDoList) {
            setToDoList(JSON.parse(toDoList))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(TODO_APP_KEY_STORAGE, JSON.stringify(toDoList))
    }, [toDoList])


    function handleAdd(value) {
        setToDoList([
            {
                id: Date.now() + '-' + Math.random(),
                name: value
            },
            ...toDoList
        ])
    }

    const handleComple = (task) => {
        task.isCompleted = true
        setToDoList([...toDoList])
    }


    return (
        <ToDoList toDoList={toDoList} handleAdd={handleAdd} handleComple={handleComple} />
    )
}
