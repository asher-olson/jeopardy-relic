import { Injectable, WritableSignal } from '@angular/core';
import { Relic } from './relic.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RelicService {
  private relics: Relic[] = [];

  constructor(private http: HttpClient) {}

  public initializeRelics(): void {
    this.http.get<Relic[]>('/relics.json').subscribe((relics) => {
      this.relics = relics;
    });
  }

  // return 3 random relics
  public getRelicOptions(act: string): Relic[] {
    const filtered = this.relics.filter((relic) => relic.act === act);
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  }

  public removeRelic(relic: Relic): void {
    this.relics = this.relics.filter((rel: Relic) => rel.name !== relic.name);
  }
}
