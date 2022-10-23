import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../services/item.service';
import { SharingService } from '../services/sharing.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items: any;
  public lat: number | undefined;
  public lng: number | undefined;
  constructor(
    private itemService: ItemService, 
    private sharingService: SharingService, 
    private router: Router) {}

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        if (position) {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          this.getItems(this.lat, this.lng);
        }
      },
        (error) => console.log(error));
    }
  }

  getItems(lat: number, long: number) {
    this.itemService.getItems(lat, long).subscribe((item: any) => {
      this.items = item;
    });
  }

  goToDetails(item: any){
    this.sharingService.setData(item);
    this.router.navigate(['/details', item.id])
  }

}
