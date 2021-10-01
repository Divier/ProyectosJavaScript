import './styles.css';

import { TodoList } from './classes'; // con solo colocar ./classes va a buscar el archivo index.js por defecto
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

//todoList.todos.forEach( elemento => crearTodoHtml(elemento) );
//el anterior codigo es equivalente al siguiente ya que se envia un unico parametro al metodo fromJson
todoList.todos.forEach( crearTodoHtml );

console.log( 'todos', todoList.todos );