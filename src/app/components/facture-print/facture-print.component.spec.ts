import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { FacturePrintComponent } from './facture-print.component';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { ProductService } from 'src/app/services/product.service';
import { LOCALE_ID } from '@angular/core';
registerLocaleData(localeFr);
describe('FacturePrintComponent', () => {
  let component: FacturePrintComponent;
  let fixture: ComponentFixture<FacturePrintComponent>;
  let service: ProductService;
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
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturePrintComponent ],
      providers: [{ provide: LOCALE_ID, useValue: 'fr-FR'}],
    })
    .compileComponents();
    service = TestBed.inject(ProductService);
    fixture = TestBed.createComponent(FacturePrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the total', fakeAsync(() => {
    service.addProduct(product_1);
    tick();
    expect(fixture.debugElement.nativeElement.querySelector('#total').textContent)
            .toContain('Total : ');
  }));
});
