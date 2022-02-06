import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = []; //variavel no angular
  public title: String = 'Minhas Tarefas';
  public form: FormGroup;
 


  
  constructor(private fb:FormBuilder) {
    this.form = this.fb.group({
      title: ['Insira sua tarefa', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    });

   this.todos.push(new Todo(1 , 'ler o livro', false));
   this.todos.push(new Todo(2, 'estudar java', false));
   this.todos.push(new Todo(3, 'ir correr', true)); 
  }

remove(todo:Todo){
  const index = this.todos.indexOf(todo);
  if (index !== -1){
    this.todos.splice(index, 1);
  }

}

markAsDone(todo: Todo){
  todo.done = true;

}


markAsUndone(todo: Todo){
  todo.done = false;

}


}
