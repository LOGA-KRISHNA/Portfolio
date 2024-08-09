import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.css'
})
export class AboutmeComponent {
  title:string="Education";
  obj=[
    {year:"2020-2021",
      education:"SSLC Education",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem iure totam recusandae officiis sapiente quam distinctio perspiciatis dolorum quia? Nulla facilis sit accusamus odit magnam ad laudantium saepe, omnis quibusdam?"
    },
    {year:"2021-2022",
      education:"Higher Secondary Education",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem iure totam recusandae officiis sapiente quam distinctio perspiciatis dolorum quia? Nulla facilis sit accusamus odit magnam ad laudantium saepe, omnis quibusdam?"
    },
    {year:"Expected 2026",
      education:"B.Technology",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem iure totam recusandae officiis sapiente quam distinctio perspiciatis dolorum quia? Nulla facilis sit accusamus odit magnam ad laudantium saepe, omnis quibusdam?"
    }
  ]

  obj2=[
    {year:"2020-2021",
      education:"Full Stack Developer",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem iure totam recusandae officiis sapiente quam distinctio perspiciatis dolorum quia? Nulla facilis sit accusamus odit magnam ad laudantium saepe, omnis quibusdam?"
    },
    {year:"2021-2022",
      education:"Machine Learning",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem iure totam recusandae officiis sapiente quam distinctio perspiciatis dolorum quia? Nulla facilis sit accusamus odit magnam ad laudantium saepe, omnis quibusdam?"
    },
    {year:"Expected 2026",
      education:"Languages",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem iure totam recusandae officiis sapiente quam distinctio perspiciatis dolorum quia? Nulla facilis sit accusamus odit magnam ad laudantium saepe, omnis quibusdam?"
    }
  ]
}
