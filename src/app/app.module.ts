import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
//import { ScrollingModule } from "@angular/cdk/scrolling";
import { ScrollingModule } from "@angular/cdk-experimental/scrolling";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [],
  imports: [BrowserModule, ScrollingModule]
})
export class AppModule {}
