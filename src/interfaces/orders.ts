export interface IOrders {
  _id: string;
  products: [
    {
      image: string;
      title: string;
    }
  ];
  amount: number;
  address: string;
  paymentType: string;
  paymentStatus: string;
  createdAt: string;
  updatedAt: string;
}
