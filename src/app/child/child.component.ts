import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  @Output() greetEvent= new EventEmitter();
  name= 'codeevolution';



  constructor() { }

  ngOnInit(): void {
  }

callParentGreet(){
  this.greetEvent.emit(this.name);   
}



}
