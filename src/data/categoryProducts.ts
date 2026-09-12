export type CategoryProduct = {
  id: string;
  name: string;
  brand: string;
  price: string;
  image: string;
  category: string;
  subcategory: string;
  type: string;
  isNewArrival: boolean;
  isTrending: boolean;
};

// Yahan par aap apne real products add kar sakte hain.
// Format: ["Product Name", "Brand", "Price", "Image URL", "category slug", "subcategory slug", "type slug"]
const productSeeds: (readonly [string, string, string, string, string, string, string])[] = [
  ["Midnight Blue Anarkali", "Biba", "₹3,499", "/instagram/4.jpg", "women", "indian-wear", "suit-sets"],
  ["Casual Oxford Shirt", "Polo", "₹1,999", "/instagram/2.jpg", "men", "shirts", "casual-shirts"],
  ["Bridal Lehenga", "Sabyasachi", "₹2,499", "/instagram/6.jpg", "wedding-occasion", "bridal", "bridal-lehengas"],
  ["Kids Denim Jacket", "H&M", "₹1,299", "/instagram/7.jpg", "kids", "boys", "shirts"],
  ["Gold Plated Jhumkas", "Kalyan", "₹899", "/catogery/JEWELRY.jpg", "jewelry", "fashion-jewelry", "earrings"],
  ["Running Shoes", "Nike", "₹4,999", "/instagram/8.jpg", "footwear", "men", "sports-shoes"],
  ["Matte Lipstick Set", "MAC", "₹2,199", "/catogery/glam.jpg", "glam", "makeup", "lips"],
  ["Cotton Bedsheet", "Bombay Dyeing", "₹1,499", "/catogery/homedecor.jpg", "home-decor", "home-furnishings", "bedsheets"],
];

export const categoryProducts: CategoryProduct[] = productSeeds.map((product, index) => ({
  id: `category-product-${index + 1}`,
  name: product[0],
  brand: product[1],
  price: product[2],
  image: product[3],
  category: product[4],
  subcategory: product[5],
  type: product[6],
  isNewArrival: index % 3 === 0,
  isTrending: index % 2 !== 0,
}));

// Agar array khali hai, toh crash se bachne ke liye filterCategoryProducts check karega
export function filterCategoryProducts(filters: Partial<Pick<CategoryProduct, "category" | "subcategory" | "type">>) {
  if (categoryProducts.length === 0) return [];
  return categoryProducts.filter((product) =>
    Object.entries(filters).every(([key, value]) => !value || product[key as keyof CategoryProduct] === value),
  );
}
