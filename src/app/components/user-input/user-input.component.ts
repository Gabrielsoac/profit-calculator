import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../../services/investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  constructor(private investmentService: InvestmentService) {}

  investment = {
    initialInvestment: '0',
    annualInvestment: '0',
    expectedReturn: '5',
    duration: '10',
  };

  @Output() resultsEventEmmiter = new EventEmitter();

  onSubmit() {
    const result = this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.investment.initialInvestment,
      annualInvestment: +this.investment.annualInvestment,
      expectedReturn: +this.investment.expectedReturn,
      duration: +this.investment.duration,
    });

    this.resultsEventEmmiter.emit(result);
  }
}
