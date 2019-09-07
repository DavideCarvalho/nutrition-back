export abstract class ObservabilityDTO {
  constructor(public inserted: Date, public updated: Date, public version: number) {
  }
}
