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
  ["Hand-Embroidered Anarkali Set", "Aurelia Studio", "₹3,490", "/instagram/4.jpg", "women", "indian-wear", "suit-sets"],
  ["Relaxed Textured Oxford Shirt", "North & Loom", "₹1,890", "/instagram/2.jpg", "men", "shirts", "casual-shirts"],
  ["Zari Embroidered Bridal Lehenga", "Veya Atelier", "₹7,990", "/instagram/6.jpg", "wedding-occasion", "bridal", "bridal-lehengas"],
  ["Washed Denim Overshirt", "Little Loom Co.", "₹1,290", "/instagram/7.jpg", "kids", "boys", "shirts"],
  ["Handcrafted Pearl Drop Earrings", "VÉRA", "₹890", "/catogery/JEWELRY.jpg", "jewelry", "fashion-jewelry", "earrings"],
  ["Linen Tie-Waist Midi Dress", "MIRAÉ", "₹2,890", "/instagram/8.jpg", "women", "western-wear", "dresses"],
  ["Hydrating Lip Tint Set", "LUMIÈRE BEAUTY", "₹1,890", "/catogery/glam.jpg", "glam", "makeup", "lips"],
  ["Textured Cotton Cushion Cover", "ARLO HOME", "₹690", "/catogery/homedecor.jpg", "home-decor", "home-furnishings", "cushions"],
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
