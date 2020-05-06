import { Component, OnInit } from '@angular/core';
import { StoreService, Store } from '../../../services/store.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {

  stores: Store[] = [];



  constructor(private router: Router,
    private StoreServices: StoreService) { }

  ngOnInit(): void {
    this.stores = this.StoreServices.getStores();
  }


  seeStore( idx: number ) {
    this.router.navigate( ['/store', idx] );
  }

}
