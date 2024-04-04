import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-book-a-table',
  templateUrl: './book-a-table.component.html',
  styleUrls: ['./book-a-table.component.css']
})
export class BookATableComponent implements OnInit {

  constructor(private resService: RestaurantService,private datepipe:DatePipe) { }
  restuarantList: any[] = []
  restaurantBranches: any[] = []
  selectedRestaurantId: number = 1
  selectedBranchId!: number
  diningTables: any[] = []
  diningData: any
  uniqueDates: string[]=[]
  bookingTable:any[]=[]

  ngOnInit() {
    this.getRestaurantList()
    this.getRestaurantBranchById()
  }

  getRestaurantList() {
    this.resService.getRestaurantList().subscribe(res => {
      this.restuarantList = res
    })
  }

  getRestaurantBranchById() {
    this.resService.getRestaurantBranchById(this.selectedRestaurantId).subscribe(res => {
      this.restaurantBranches = res
    })
  }

  getDiningTableByBanchId(branchId: string) {
    this.uniqueDates=[]
    this.resService.getDiningTableById(+branchId).subscribe(res => {
      res.forEach((element: any) => {
     const formattedDate=this.datepipe.transform(element.reservationDay,'MM-dd-yyyy')
        if(formattedDate && !this.uniqueDates.includes(formattedDate))
        {
          this.uniqueDates.push(formattedDate)
        }
      });
      this.diningTables=res;
    })
  }

  sendDataToDiningTable(day: any) {
    const parseDay=new Date(day).toDateString()
    this.bookingTable=this.diningTables.filter(x=>{
      const reservationDay=new Date(x.reservationDay).toDateString();
      return parseDay===reservationDay;
    })
  }

}
