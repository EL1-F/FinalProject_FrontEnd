import { Component } from '@angular/core';
/*html datayı buradan yönetiyoruz*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'northwind';
  user:string= "Elif İpek";
  

  /*title:string = 'northwind'; şeklinde veri tipini yazabiliriz
    product:any={} buaradaki any >> her veri türü olabilir anlamına gelir
    süslü parantez ile verilen objedir
    ./ aynı klasör demek
    [] köşeli parantez array demek
    satır sonlarına ; konmazsa sorun olmaz
  */
}
