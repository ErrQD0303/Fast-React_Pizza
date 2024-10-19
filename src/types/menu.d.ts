export interface IMenuItem {
  id: number;
  imageUrl: string;
  ingredients: Array<string>;
  name: string;
  soldOut: boolean;
  unitPrice: number;
}
