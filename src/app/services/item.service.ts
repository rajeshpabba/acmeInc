import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) {}

  getItems(lat: number, long: number) {
    return this.http.get(`${environment.apiUrl}/search?term=delis&latitude=${lat}&longitude=${long}`);
  }

  getItemById(id: string) {
    return this.http.get(`${environment.apiUrl}/${id}`);
  }
}
