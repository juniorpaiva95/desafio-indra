import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ICFooterComponent } from './template/footer/footer.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
    declarations: [
        ICFooterComponent,
        CardComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ICFooterComponent,
        CardComponent,
    ],
    providers: []
})
export class SharedModule {}