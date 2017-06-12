import { Component,OnChanges,Input,Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'star',
    moduleId: module.id,
    templateUrl: 'star-component.html',
    styleUrls: ['star-component.css']
})
export class StarComponent implements OnChanges,Input{
    @Input() rating : number;
    starWidth : number;
    @Output() starRating : EventEmitter<string> = new EventEmitter<string>();


    ngOnChanges():void {
        this.starWidth = this.rating * 86/5;
    }

    onClick():void{
        this.starRating.emit(`${this.rating}`);
    } 
}