import { Component, Input, ViewChild} from '@angular/core';
import { ChartData, ChartEvent, ChartType, } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input( 'title' ) title: string = '';
  @Input( 'label' ) doughnutChartLabels: string[] = [ 'Label1', 'Label2', 'Label3' ];
  @Input( 'ddata' ) doughnutData = [ 350, 450, 100 ];
  
  @ViewChild( 'doughnutChartLabels' ) doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: this.doughnutData,
        backgroundColor: ['#79aef4','#9a88ef','#89eca3'],
        hoverBackgroundColor: ['#398bf7','#745af2','#45ec71'],
        hoverBorderColor:['#eee','#eee','#eee'] },
    ]
  }
    
  public doughnutChartType: ChartType = 'doughnut';

}
