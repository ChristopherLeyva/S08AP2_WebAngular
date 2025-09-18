import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.scss'
})
export class NosotrosComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Nosotros | Mi Negocio');
    this.meta.updateTag({ name: 'description', content: 'Conoce la historia, misión y valores de Mi Negocio.' });
    this.meta.updateTag({ property: 'og:title', content: 'Nosotros | Mi Negocio' });
    this.meta.updateTag({ property: 'og:description', content: 'Conoce la historia, misión y valores de Mi Negocio.' });
  }
}
