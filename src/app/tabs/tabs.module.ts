import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { NgxEchartsModule } from 'ngx-echarts';
import { SpinnerComponent } from '../tab1/spinner/spinner.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NgxEchartsModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
