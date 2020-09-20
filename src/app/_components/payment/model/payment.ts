export interface PaymentRequest{
  productIdentifier: string;
  token: string;
  clientIp: string;
  created: number;
  lastFour: string;
  cardId: string;
  cardType: string;
}
