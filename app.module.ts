import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { PrivateModule } from "./private/private.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PrivateModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
