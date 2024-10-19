export interface IOrder {
  id: string;
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  estimatedDelivery: string;
  cart: ICartItem[];
  position: string;
  orderPrice: number;
  priorityPrice: number;
  status: string;
}

export interface ICreateOrderFormData {
  customer: string;
  phone: string;
  address: string;
  priority: string;
  cart: string;
}

export interface ICreateOrderFormDataDto {
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  cart: ICartItem[];
}

export type CreateOrderFormError = {
  phone?: string;
};
