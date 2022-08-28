import { TestBed } from '@angular/core/testing';
import { GogCartService } from "./gog-cart.service";
import { ProductModel } from "../../common/models/product.model";
import { CurrenciesEnum } from "../../common/models/currencies.enum";

describe('GogCartService', () => {

  const productMock: ProductModel =   {
      productId: 1,
      productName: "oddworld: stranger's wrath",
      productPrice: 9.99,
      currency: CurrenciesEnum.USD,
      discount: "-50%",
      isOwned: false,
      isInCart: false,
      imgUrl: "assets/images/oddworlds.png"
    };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
      ],
      declarations: [
      ],
      providers: [
        GogCartService
      ]
    }).compileComponents();
  });

  it('should create the service', () => {
    const service =TestBed.inject(GogCartService)
    expect(service).toBeTruthy();
  });

  it('should push product to cart', () => {
    const service =TestBed.inject(GogCartService)
    spyOn(service,'addProductToCart').and.callThrough();
    service.addProductToCart(productMock);
    expect(service.productsInCart).toEqual([productMock]);
  });

  it('should return the number of products in cart', () => {
    const service =TestBed.inject(GogCartService)
    spyOn(service,'numbersOfProductsInCart').and.callThrough();
    service.numbersOfProductsInCart();
    expect(service.productsInCart.length).toEqual(0);
    service.addProductToCart(productMock);
    expect(service.productsInCart.length).toEqual(1);
  });

  it('should clear cart to length 0', () => {
    const service =TestBed.inject(GogCartService)
    spyOn(service,'clearCart').and.callThrough();
    service.addProductToCart(productMock);
    expect(service.productsInCart.length).toEqual(1);
    service.clearCart();
    expect(service.productsInCart.length).toEqual(0);
  });

  it('should calculate the total amount to be paid', () => {
    const service =TestBed.inject(GogCartService)
    spyOn(service,'totalAmountDue').and.callThrough();
    const testResult = service.totalAmountDue();
    expect(testResult).toEqual(0);
    service.addProductToCart(productMock);
    const testResult2 = service.totalAmountDue();
    expect(testResult2).toEqual(productMock.productPrice);
  });

  it('should return false if product is not in cart', () => {
    const service =TestBed.inject(GogCartService)
    spyOn(service,'isProductInCart').and.callThrough();
    const testResult = service.isProductInCart(productMock.productId);
    expect(testResult).toBe(false);
  });

  it('should return true if product is in cart', () => {
    const service =TestBed.inject(GogCartService)
    spyOn(service,'isProductInCart').and.callThrough();
    service.addProductToCart(productMock);
    const testResult = service.isProductInCart(productMock.productId);
    expect(testResult).toBe(true);
  });

  // remove item from cart

});
