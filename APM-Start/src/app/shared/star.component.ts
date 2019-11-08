import {Component, OnChanges, Input, Output,EventEmitter} from '@angular/core'    
import { $ } from 'protractor';


@Component ({
selector : 'pm-star',
styleUrls : ['./star.component.css'],
templateUrl : './star.component.html'
})

export class starComponent implements OnChanges {   
 @Input() rating : number;
 starWidth : number;
 ngOnChanges(): void {
    this.starWidth = this.rating * 75/5;
 }
@Output() notify: EventEmitter<string> = new EventEmitter<string>();

 onClick() : void{
     this.notify.emit(`The rating  ${this.rating} clicked`);

 }
}
