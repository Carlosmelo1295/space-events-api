export interface Translate {
  translate(description: string): Promise<string>
}