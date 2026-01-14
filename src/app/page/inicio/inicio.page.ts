import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router'; // Importante para la navegación

// Importamos TODOS los componentes visuales de Ionic que usaste
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButtons, 
  IonButton, 
  IonIcon, 
  IonText, 
  IonGrid,       
  IonRow,        
  IonCol,        
  IonCard,       
  IonCardHeader, 
  IonCardTitle,  
  IonCardContent 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  // Aquí "avisamos" al HTML qué etiquetas puede usar
  imports: [
    CommonModule, 
    FormsModule, 
    RouterLink,     
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonButtons, 
    IonButton, 
    IonIcon, 
    IonText,
    IonGrid,        
    IonRow,         
    IonCol,         
    IonCard,        
    IonCardHeader,  
    IonCardTitle,   
    IonCardContent  
  ]
})
export class InicioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}