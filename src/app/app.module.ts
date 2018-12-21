import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AwesomeComponent} from './awesome/awesome.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CreateAwesomeComponent } from './create-awesome/create-awesome.component';
import { EditAwesomeComponent } from './edit-awesome/edit-awesome.component';
import { DetailAwesomeComponent } from './detail-awesome/detail-awesome.component';

@NgModule({
    declarations: [
        AppComponent,
        AwesomeComponent,
        CreateAwesomeComponent,
        EditAwesomeComponent,
        DetailAwesomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
