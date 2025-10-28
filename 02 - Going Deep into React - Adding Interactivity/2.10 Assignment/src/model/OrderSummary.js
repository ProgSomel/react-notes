export class OrderSummary {
  static id = 0;

  constructor({ number, label, color }) {
    this.id = OrderSummary.id;
    this.number = number;
    this.label = label;
    this.color = color;
    OrderSummary.id++;
  }
}
