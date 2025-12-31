import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonAvatar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline, chevronForwardOutline, logoUsd } from 'ionicons/icons';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';


@Component({
  selector: 'app-branchs-operator',
  templateUrl: './branchs-operator.component.html',
  styleUrls: ['./branchs-operator.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [IonAvatar, IonCard, IonCardContent, IonCardHeader, IonCardTitle]
})
export class BranchsOperatorComponent  implements OnInit {

  constructor() {
    addIcons({ logoUsd, chevronForwardOutline, chevronBackOutline })
  }

  ngOnInit() {}

  scrollLeft(carousel: HTMLElement) {
    carousel.scrollBy({
      left: -250,
      behavior: 'smooth'
    });
  }
  
  scrollRight(carousel: HTMLElement) {
    carousel.scrollBy({
      left: 250,
      behavior: 'smooth'
    });
  }
  

}
