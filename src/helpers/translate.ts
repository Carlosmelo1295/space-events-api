import { Translate } from "@/domain/contracts/translate-usecase";
import { LaunchModel } from "@/domain/model/launch-model";
const translate = require('translate')

export class TranslatePt implements Translate {

  async translate(eventData: LaunchModel[], language: string): Promise<any> {
    translate.engine = 'google'
    translate.key = process.env.KEY
    return await translate(eventData, language)


  }
}


