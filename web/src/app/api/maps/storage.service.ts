import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private localStorage?: Storage;

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {
    this.localStorage = document.defaultView?.localStorage;
  }

  set(key: string, value: string): void {
    this.localStorage?.setItem(key, value);
  }

  get(key: string): string | undefined {
    return this.localStorage?.getItem(key) ?? undefined;
  }

  clear(key: string): void {
    this.localStorage?.removeItem(key);
  }
}
