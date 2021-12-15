import { RandomSource } from "../random/types";
import { AppSettings } from "../settings";
import { Application } from "./types";

export class App implements Application {
  constructor(private random: RandomSource, private settings: AppSettings) {}

  start(): void {
    const value = this.random.getValue();

    console.log(value);
  }
}
