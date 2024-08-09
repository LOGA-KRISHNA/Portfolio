import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public  d = new Date();
  year:number = this.d.getFullYear();
 
  
  name:string="LOGA KRISHNA";
}
