import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../services/item.service';
import { SharingService } from '../services/sharing.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  item: any;
  constructor(private sharingService: SharingService, 
    private itemService: ItemService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // this.item = this.sharingService.getData();
    if(id)
      this.getItemById(id);
  }

  getItemById(id: string) {
    this.itemService.getItemById(id).subscribe((item: any) => {
      this.item = item;
    });
  }

}
