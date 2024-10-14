import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MetricBlockMobModule } from '../../metric-blocks/metric-block-mob/metric-block-mob.module';
import { MetricBlockModule } from '../../metric-blocks/metric-block/metric-block.module';
import { TradePairMetricsComponent } from './trade-pair-metrics.component';

@NgModule({
  declarations: [TradePairMetricsComponent],
  imports: [CommonModule, MetricBlockModule, MetricBlockMobModule],
  exports: [TradePairMetricsComponent],
  providers: [],
})
export class TradePairMetricsModule {}
