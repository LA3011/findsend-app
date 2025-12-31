import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonItem, IonLabel, IonList } from '@ionic/angular/standalone';
import { IonAvatar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoUsd, person } from 'ionicons/icons';

@Component({
  selector: 'app-transaction-operator',
  templateUrl: './transaction-operator.component.html',
  styleUrls: ['./transaction-operator.component.scss'],
  standalone: true,
  imports: [IonItem, IonLabel, IonList, IonAvatar],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TransactionOperatorComponent  implements OnInit {

  constructor() {
    addIcons({ person, logoUsd })
  }

  ngOnInit() {}

}
