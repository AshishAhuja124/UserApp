import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
@Input()
appHighlight:string;
status:String
  constructor(private el:ElementRef) { }
@HostListener('click') onClick(){
  if(this.appHighlight='active')
  this.el.nativeElement.style.background='green';

  if(this.appHighlight='pending')
  this.el.nativeElement.style.background='orange';
  
 else 
  this.el.nativeElement.style.background='red';
}
}
