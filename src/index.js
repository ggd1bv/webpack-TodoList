import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();


todoList.todos.forEach(crearTodoHtml);
//es una funcion callback, es lo mismo que:
//todoList.todos.forEach( todo => crearTodoHtml( todo ) );



console.log('todos', todoList.todos );