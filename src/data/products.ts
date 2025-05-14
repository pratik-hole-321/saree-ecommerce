export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  price: string;
}

export const products: Product[] = [
  {
    id: "saree1",
    name: "Elegant Red Saree",
    image: "https://via.placeholder.com/300x400?text=Red+Saree",
    description: "Beautiful red saree with golden embroidery.",
    price: "₹1500",
  },
  {
    id: "saree2",
    name: "Graceful Green Saree",
    image: "https://via.placeholder.com/300x400?text=Green+Saree",
    description: "Charming green saree perfect for occasions.",
    price: "₹1800",
  },
];
