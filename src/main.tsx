import * as React from 'react'
import { render } from 'react-dom'
import s from './TodoStore'
import TodoList from './TodoList'

render(
    <TodoList />,
    document.getElementById('app') as Element
)
