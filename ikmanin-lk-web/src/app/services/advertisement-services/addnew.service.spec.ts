import { TestBed } from '@angular/core/testing';

import { AddnewService } from './addnew.service';

describe('AddnewService', () => {
  let service: AddnewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddnewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
