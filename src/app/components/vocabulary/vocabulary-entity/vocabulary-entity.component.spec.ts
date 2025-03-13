import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularyEntityComponent } from './vocabulary-entity.component';

describe('VocabularyEntityComponent', () => {
  let component: VocabularyEntityComponent;
  let fixture: ComponentFixture<VocabularyEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VocabularyEntityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VocabularyEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
