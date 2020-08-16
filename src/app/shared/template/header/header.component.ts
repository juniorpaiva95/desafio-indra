import { Component, Input } from "@angular/core";

@Component({
    selector: 'ic-header',
    template: `
        <header class="header header--default">
            <a [routerLink]="['/']"><h1 class="header__title header__title--ball">{{ title }}</h1></a>
        </header>
    `
})
export class HeaderComponent {
    @Input() title: string;
}