export interface User {
  name?: string;
  class?: string;
  stats?: {
    goodness: number;
    sneakiness: number;
    cleverness: number;
    brawn: number;
    magic: number;
    charm: number;
  };
  coins?: number;
}
