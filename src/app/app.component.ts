import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'appointment-app';
  
  helloMessage = 'Hello World!';

  message1 = 'World';

  log(text: string): void {
    let message2 = 'Hello ' + text;
    console.log(message2); 
  }
  
}
