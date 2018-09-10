import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector:'[apphighlight]'
})

export class HighlightDirective{
    
    constructor(private el: ElementRef){}
    
    @Input() defaultColor: string;

    @HostListener('mouseenter') onMouseEnter(){
        this.highlight(this.defaultColor || 'red');
    }
    @HostListener('mouseleave') onmouseleave(){
        this.highlight(null);
    }
    private highlight(color: string){
        this.el.nativeElement.style.backgroundColor = color;
    }
}