import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Mail } from '../models/mail';

@Injectable()

export class GetMailsService {

  private mailsUrl = 'app/shared/messages_sample.json';  // URL to web api

  constructor(private http: Http) { }

  getMails(): Promise<Mail[]> {
    return this.http.get(this.mailsUrl)
               .toPromise()
               .then(response => response.json().messages as Mail[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

