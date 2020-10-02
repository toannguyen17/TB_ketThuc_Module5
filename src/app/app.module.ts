import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule }  from './app-routing.module';
import { AppComponent }      from './app.component';
import { EditComponent }     from './edit/edit.component';
import { DeleteComponent }   from './delete/delete.component';
import { CreateComponent }   from './create/create.component';
import { DetailComponent }   from './detail/detail.component';
import { ListComponent }     from './list/list.component';
import {HttpClientModule}    from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    DeleteComponent,
    CreateComponent,
    DetailComponent,
    ListComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
