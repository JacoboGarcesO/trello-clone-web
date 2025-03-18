import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  public items = [
    {
      title: 'Bandeja de entrada',
      description: 'Si lo tienes en mente, entonces colócalo en la bandeja de entrada. Registra tus tareas pendientes en cualquier lugar y momento.'
    },
    {
      title: 'Tableros',
      description: 'Tu lista de tareas pendientes puede ser larga, ¡pero manejable! Mantente al tanto de todo, desde las "tareas por hacer" hasta los "objetivo cumplido".'
    },
    {
      title: 'Planificador',
      description: 'Arrastra, suelta y termina. Mete las tareas más importantes en el calendario y dedica tiempo a lo que de verdad importa.'
    }
  ];
}
