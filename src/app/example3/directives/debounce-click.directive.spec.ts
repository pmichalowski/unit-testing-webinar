import { DebounceClickDirective } from './debounce-click.directive';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `<div><button appDebounceClick (debounceClick)="clicked()"></button></div>`,
})
class DebounceClickTestComponent {
  clicked() {}
}

describe('DebounceClickDirective', () => {
  let component: DebounceClickTestComponent;
  let fixture: ComponentFixture<DebounceClickTestComponent>;
  let button: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DebounceClickTestComponent, DebounceClickDirective],
    });

    fixture = TestBed.createComponent(DebounceClickTestComponent);
    component = fixture.componentInstance;
    button = fixture.debugElement.query(By.directive(DebounceClickDirective));
    fixture.detectChanges();
    spyOn(component, 'clicked');
  });

  it('should not allow multiple click within the debounceTime', fakeAsync(() => {
    button.nativeElement.dispatchEvent(new Event('click', { bubbles: true }));
    tick(10);
    button.nativeElement.dispatchEvent(new Event('click', { bubbles: true }));
    tick(100);
    button.nativeElement.dispatchEvent(new Event('click', { bubbles: true }));
    tick(501);
    expect(component.clicked).toHaveBeenCalledTimes(1);
  }));
});
