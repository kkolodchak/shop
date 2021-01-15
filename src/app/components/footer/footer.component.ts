import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../../contact.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  // FormData: FormGroup;
  // constructor(private builder: FormBuilder, private contact: ContactService) { }
  constructor() { }

  ngOnInit(): void {

  }

  // ngOnInit() {
  //   this.FormData = this.builder.group({
  //     Fullname: new FormControl('', [Validators.required]),
  //     Phone: new FormControl('', [Validators.required]),
  //     Comment: new FormControl('', [Validators.required])
  //   });
  // }

  // onSubmit(FormData) {
  //   console.log(FormData);
  //   this.contact.PostMessage(FormData)
  //     .subscribe(response => {
  //       location.href = 'https://mailthis.to/stockroom.opt@gmail.com';
  //       console.log(response);
  //     }, error => {
  //       console.warn(error.responseText);
  //       console.log({ error });
  //     });
  // }

}