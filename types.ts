export enum UserRole {
  ADMIN = 'ADMIN',
  CUSTOMER = 'CUSTOMER',
  WORKER = 'WORKER'
}

export enum OrderStatus {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED'
}

export enum ProductCategory {
  FABRIC = 'Fabric',
  READY_MADE = 'Ready Made',
  ACCESSORIES = 'Accessories'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  stock: number;
  image: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface MeasurementProfile {
  neck: number;
  chest: number;
  waist: number;
  hips: number;
  shoulder: number;
  sleeveLength: number;
  shirtLength: number;
  trouserLength: number;
  inseam: number;
  notes: string;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  totalAmount: number;
  status: OrderStatus;
  date: string;
  isCustom: boolean;
  measurements?: MeasurementProfile;
}
