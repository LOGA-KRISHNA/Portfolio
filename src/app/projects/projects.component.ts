import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  title:string="Projects";
  items=[
    {name:""},
    {name:""},
    {name:""},
    {name:""},
    {name:""},
    {name:""},
  ]
}
