import { ProductModel } from "../../common/models/product.model";

export class GogCartService {
  public productsInCart: Array<ProductModel> = [];

  constructor() {
  }

  public addProductToCart(product: ProductModel): void {
    this.productsInCart.push(product);
  }

  public numbersOfProductsInCart(): number {
    return this.productsInCart.length;
  }

  public clearCart(): void {
    this.productsInCart = [];
  }

  public totalAmountDue(): number {
    const result = this.productsInCart.reduce((total, obj) => obj.productPrice + total,0);
    return Number(result.toFixed(2));
  }

  public removeItemFromCart(productId: number): void {
    const array = this.productsInCart.findIndex(p => p.productId === productId);
    this.productsInCart.splice(array,1);
  }

  public isProductInCart(productId: number): boolean {
   return this.productsInCart.some(product => product.productId === productId);
  }

}
