import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  // baseUrl='https://table-booking-api.azurewebsites.net/api/Restaurant/'
   baseUrl='https://localhost:44362/api/Restaurant/'

  constructor(private http:HttpClient)
  {

  }

  getRestaurantList(){
    return this.http.get<any>(`${this.baseUrl}GetRestaurantsList`)
  }
  
  getRestaurantBranchById(restaurantId:number){
    return this.http.get<any>(`${this.baseUrl}RestuarantBranchById?restaurantId=${restaurantId}`)
  }

  getDiningTableById(branchId:number){
    return this.http.get<any>(`${this.baseUrl}GetDiningTableById/${branchId}`)
  }

}
