import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  private setAllPokemons: any;
  public getAllPokemons: any;
  public isLoading: boolean = false;
  public apiError: boolean = false;

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
      this.setAllPokemons = res.results;
      this.getAllPokemons = this.setAllPokemons;
      this.isLoading = true;
      //console.log(this.setAllPokemons);
      },
      error => {
        this.apiError = true;
      }
    );
  }

  //funcionalidade que vai resgatar o valor escrito na barra de search e vai executar um evento
  public getsearch(value: string){
    //console.log(value);
    //filter é uma função própria do javaScript
    const filter = this.setAllPokemons.filter((res: any) => {
      /*o return abaixo faz uma verificação, ele verifica se o nome que foi escrito corresponde a algum
      nome da lista de pokemons, o toLowerCase vai fazer com que o valor escrito mesmo que seja com letras
      maiúsculas seja convertido para letras minúsculas, já que os nomes da api estão todos minúsculos*/
      return !res.name.indexOf(value.toLowerCase());
    });

    this.getAllPokemons = filter;
  }

}
