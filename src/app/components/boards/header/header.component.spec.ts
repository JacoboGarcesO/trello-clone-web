import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponentBo} from './header.component';

describe('HeaderComponentBo', () => {
  let component: HeaderComponentBo;
  let fixture: ComponentFixture<HeaderComponentBo>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponentBo]
    });
    fixture = TestBed.createComponent(HeaderComponentBo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
