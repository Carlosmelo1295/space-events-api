import { LaunchModel } from "../launch-model";

export interface LoadLaunchUseCase {
  load(): Promise<LaunchModel[]>
}