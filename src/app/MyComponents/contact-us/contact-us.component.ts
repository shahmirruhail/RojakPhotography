import { Component, Inject } from '@angular/core';
import { FormResponseService } from '../../form-response.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  name: string = ''; // Initialize name as an empty string
  email: string = ''; // Initialize email as an empty string
  message: string = ''; // Initialize message as an empty string

  constructor(@Inject(FormResponseService) private formResponseService: FormResponseService) { }

  onSubmit() {
    // Create an object to store form response data
    const response = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    // Add the form response to the FormResponseService
    this.formResponseService.addFormResponse(response);

    // Clear the form fields after submission
    this.name = '';
    this.email = '';
    this.message = '';

    console.log('Submitted form!', response);
  }
}
