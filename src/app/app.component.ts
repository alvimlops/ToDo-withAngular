import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: any[] = []; //variavel no angular

  
  constructor() {
   this.todos.push('passear com o meu cachorro')
   this.todos.push('corta o cabelo')
   this.todos.push('ir ao supermercado')
    
  }
}
