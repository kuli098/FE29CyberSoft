import { Injectable, Output, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UserServiceService {
  credentials: any;
  @Output() credentialsEmitter = new EventEmitter();

  setCredential(credentials): void {
    this.credentials = credentials;
    this.credentialsEmitter.emit(this.credentials);
  }
  constructor() {}
}
