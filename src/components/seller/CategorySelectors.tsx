"use client";

import { categories } from "@/data/categories";
import { useState } from "react";

export function CategorySelectors() {
  const [categorySlug, setCategorySlug] = useState("");
  const [subcategorySlug, setSubcategorySlug] = useState("");
  const [typeSlug, setTypeSlug] = useState("");
  const category = categories.find((item) => item.slug === categorySlug);
  const subcategory = category?.subcategories.find((item) => item.slug === subcategorySlug);
  const selectClass = "h-12 w-full border border-flat-border bg-white px-4 text-sm text-flat-text outline-none focus:border-flat-pink";

  return (
    <div className="grid gap-5 md:grid-cols-3">
      <label className="space-y-2 text-[11px] font-bold uppercase tracking-[0.12em] text-flat-text">
        <span>Category</span>
        <select name="category" value={categorySlug} onChange={(event) => { setCategorySlug(event.target.value); setSubcategorySlug(""); setTypeSlug(""); }} className={selectClass} required>
          <option value="">Select category</option>
          {categories.map((item) => <option key={item.slug} value={item.slug}>{item.name}</option>)}
        </select>
      </label>
      <label className="space-y-2 text-[11px] font-bold uppercase tracking-[0.12em] text-flat-text">
        <span>Subcategory</span>
        <select name="subcategory" value={subcategorySlug} onChange={(event) => { setSubcategorySlug(event.target.value); setTypeSlug(""); }} className={selectClass} disabled={!category} required>
          <option value="">Select subcategory</option>
          {category?.subcategories.map((item) => <option key={item.slug} value={item.slug}>{item.name}</option>)}
        </select>
      </label>
      <label className="space-y-2 text-[11px] font-bold uppercase tracking-[0.12em] text-flat-text">
        <span>Type</span>
        <select name="type" value={typeSlug} onChange={(event) => setTypeSlug(event.target.value)} className={selectClass} disabled={!subcategory} required>
          <option value="">Select type</option>
          {subcategory?.types.map((item) => <option key={item.slug} value={item.slug}>{item.name}</option>)}
        </select>
      </label>
    </div>
  );
}
