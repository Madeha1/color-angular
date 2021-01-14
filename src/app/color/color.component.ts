import { Component, OnInit , Input  } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  @Input() color:string;
  @Output() changeColorEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  changeColor(){
    this.changeColorEvent.emit(this.color);
  }
}
