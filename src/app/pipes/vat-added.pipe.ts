import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ 
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  transform(value: number, rate: number): number {
    return value+(value*rate/100);
  }
/*
eldeki veriyi farklı şekilde göstermek için kullanılır 
  pipe>boru >> | 

  value>>pipe ın değiştirmeye çalıştığı değer
  args>>gönderdiğimiz değer
  product.html de verdiğimiz değer yüzde artış (rate)
  ... >>params anlamı
*/
}
