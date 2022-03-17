import React, { useState, useEffect } from 'react'

export default function CountDownBox(props) {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    useEffect(() => {
        console.log('useEffect')
    }, [count])

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    console.log('re-render')
    return (
        <div style={{
            width: 200,
            height: 200,
            fontSize: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: props.color
        }}>
            <button onClick={decrement}>-</button>
            {count}
            <button onClick={increment}>+</button>
            <button onClick={() => setCount2(count2 + 1)}>Count 2</button>
        </div>
    )
}

/**
 * Props
 * 
 * - Giá trị từ component cha truyền vào component con
 * - không thể thay đổi trong component con
 * - Tạo sự đa dạng cho các component, bằng cách thay đổi các prop truyền vào các component đó
 */


/**
 * State
 * - Giá trị được tạo trong chính component đó
 * - Có thể thay đổi trong component, sử dụng hàm setState tương ứng để thay đổi state
 * - Khi hàm setState được gọi, component sẽ được re-render lại, và state sẽ mang giá trị mới
 */

/**
 * useEffect
 * 
 * callback trong useEffect luôn luôn được thực thi lần đầu tiên khi vào component
 * Khi component re-render lại, useEffect sẽ quyết định chạy lại callback hay không tùy thuộc vào 
 * sự thay đổi của dependencyList
 * dependencyList có thể là 1 danh sách các item hoặc là 1 array rỗng (không phụ thuộc biến nào)
 */