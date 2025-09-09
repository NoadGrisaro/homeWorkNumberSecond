import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'  
})
export class App {
  value:number=0
  positive: boolean = false; 
  negative: boolean = false;
  protected readonly title = 'hello there my friend';
  protected readonly user:User=new User("jesus",2025,0,"bet lehem");

  increase():void {
    this.value++;
  }
  decrease():void {
    this.value--;
  }
  reset():void{
    this.value=0;
  }

  
}
