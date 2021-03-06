import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertService } from 'src/app/_services/notification/alert.service';
import { PaymentService } from 'src/app/_services/shared';
import { PaymentRequest } from './model/payment';

@Component({
  selector: 'r3app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements AfterViewInit, OnDestroy {

  @ViewChild('cardInfo') cardInfo: ElementRef;
  card: any;

  cardHandler = this.onChange.bind(this);
  error: string;


  response: any;

  constructor(private cd: ChangeDetectorRef, private _paymentService:PaymentService, private _alertService: AlertService) {}

  ngAfterViewInit() {
    this.card = elements.create('card');
    this.card.mount(this.cardInfo.nativeElement);
    this.card.addEventListener('change', this.cardHandler);
  }

  ngOnDestroy() {
    this.card.removeEventListener('change', this.cardHandler);
    this.card.destroy();
  }

  onChange({ error }) {
    if (error) {
      this.error = error.message;
    } else {
      this.error = null;
    }
    this.cd.detectChanges();
  }

  async onSubmit(form: NgForm) {

    const { token, error } = await stripe.createToken(this.card);
    if (error) {
      console.log('Something is wrong:', error);
    } else {

      const payment:PaymentRequest = {
        productIdentifier: '',
        token: token.id,
        clientIp: token.client_ip,
        created: token.created,
        lastFour: token.card['last4'],
        cardId: token.card['id'],
        cardType: token.card['brand']
      };

      this._paymentService.makeCharge(payment).subscribe(
        (data)=>{
          this.response = data;
        },
        (error)=>{
          console.log("Error handling the charges!");
        }
      );

    }
  }

}
