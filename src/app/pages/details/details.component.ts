import { PokeApiService } from 'src/app/service/poke-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  // url inserida na variável para usar com o metodo apiGetPokemons
  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  public pokemon: any;
  public isLoading: boolean = false;
  public apiError: boolean = false;

  // função de rotas, ferramenta própria do Angular
  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService

    ) {
  }

  //ngOnInit é o local onde você insere todos os métodos e funções que você deseja que inicie assim que a página abrir
  ngOnInit(): void {


    this.getPokemon;
  }

  get getPokemon(){
    //puxa o id dos pokemons da página principal
    const id = this.activatedRoute.snapshot.params['id'];
    //puxa as informações da api a partir de url's
    const pokemon = this.pokeApiService.apiGetPokemons(`${this.urlPokemon}/${id}`);
    const name = this.pokeApiService.apiGetPokemons(`${this.urlName}/${id}`);

    /* forkJoin é uma função da biblioteca rxjs que recebe um array como valor, ele puxa várias
    informações da api ao mesmo tempo e depois exibe uma resposta geral, ele substitui a necessidade
    de criar vários subscribe para exibir as informações aos poucos */
    return forkJoin([pokemon, name]).subscribe(
      res => {
        this.pokemon = res;
        this.isLoading = true;
        //console.log(res);
      },
      error =>{
        this.apiError = true;
      }
    );

  }
}
