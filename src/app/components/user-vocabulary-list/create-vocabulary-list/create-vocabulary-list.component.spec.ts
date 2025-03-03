import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVocabularyListComponent } from './create-vocabulary-list.component';

describe('CreateVocabularyListComponent', () => {
  let component: CreateVocabularyListComponent;
  let fixture: ComponentFixture<CreateVocabularyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateVocabularyListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateVocabularyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
