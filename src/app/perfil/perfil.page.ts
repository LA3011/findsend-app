import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewChild } from '@angular/core';
import { IonChip, IonCard, IonCardContent, IonItem, IonLabel, IonAvatar, IonSearchbar, IonButton, IonContent, IonModal } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, ban, closeCircle, eyeOutline, people, peopleOutline, search, trashBin } from 'ionicons/icons';

@Component({
  selector: 'app-tab2',
  templateUrl: 'perfil.page.html',
  styleUrls: ['perfil.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [ IonChip, IonContent, IonSearchbar, IonCard, IonCardContent, IonItem, IonLabel, IonAvatar, IonAvatar, IonButton, IonContent, IonModal],
  

})
export class PerfilPage implements OnInit {

  @ViewChild('modal') modal!: IonModal;
  @ViewChild('modalAdd') modalAdd!: IonModal;

  selectedItem: any = null; 
  theme?:boolean;

  constructor() { 
    addIcons({ search, closeCircle, add, ban, trashBin, eyeOutline })
  }

  ngOnInit() { 
    addIcons({ people })
  }

  openModal(item: any) { 
    this.selectedItem = item; 
    this.modal.present(); 
  } 
  
  async canDismiss(data?: undefined, role?: string) { 
    return role !== 'gesture'; 
  }

}
