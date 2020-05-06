import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../../../services/store.service';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  store: any = {};
  coins = 10000;
  getPrice: any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private StoreServices: StoreService
    ) {
        this.activatedRoute.params.subscribe( params => {
          this.store = this.StoreServices.getStore( params['id']);
                        } );
      }

      ngOnInit(): void {

      }

      new_amount(amount: any, price: number) {
        price = this.store.price;
        amount = this.coins;
        this.coins = amount - price;
      }
}
