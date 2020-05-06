import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../../../services/store.service';






@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
})
export class SearcherComponent implements OnInit {

  stores: any[] = [];
  termino: string;

  constructor(private acRoute: ActivatedRoute,
              private StService: StoreService
             ) {
  }

  ngOnInit(): void {
    this.acRoute.params.subscribe( params => {
      this.termino = params['term'];
      this.stores = this.StService.searchStores( params['term']);
      console.log(this.stores)
    });
  }


}
