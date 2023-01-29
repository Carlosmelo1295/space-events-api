import axios from "axios";
import { LoadLaunchUseCase } from "../model/contracts/load-launch-usecase";
import { LaunchModel } from "../model/launch-model";

export class LaunchController implements LoadLaunchUseCase {
  url: string = "https://ll.thespacedevs.com/2.2.0/event/upcoming/";
  responseData: LaunchModel = null!


  async load(): Promise<LaunchModel> {
    const response = (await axios.get(this.url)).data

    for (let i = 0; i < response.results.length; i++) {
      this.responseData = {
        name: response.results[i].name,
        description: response.results[i].description,
        feature_image: response.results[i].feature_image,
        date: response.results[i].date,
        status: response.results[i].launches[i].status.abbrev
      }
      console.log(this.responseData)
    }
    console.log(this.responseData)
    return this.responseData
  }

}