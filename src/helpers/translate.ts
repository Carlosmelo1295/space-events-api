import { Translate } from "@/domain/contracts/translate-usecase";
// import { translate } from '@vitalets/google-translate-api';


export class TranslatePt implements Translate {
  text: any
  async translate(description: string): Promise<any> {
    // const { text } = await translate(description, { to: 'pt' });
    // this.text = text
  }
}


