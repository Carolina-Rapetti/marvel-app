import { Directive, ElementRef, Input, AfterViewInit, OnDestroy  } from '@angular/core';

import { fromEvent, Observable, Subscription } from 'rxjs';
import { map, filter, pairwise } from 'rxjs/operators';

interface ScrollPosition {
  sH: number;
  sT: number;
  cH: number;
};

@Directive({
  selector: '[appInfiniteScroller]'
})
export class InfiniteScrollerDirective implements AfterViewInit, OnDestroy {

  private scrollEvent;
  private userScrolledDown;
  private scrollSubscription: Subscription;

  @Input()
  scrollCallback;

  @Input()
  scrollPercent = 80;

  constructor(private elem: ElementRef) {  }

  ngAfterViewInit(){
    this.registerScrollEvent();
    this.streamScrollEvents();
    this.requestCallbackOnScroll();
  }

  ngOnDestroy(){
    this.scrollSubscription.unsubscribe();
  }

  private registerScrollEvent() {

    /*this.scrollEvent = fromEvent(this.elem.nativeElement, 'scroll').pipe(
      map((e:Event) => {
        return e.target
      }),
      debounceTime(500),
      filter((res:Element) => (res.scrollHeight-res.scrollTop === res.clientHeight))
    ).subscribe(success => this.scrollCallback());*/
    this.scrollEvent = fromEvent(this.elem.nativeElement, 'scroll');
  }
  private streamScrollEvents() {
    this.userScrolledDown = this.scrollEvent.pipe(
      map((e: any): ScrollPosition => ({
        sH: e.target.scrollHeight,
        sT: e.target.scrollTop,
        cH: e.target.clientHeight
      })),
      pairwise(),
      filter(positions => this.isUserScrollingDown(positions) && this.isScrollExpectedPercent(positions[1])));
      
  }

  private requestCallbackOnScroll() {

    this.scrollSubscription = this.userScrolledDown
      .subscribe(() => { 
        return this.scrollCallback();
      });

  }

  private isUserScrollingDown = (positions) => {
    return positions[0].sT < positions[1].sT;
  }

  private isScrollExpectedPercent = (position) => {
    return ((position.sT + position.cH) / position.sH) > (this.scrollPercent / 100);
  }
}
