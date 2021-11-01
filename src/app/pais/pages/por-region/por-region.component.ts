import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
  button {
    margin-right:5px;
  }
  `
  ]
})
export class PorRegionComponent {
  
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  hayError: boolean = false;

  constructor( private paisService: PaisService )  { }

  getClaseCSS( region: string ): string{
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

  // Método
  activarRegion ( region: string ){
    this.regionActiva = region;
    this.hayError = false;

    // TODO: Hacer el llamado al servicio
    this.paisService.buscarRegion( region )
        .subscribe((result) =>{
          this.paises = result;
          // console.log(result);
          
          
        }, (err) =>{
          this.hayError = true;
          this.paises = [];
        });

  }

}
