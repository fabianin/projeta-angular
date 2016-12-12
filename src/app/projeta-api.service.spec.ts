/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProjetaApiService } from './projeta-api.service';

describe('ProjetaApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjetaApiService]
    });
  });

  it('should ...', inject([ProjetaApiService], (service: ProjetaApiService) => {
    expect(service).toBeTruthy();
  }));
});
