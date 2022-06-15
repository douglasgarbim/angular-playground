import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponentModule } from './footer/footer.module';
import { HeaderComponentModule } from './header/header.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HeaderComponentModule, FooterComponentModule],
  exports: [HeaderComponentModule, FooterComponentModule],
})
export class CommonComponentsModule {}
