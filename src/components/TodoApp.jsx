import React,{useState,useEffect} from 'react'

function TodoApp() {
    const [value,setValue] = useState('')
    const [todos,setTodos] = useState([]);

    useEffect(() => {
        console.log('useEffect');
    },[todos])

    function addTodo() {
        setTodos(prevTodos => {
            return [...prevTodos,{id: todos.length,todoValue: value}];
        });
        setValue('');
    }

    return (
        <div>
            <h1>todo app</h1>
            <input value={value} onChange={e => setValue(e.target.value)}/>
            <button onClick={addTodo}>add task</button>
            <ul>
                {todos.map(todo => {
                    return <li key={todo.id}>{todo.todoValue}</li>
                })}
            </ul>
        </div>
    )
}

export default TodoApp;















// import React,{useState,useEffect} from 'react'

// function TodoApp() {
//     const [value,setValue] = useState('')
//     const [todos,setTodos] = useState([]);

//     useEffect(() => {
//         console.log('useEffect');
//     },[todos])

//     function addTodo() {
//         setTodos(prevTodos => {
//             return [...prevTodos,value];
//         });
//         setValue('');
//     }

//     return (
//         <div>
//             <h1>todo app</h1>
//             <input value={value} onChange={e => setValue(e.target.value)}/>
//             <button onClick={addTodo}>add task</button>
//             <ul>
//                 {todos.map(todo => {
//                     return <li>{todo}</li>
//                 })}
//             </ul>
//         </div>
//     )
// }

// export default TodoApp;