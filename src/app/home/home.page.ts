import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { BranchsOperatorComponent } from './components/branchs-operator/branchs-operator.component';
import { HeaderOperatorComponent } from '../shared/components/headers/headers-operator/headers-operator.component';
import { TransactionOperatorComponent } from './components/transaction-operator/transaction-operator.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonContent, 
    BranchsOperatorComponent,
    HeaderOperatorComponent,
    TransactionOperatorComponent
  ],
})
export class HomePage {
  constructor() {}
}
