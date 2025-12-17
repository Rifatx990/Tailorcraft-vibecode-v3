import { Product, ProductCategory, Order, OrderStatus, User, UserRole } from '../types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Premium Cotton Fabric - White',
    category: ProductCategory.FABRIC,
    price: 550, // BDT
    stock: 100,
    image: 'https://picsum.photos/400/400?random=1',
    description: 'High quality 100% cotton fabric suitable for shirts and panjabis.',
  },
  {
    id: '2',
    name: 'Navy Blue Formal Suit Piece',
    category: ProductCategory.FABRIC,
    price: 3500,
    stock: 20,
    image: 'https://picsum.photos/400/400?random=2',
    description: 'Italian wool blend suitable for executive suits.',
  },
  {
    id: '3',
    name: 'Ready-made Slim Fit Shirt',
    category: ProductCategory.READY_MADE,
    price: 1200,
    stock: 50,
    image: 'https://picsum.photos/400/400?random=3',
    description: 'Modern slim fit shirt, available in M, L, XL.',
  },
  {
    id: '4',
    name: 'Gold Plated Cufflinks',
    category: ProductCategory.ACCESSORIES,
    price: 800,
    stock: 15,
    image: 'https://picsum.photos/400/400?random=4',
    description: 'Elegant cufflinks for formal events.',
  },
  {
    id: '5',
    name: 'Black Formal Trousers',
    category: ProductCategory.READY_MADE,
    price: 1500,
    stock: 30,
    image: 'https://picsum.photos/400/400?random=5',
    description: 'Wrinkle-free formal trousers.',
  },
  {
    id: '6',
    name: 'Linen Panjabi Fabric',
    category: ProductCategory.FABRIC,
    price: 900,
    stock: 60,
    image: 'https://picsum.photos/400/400?random=6',
    description: 'Breathable linen suitable for summer wear.',
  }
];

export const MOCK_ORDERS: Order[] = [
  {
    id: 'ORD-001',
    userId: 'u1',
    items: [
      { ...MOCK_PRODUCTS[0], quantity: 2 },
      { ...MOCK_PRODUCTS[3], quantity: 1 }
    ],
    totalAmount: 1900,
    status: OrderStatus.COMPLETED,
    date: '2023-10-15',
    isCustom: false
  },
  {
    id: 'ORD-002',
    userId: 'u2',
    items: [],
    totalAmount: 4500,
    status: OrderStatus.PROCESSING,
    date: '2023-10-20',
    isCustom: true,
    measurements: {
      neck: 16, chest: 40, waist: 34, hips: 42, shoulder: 18,
      sleeveLength: 25, shirtLength: 29, trouserLength: 40, inseam: 32,
      notes: 'Slim fit, no pleats'
    }
  },
  {
    id: 'ORD-003',
    userId: 'u1',
    items: [{ ...MOCK_PRODUCTS[2], quantity: 1 }],
    totalAmount: 1200,
    status: OrderStatus.PENDING,
    date: '2023-10-25',
    isCustom: false
  }
];

export const MOCK_USER: User = {
  id: 'u1',
  name: 'Md Rifat Hossain',
  email: 'rifat@meheditailors.com',
  role: UserRole.ADMIN 
};
