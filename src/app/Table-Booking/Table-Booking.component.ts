import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { User } from '../model/user'
import { AbstractControl, FormBuilder, FormGroup, NgForm, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-Table-Booking',
  templateUrl: './Table-Booking.component.html',
  styleUrls: ['./Table-Booking.component.css']
})
export class TableBookingComponent implements OnInit {

  //   file!:File
  //   getFile($event: Event) {
  //     if($event)
  //     this.file=$event.target.
  // }
  allowedFileExtensions = ['jpg', 'jpeg', 'png'];
  userFormGroup!: FormGroup
  constructor(private fb: FormBuilder) {

  }
  @Output() userData = new EventEmitter<User>();

  ngOnInit() {
    this.userFormGroup = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      profileImage: ['', Validators.compose([
        Validators.required,
        this.CheckFileTypeVAlidation(this.allowedFileExtensions)
      ])]
    })

  }

  onelectFile($event: any) {

    if ($event.target?.files.length > 0) {
      const file: File = $event.target.files[0];
      this.userFormGroup.value.profileImage = $event.target?.files[0]
    }
  }

  CheckFileTypeVAlidation(allowedExten: any): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const file = control.value;
      if (file) {
        const fileType = file.substring(file.lastIndexOf('.') + 1);
        if (!allowedExten.includes(fileType)) {
          return { invalidfile: true }
        }
      }
      return null;
    }
  }


  SaveUserData() {
    var data = this.userFormGroup.value
    this.userData.emit(data);
  }




}
