// src/app/components/hero/hero.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  @Input() title: string = '';
  @Input() backgroundImage: string = '';
}
