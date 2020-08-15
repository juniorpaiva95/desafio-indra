import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  
  @Input() 
  pokemons: Array<any>;

  @Input()
  meta: any;

  @Output()
  showMore: EventEmitter<string> = new EventEmitter();

  btnTopShow: boolean = false;

  @HostListener('window:scroll')
  checkScroll() {
      
    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.debug('[scroll]', scrollPosition);
    
    if (scrollPosition >= 100) {
      this.btnTopShow = true;
    } else {
      this.btnTopShow = false;
    }
  }

  constructor() { }

  ngOnInit() { }

  /**
   * @description Emite um evento para o componente pai da próxima url a ser carregada.
   * @memberof PokeListComponent
   */
  handlerShowMore() {
    this.showMore.emit(this.meta.next);
  }

  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

}
