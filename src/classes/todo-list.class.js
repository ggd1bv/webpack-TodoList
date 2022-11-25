import { Todo } from "./todo.class";

export class TodoList {

    constructor() {

        //this.todos = [];
        this.cargarLocalStorage();

    }

    // Métodos generales

    nuevoTodo( todo ) {
        this.todos.push( todo );
        this.guardarLocalStorage();
    }

    eliminarTodo( id ) {

        this.todos = this.todos.filter( todo => todo.id != id )
        this.guardarLocalStorage();

    }

    marcarCompletado( id ) {

        for ( const todo of this.todos ) {
            
            if( todo.id == id ) {

                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }

        }

    }

    eliminarCompletados() {

        this.todos = this.todos.filter( todo => !todo.completado )
        this.guardarLocalStorage();

    }


    eliminarCompletados() {

        this.todos = this.todos.filter( todo => !todo.completado )

    }

    guardarLocalStorage() {

        localStorage.setItem('todo', JSON.stringify( this.todos ) );
        //JSON.stringify convierte el objeto en un JSON de Strings.
    }

    cargarLocalStorage(){
    //JSON.parse reconvierte el objeto original
        this.todos = (localStorage.getItem('todo')) 
        ? JSON.parse(localStorage.getItem('todo'))
        : [] ;
        
        this.todos = this.todos.map( Todo.fromJson );
        // callback, es lo mismo que:
        //this.todos = this.todos.map( obj => Todo.fromJson( obj ));

    }

}

