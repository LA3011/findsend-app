import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonAvatar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline, chevronForwardOutline, logoUsd } from 'ionicons/icons';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';
import { IonRippleEffect } from '@ionic/angular/standalone';

@Component({
  selector: 'app-branchs-operator',
  templateUrl: './branchs-operator.component.html',
  styleUrls: ['./branchs-operator.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [IonAvatar, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonRippleEffect]
})
export class BranchsOperatorComponent  implements OnInit {
  
  sucursales = [1, 2, 3, 4];
  currentIndex = 0;

  constructor() {
    addIcons({ logoUsd, chevronForwardOutline, chevronBackOutline })
  }

  ngOnInit() {}

  onScroll(carousel: HTMLElement) {
    const cardWidth = 240 + 12; // ancho + gap
    const scrollLeft = carousel.scrollLeft;

    this.currentIndex = Math.round(scrollLeft / cardWidth);
  }

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
