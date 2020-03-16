import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListApiResponse, PokemonDTO } from './models/poke-api.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private uri = environment.pokeApiUrl;

  constructor(private http: HttpClient) { }

  getAll(offset = 0, limit = 20): Observable<ListApiResponse> {
    return this.http.get<ListApiResponse>(`${this.uri}pokemon?offset=${offset}&limit=${limit}`);
  }

  find(id: number) {
    return this.http.get<PokemonDTO>(`${this.uri}pokemon/${id}`);
  }
}
