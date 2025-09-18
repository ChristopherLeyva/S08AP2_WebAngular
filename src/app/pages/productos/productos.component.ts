import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})
export class ProductosComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Productos | Mi Negocio');
    this.meta.updateTag({ name: 'description', content: 'Explora el catálogo de productos de Mi Negocio.' });
    this.meta.updateTag({ property: 'og:title', content: 'Productos | Mi Negocio' });
    this.meta.updateTag({ property: 'og:description', content: 'Explora el catálogo de productos de Mi Negocio.' });
  }
}
