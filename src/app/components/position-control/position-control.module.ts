import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PositionControlComponent } from 'app/components/position-control/position-control.component';
import { ButtonConnectMainModule } from '../buttons/button-connect-main/button-connect-main.module';
import { ButtonPartModule } from '../buttons/button-part/button-part.module';
import { ButtonPositionComponent } from '../buttons/button-position/button-position.component';
import { InputModule } from '../input/input.module';
import { ErrorMessageModule } from '../messages/error-message/error-message.module';
import { PositionMetricsModule } from './position-metrics/position-metrics.module';
import { RangeModule } from './range/range.module';
import { SwitchPositionModule } from './switch-position/switch-position.module';
import { SwitchPriceTypeModule } from './switch-price-type/switch-price-type.module';

@NgModule({
  declarations: [PositionControlComponent, ButtonPositionComponent],
  imports: [
    CommonModule,
    FormsModule,
    SwitchPositionModule,
    SwitchPriceTypeModule,
    InputModule,
    ButtonPartModule,
    ButtonConnectMainModule,
    PositionMetricsModule,
    ErrorMessageModule,
    RangeModule,
  ],
  exports: [PositionControlComponent],
})
export class PositionControlModule {}
