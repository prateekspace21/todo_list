import { Component,Input } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() todo:Todo;
  title = 'Todo_list';
  constructor(){
  setTimeout(() => {
    this.title="Prateek";
  }, 2000);
}
}
