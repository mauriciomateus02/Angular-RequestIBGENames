// shared-data.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private dadosCompartilhados = new BehaviorSubject<string>('');

  sharedName(name: string) {
    this.dadosCompartilhados.next(name);
  }

  getName() {
    return this.dadosCompartilhados.asObservable();
  }
}
