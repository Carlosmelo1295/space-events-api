import axios from "axios";
import { LoadLaunchUseCase } from "../model/contracts/load-launch-usecase";
import { LaunchModel } from "../model/launch-model";

export class LaunchController implements LoadLaunchUseCase {
  url: string = "https://ll.thespacedevs.com/2.2.0/event/upcoming/";
  responseData: LaunchModel[] = null!


  async load(): Promise<LaunchModel[]> {
    let ListOsLaunchers: LaunchModel[] = []
    let requestData: [] = (await axios.get(this.url)).data.results

    requestData.forEach((value, i) => {
      let launchers_values = {
        name: value['name'],
        description: value['description'],
        feature_image: value['feature_image'],
        date: value['date'],
        status: ''

      }
      ListOsLaunchers.push(launchers_values)
    })






    return ListOsLaunchers
  }
}


