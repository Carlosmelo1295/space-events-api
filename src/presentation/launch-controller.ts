import axios from "axios";
import { LaunchModel } from "../domain/model/launch-model";
import { LoadLaunchUseCase } from "../domain/contracts/load-launch-usecase";
import { TranslatePt } from "../helpers/translate";
import { Translate } from "@/domain/contracts/translate-usecase";
import { translate } from '@vitalets/google-translate-api';

import moment from "moment";

const translatept = new TranslatePt()

export class LaunchController implements LoadLaunchUseCase {
  constructor(private readonly translatePt: Translate) { }
  url: string = "https://ll.thespacedevs.com/2.2.0/event/upcoming/";
  responseData: LaunchModel[] = null!


  async load(): Promise<any> {
    let listOsLaunchers: LaunchModel[] = []
    let requestData: [] = (await axios.get(this.url)).data.results

    requestData.forEach(async (value, i) => {
      let launchers_values = {
        name: value['name'],
        description: value['description'],
        feature_image: value['feature_image'],
        date: moment(value['date']).format('LLLL'),
        status: 'status'
      }

      listOsLaunchers.push(launchers_values)

    })
    return listOsLaunchers

  }

}


export const makeLaunchController = (): LaunchController => {

  return new LaunchController(translatept)
}
