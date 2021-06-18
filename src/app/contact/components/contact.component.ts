import { Component, OnInit, HostListener } from '@angular/core';
//import { ConnectionService } from './connection.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ConnectionService } from '../services/connection.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  optionsSelect: Array<any>;

  @HostListener('input') oninput() {

  if (this.contactForm.valid) {
    this.disabledSubmitButton = false;
    }
  }
  
  constructor() { 
    this.contactForm = new FormGroup({
      contactFormName: new FormControl('Nancy', Validators.minLength(2)),
      contactFormEmail: new FormControl('Drew'),
    });
  }
  //constructor(private fb: FormBuilder) {
  /*constructor(private fb: FormBuilder, private connectionService: ConnectionService) {  
  this.contactForm = fb.group({
    'contactFormName': ['', Validators.required],
    'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
    'contactFormSubjects': ['', Validators.required],
    'contactFormMessage': ['', Validators.required],
    'contactFormCopy': [''],
    });
  }*/

  onSubmit() {
      console.log('Your message has been sent');
      this.contactForm.reset();
      this.disabledSubmitButton = true;
    /*this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
      alert('Your message has been sent.');
      this.contactForm.reset();
      this.disabledSubmitButton = true;
    }, error => {
      console.log('Error', error);
    });*/
  }  

  ngOnInit(): void {
    console.log('ngOnInit');
  }

}
