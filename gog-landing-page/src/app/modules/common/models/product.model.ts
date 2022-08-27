import { CurrenciesEnum } from "./currencies.enum";

export class ProductModel {
  productName: string;
  productPrice: number;
  currency: CurrenciesEnum;
  discount: string;
  isOwned: boolean;
  isInCart: boolean;
  imgUrl: string;
}
