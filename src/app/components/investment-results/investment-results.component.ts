import { Component, Input, Output } from '@angular/core';
import {
  InvestmentData,
  InvestmentResult,
} from '../../../interfaces/Investment';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  @Input() results?: Array<InvestmentResult>;
}
