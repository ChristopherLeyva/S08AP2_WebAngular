import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Inicio | Mi Negocio');
    this.meta.updateTag({ name: 'description', content: 'Bienvenido a Mi Negocio. Conoce nuestros productos y servicios destacados.' });
    this.meta.updateTag({ property: 'og:title', content: 'Inicio | Mi Negocio' });
    this.meta.updateTag({ property: 'og:description', content: 'Bienvenido a Mi Negocio. Conoce nuestros productos y servicios destacados.' });
  }
}
