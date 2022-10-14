import { TestBed } from '@angular/core/testing';
import { product } from '../core/models/product.model';

import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;
  let chocolat:product;
  const  product_1= {
    name: 'chocolat ',
    quantity:2,
    category: {
      name: 'first nesessity',
      taxe:0
    },
    isImported: true,
    price: 10,
    taxed:0
}
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
     chocolat=new product(product_1);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a new product', () => {
    expect(service).toBeTruthy();
    service.addProduct(product_1)
    expect(service.products.length).toEqual(1)
  });
  it('should calculate the total:21', () => {
    expect(service).toBeTruthy();
    expect(chocolat.pttc).toEqual(21)
  });

  it('should return the list of products', () => {
    expect(service).toBeTruthy();
    service._products.subscribe(data=>{
      expect(data.products.length).toBeGreaterThan(0);
      expect(data.ttc).toEqual(21);
    })
    
  });


});
