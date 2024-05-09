import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class DataService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // findInterviews(filter?: any): Observable<any> {
  //   const headers = this.getHeaders();
  //   return this.http.get(`${this.baseUrl}/interview`, {
  //     params: filter ? { filter: JSON.stringify(filter) } : {},
  //     headers,
  //   });
  // }

  // Helper function to get headers
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem("jwt_token");
    let headers = new HttpHeaders();
    headers = headers.set("accepte", "application/json");
    headers = headers.set("Content-Type", "application/json");
    if (token) {
      headers = headers.set("Authorization", "Bearer " + token);
    }
    return headers;
  }
}
