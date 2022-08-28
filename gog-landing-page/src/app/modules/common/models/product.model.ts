import { CurrenciesEnum } from "./currencies.enum";

export class ProductModel {
  productId: number;
  productName: string;
  productPrice: number;
  currency: CurrenciesEnum;
  discount: string;
  isOwned: boolean;
  isInCart: boolean;
  imgUrl: string;
}
