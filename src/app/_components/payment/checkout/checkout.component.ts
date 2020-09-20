import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/_services/notification/alert.service';
import { PaymentService } from 'src/app/_services/shared';

@Component({
  selector: 'r3app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private _paymentService:PaymentService, private _alertService: AlertService) { }

  ngOnInit(): void {
  }

  onCheckout(): void {

    this._paymentService.getCheckoutSession("").subscribe(
      (data) => {
        console.log("Checkout Session is " + data);
        stripe.redirectToCheckout({ sessionId: data });
      },
      (error) => {
        console.error(error);
      }
    );

  }

}
