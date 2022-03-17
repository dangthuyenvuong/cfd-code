import React, { useState } from 'react'
import styles from './style.module.scss'
import classNames from 'classnames'

export default function ToDoList({ toDoList, handleAdd, handleComple }) {

    const [value, setValue] = useState()

    const _handleAdd = () => {
        handleAdd(value)
        setValue('')
    }

    const _onKeyUp = (ev) => {
        if(ev.key === 'Enter'){
            _handleAdd()
        }
    }

    return (
        <div className={styles.ToDoList}>
            <div className="input-group">
                <input onKeyUp={_onKeyUp} value={value} onChange={ev => setValue(ev.target.value)} type="text" placeholder='Nhập công việc...' />
                <button onClick={_handleAdd} disabled={!value}>Thêm</button>
            </div>
            <h1 className="title">Dashboard</h1>
            <div className="card-list">
                <div className="card">
                    <h2>Việc cần làm</h2>
                    {
                        toDoList.filter(e => !e.isCompleted).map(e => <ToDoItem key={e.id} {...e} handleComple={() => handleComple(e)} />)
                    }
                </div>
                <div className="card">
                    <h2>Việc đã làm</h2>
                    {
                        toDoList.filter(e => e.isCompleted).map(e => <ToDoItem key={e.id} {...e} handleComple={() => handleComple(e)}/>)
                    }
                </div>
            </div>
        </div>
    )
}


function ToDoItem({ name, isCompleted, handleComple }) {
    return (
        <div className={classNames('to-do-item', { isCompleted })}>
            <div className="name">{name}</div>
            <button onClick={ev => handleComple()}>✓</button>
        </div>
    )
}