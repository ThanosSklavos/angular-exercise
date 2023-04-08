import { Component, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
@Input() oddInputs:string[] = []
@Output() oddInputsLength= this.oddInputs.length
onClear() {
  this.oddInputs.length = 0
}
}
