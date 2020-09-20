import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/_services/shared';

@Component({
  selector: 'r3app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private _paymentService:PaymentService) { }

  ngOnInit(): void {
  }

  onCheckout(): void {

    this._paymentService.getCheckoutSession("").subscribe(
      (data) => {
        console.log("Checkout Session is " + data);
        return stripe.redirectToCheckout({ sessionId: data });
      },
      (error) => {

      }
    );

  }

}
