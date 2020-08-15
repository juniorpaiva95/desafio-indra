import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokeService } from 'src/app/shared/services/poke-service.service';
import { Pokemon } from 'src/app/shared/interfaces/pokemon.interface';
import { Chart, ChartOptions, ChartData, ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { finalize, delay } from 'rxjs/operators';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.scss']
})
export class PokeDetailComponent implements OnInit, AfterViewInit {

  id: string;
  pokemon: Pokemon;
  public radarChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    scale: {
      ticks: {
        beginAtZero: true
      }
    },
    tooltips: {
      enabled:true,
      callbacks:{
        label: function(tooltipItem, data) {
          var datasetLabel = data.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': ' + data.labels[tooltipItem.index] +': '+ tooltipItem.value;
        }
      },
    }
  };
  public radarChartLabels: Label[] = [];
  public radarChartData: ChartDataSets[] = [];
  public radarChartType: ChartType = 'radar';
  chartLoaded: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private pokeService: PokeService, private router: Router, private elementRef: ElementRef) { }
  ngOnInit() {}

  ngAfterViewInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.pokeService.getPokemonByNameOrId(this.id)
    .pipe(
      finalize(() => this.chartLoaded = true)
    )
    .subscribe((pokemon) => { 
      this.pokemon = pokemon;
      let data = pokemon.stats.map((stat) => {
        this.radarChartLabels.push(stat.stat.name);
        return stat.base_stat;
      });
      this.radarChartData.push({ data: data, label: pokemon.name.toUpperCase() });
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }

}
