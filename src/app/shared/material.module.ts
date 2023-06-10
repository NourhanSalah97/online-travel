import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card';
import {MatSliderModule} from '@angular/material/slider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';





@NgModule({
    declarations: [],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatSliderModule,
        MatExpansionModule,
        MatIconModule,
        MatCheckboxModule
        
    ] 
})
export class MaterialModule { }