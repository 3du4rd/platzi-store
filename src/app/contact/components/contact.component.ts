import { Component, OnInit, HostListener } from '@angular/core';
//import { ConnectionService } from './connection.service';
import { FormGroup, FormBuilder, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ConnectionService } from '../services/connection.service';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  optionsSelect: Array<any>;

  contactFormEmail: FormControl;
  contactFormName: FormControl;
  contactFormMessage: FormControl;
  contactFormSubjects: FormControl;
  matcher = new MyErrorStateMatcher();

  constructor() { 
    this.contactFormName = new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ]);
    this.contactFormEmail = new FormControl('',[
      Validators.required,
      Validators.email
    ]);
    this.contactFormSubjects = new FormControl();
    this.contactFormEmail.valueChanges
    .subscribe( value => {
      console.log(value);
    })
    this.contactFormMessage = new FormControl();    
  }

  /*@HostListener('input') oninput() {

  if (this.contactForm.valid) {
    this.disabledSubmitButton = false;
    }
  }*/
  
  /*constructor() { 
    this.contactForm = new FormGroup({
      contactFormName: new FormControl('Nancy', Validators.minLength(2)),
      contactFormEmail: new FormControl('Drew'),
    });
  }*/
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

  /*onSubmit() {
      console.log('Your message has been sent');
      this.contactForm.reset();
      this.disabledSubmitButton = true;
    this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
      alert('Your message has been sent.');
      this.contactForm.reset();
      this.disabledSubmitButton = true;
    }, error => {
      console.log('Error', error);
    });
  }  */

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  sendMail(){
    //if (this.contactFormEmail)
  }

}
