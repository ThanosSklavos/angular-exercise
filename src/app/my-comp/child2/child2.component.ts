import { Component, EventEmitter, Input, Output, SimpleChange, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})

export class Child2Component {
  @Input() evenInputs:string[] = []

  onClear() {
    this.evenInputs.length = 0
  }
}
