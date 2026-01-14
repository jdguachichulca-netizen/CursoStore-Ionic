import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, 
  IonBackButton, IonGrid, IonRow, IonCol, IonCard, 
  IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, 
  IonButton, IonIcon, IonBadge 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonIcon, IonBadge]
})
export class ProductosPage implements OnInit {

  // Lista de servicios con imágenes reales
  servicios = [
    { 
      id: 1, 
      nombre: 'Desarrollo Web Pro', 
      precio: 450, 
      categoria: 'Desarrollo',
      descripcion: 'Sitio web responsive, moderno y autoadministrable.',
      imagen: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=500&q=80' 
    },
    { 
      id: 2, 
      nombre: 'Mantenimiento Cloud', 
      precio: 120, 
      categoria: 'Mensual',
      descripcion: 'Seguridad, backups y monitoreo 24/7 de tus servidores.',
      imagen: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&q=80'
    },
    { 
      id: 3, 
      nombre: 'Soporte Remoto', 
      precio: 50, 
      categoria: 'Por hora',
      descripcion: 'Asistencia técnica inmediata para tu equipo de trabajo.',
      imagen: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=500&q=80'
    },
    { 
      id: 4, 
      nombre: 'App Móvil Nativa', 
      precio: 1200, 
      categoria: 'Desarrollo',
      descripcion: 'Tu negocio en App Store y Google Play con alto rendimiento.',
      imagen: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=500&q=80'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}