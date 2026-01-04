import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonCard, IonRippleEffect, IonThumbnail, IonModal } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { search, swapVertical } from 'ionicons/icons';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [IonCard, IonThumbnail, IonRippleEffect, IonModal]
})
export class OrderPage  implements OnInit {
  
  @ViewChild('modal') modal!: IonModal;
  @ViewChild('modalIcons') modalIcons!: IonModal;
  @ViewChild('pageContainer', { read: ElementRef }) 
  
  pageContainer!: ElementRef;

  constructor() { 
    addIcons({ search, swapVertical })
  }

  openModalIcons(item: any) {
    this.selectedItem = item; 
    this.modalIcons.present(); 
  }
  
  selectedItem: any = null; 

  ngOnInit() {}

  openModal(item: any) { 
    this.selectedItem = item; 
    this.modal.present(); 
  } 
  
  async canDismiss(data?: undefined, role?: string) { 
    return role !== 'gesture'; 
  }

}