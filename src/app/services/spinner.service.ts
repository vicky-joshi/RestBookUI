import { Injectable } from '@angular/core';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor(private spinner: NgxSpinnerService) { }


  show() {
    this.spinner.show(undefined,{
      type:'ball-scale-multiple',
      bdColor:'rgb(255,255,255,0.7)',
      color:'#333333'
    });
  }

  hide(){
    this.spinner.hide();
  }



}
