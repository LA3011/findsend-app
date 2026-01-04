import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewChild } from '@angular/core';
import { IonCard, IonCardContent, IonItem, IonLabel, IonAvatar, IonSearchbar } from '@ionic/angular/standalone';
import { IonButton, IonContent, IonModal } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { search } from 'ionicons/icons';

@Component({
  selector: 'app-list-operator',
  templateUrl: './list-operator.component.html',
  styleUrls: ['./list-operator.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [ IonSearchbar, IonCard, IonCardContent, IonItem, IonLabel, IonAvatar, IonAvatar, IonButton, IonContent, IonModal]

})
export class ListOperatorComponent  implements OnInit {

  @ViewChild('modal') modal!: IonModal;
  selectedItem: any = null; 

  constructor() { 
    addIcons({ search })
  }

  ngOnInit() {}

  
  openModal(item: any) { 
    this.selectedItem = item; 
    this.modal.present(); 
  } 
  
  async canDismiss(data?: undefined, role?: string) { 
    return role !== 'gesture'; 
  }

}
