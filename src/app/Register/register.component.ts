import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  ngOnChanges() {
    console.log('ngOnChanges - data-bound properties changed');
  }

  ngOnInit() {
    console.log('ngOnInit - component initialized');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy - component is about to be destroyed');
  }
}
