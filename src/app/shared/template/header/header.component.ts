import { Component, Input } from "@angular/core";

@Component({
    selector: 'ic-header',
    template: `
        <header class="header header--default">
            <h1 class="header__title header__title--ball">{{ title }}</h1>
        </header>
    `
})
export class HeaderComponent {
    @Input() title: string;
}