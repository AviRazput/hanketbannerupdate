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
  // Example:
  // ["Midnight Blue Anarkali", "Biba", "₹3,499", "/instagram/4.jpg", "women", "indian-wear", "suit-sets"],
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
