import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PrivateRoutingModule } from "./private-routing.module";
import { LayoutComponent } from "./components/layout/layout.component";
import { MainpanelComponent } from "./components/mainpanel/mainpanel.component";
import { SidepanelComponent } from "./components/sidepanel/sidepanel.component";

@NgModule({
  declarations: [LayoutComponent, MainpanelComponent, SidepanelComponent],
  imports: [CommonModule, PrivateRoutingModule]
})
export class PrivateModule {}
