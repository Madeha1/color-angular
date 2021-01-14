import { Component, OnInit , Input  } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})

export class FirstComponent  implements OnInit {
  color:string;
  subscribedParam = "initial value";
  content :string = "";
  constructor(
    private route: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.subscribedParam = params.get("color");
    
    });
  }
  
  change(color : string){
    this.color = color;
    this.subscribedParam = color;
    this.content = `The color has been changed by color picker to ${color}`
  }
}
