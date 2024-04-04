import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { User } from '../model/user';
import { NgControlStatus } from '@angular/forms';

@Component({
  selector: 'app-diningTable',
  templateUrl: './diningTable.component.html',
  styleUrls: ['./diningTable.component.css']
})
export class DiningTableComponent implements OnInit {

  @Input() diningTable:any
  modalRef?: BsModalRef;
  userData:any
  constructor(private modalService: BsModalService) {}
  ngOnInit() {
  }
  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }

  getUserDetails(Userdata:User)
  {
    console.log(this.userData);
  }
}
