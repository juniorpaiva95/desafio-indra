import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ICFooterComponent } from './template/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './template/header/header.component';

@NgModule({
    declarations: [
        ICFooterComponent,
        HeaderComponent,
        CardComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ICFooterComponent,
        HeaderComponent,
        CardComponent,
    ],
    providers: []
})
export class SharedModule {}