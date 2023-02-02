import { LaunchModel } from "../model/launch-model";

export interface LoadLaunchUseCase {
  load(): Promise<LaunchModel[]>
}