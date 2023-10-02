import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//observable
// rxjs é uma ferramenta do angular que aplica reatividade
import { Observable } from 'rxjs';
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  //link que leva a listagem de pokemons da pokeApi
  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151';
  constructor(
    private http: HttpClient
  ) { }

  /*O "Observable" serve para observar valores, com o valor "any" ele seleciona qualquer valor
  da lista, serve para listas muito extensas. É possivel usar o observable de forma mais complexa
  por exemplo especificando um valor de elemento do pokemon, o que deixaria a busca mais específica*/
  get apiListAllPokemons():Observable<any>{
    return this.http.get<any>(this.url).pipe(
      tap(res => res),
      tap( res => {
        res.results.map((resPokemons: any) =>{

          this.apiGetPokemons(resPokemons.url).subscribe(
            res => resPokemons.status = res
          )


        })
      })
    )

  }
  public apiGetPokemons(url: string):Observable<any>{
    return this.http.get<any>(url).pipe(
      map(
        res => res


      )
    )
  }
}




