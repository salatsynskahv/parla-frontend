import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVocabularyCardComponent } from './user-vocabulary-card.component';

describe('UserVocabularyCardComponent', () => {
  let component: UserVocabularyCardComponent;
  let fixture: ComponentFixture<UserVocabularyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserVocabularyCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserVocabularyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
