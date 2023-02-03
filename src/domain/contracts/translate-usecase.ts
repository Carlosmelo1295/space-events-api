import { LaunchModel } from "../model/launch-model";

export interface Translate {
  translate(eventData: [], language: string): Promise<string>
}