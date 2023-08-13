import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormResponseService {
  private formResponses: any[] = [];

  constructor() { }

  addFormResponse(response: any) {
    this.formResponses.push(response);
  }

  getFormResponses() {
    return this.formResponses;
  }
}
