import { Component, Output } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { InvestmentResultsComponent } from './components/investment-results/investment-results.component';
import { InvestmentData, InvestmentResult } from '../interfaces/Investment';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {
  results!: Array<InvestmentResult>;

  captureResults(results: Array<InvestmentResult>) {
    this.results = results;
  }

  exportResult() {
    return this.results;
  }
}
