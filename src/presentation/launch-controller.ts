import axios from "axios";
import { LaunchModel } from "../domain/model/launch-model";
import { LoadLaunchUseCase } from "../domain/contracts/load-launch-usecase";
import { TranslatePt } from "../helpers/translate";
import { Translate } from "@/domain/contracts/translate-usecase";
require('dotenv').config()

import moment from "moment";

export class LaunchController implements LoadLaunchUseCase {
  constructor(private readonly translatePt: Translate) { }

  responseData: LaunchModel[] = null!


  async load(): Promise<any> {
    let requestData: any[] = (await axios.get(process.env.URL!)).data.results
    let listOfEvents: LaunchModel[] = []


    try {
      for (let i: number = 0; i < requestData.length; i++) {

        const convertDataToObject: any = Object.assign({}, requestData[i]);
        const formatDate: any = moment(convertDataToObject.date).format('LLLL')

        console.log(convertDataToObject)



        let event_values = {
          name: convertDataToObject.name,
          description: await translatePt.translate(convertDataToObject.description, 'pt'),
          feature_image: convertDataToObject.feature_image,
          date: await translatePt.translate(formatDate, 'pt'),
          status: await translatePt.translate(convertDataToObject.launches[i] ? convertDataToObject.launches[0].status.name:  "Sem previsão", 'pt')
        }
        listOfEvents.push(event_values)
      }
    } catch (err) {
      console.log(err)
    }
    return listOfEvents
  }
}

const translatePt = new TranslatePt()
export const makeLaunchController = (): LaunchController => {
  return new LaunchController(translatePt)

}