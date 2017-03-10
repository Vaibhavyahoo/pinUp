import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpService } from './services/http.service'
import { AppComponent } from './app.component';
import { AddlinkComponent } from './addlink/addlink.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '@angular/material';
import { FooterHoverComponent } from './footer-hover/footer-hover.component';
@NgModule({
  declarations: [
    AppComponent,
    AddlinkComponent,
    FooterComponent,
    FooterHoverComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, MaterialModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
