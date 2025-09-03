import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  investment = {
    initialInvestment: '0',
    annualInvestment: '0',
    expectedReturn: '5',
    duration: '10',
  };

  onSubmit() {
    console.log(this.investment);
  }
}
