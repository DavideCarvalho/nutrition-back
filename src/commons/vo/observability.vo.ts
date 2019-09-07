export abstract class ObservabilityVO {
  constructor(public inserted: Date, public updated: Date, public version: number) {
  }
}
