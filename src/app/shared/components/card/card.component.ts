import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  title: string | TemplateRef<any>;

  isTemplate(property): boolean {
    return this[property] instanceof TemplateRef;
  }

  constructor() { }

  ngOnInit() {
  }

}
