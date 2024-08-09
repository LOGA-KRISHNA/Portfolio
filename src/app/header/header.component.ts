import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  navBar=[
    {label:"Education",
      routerLink:'about',
    },
    {label:"Projects",
      routerLink:'home',
    },
    {label:"Contact",
      routerLink:'home',
    },
    {
      label:"Links",
      RouterLink:'footer'
    }
  ];

  mobile:boolean=false;
  navMobileClicked(){
    this.mobile=!this.mobile;
  }


}
