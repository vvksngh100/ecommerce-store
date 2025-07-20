import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useFilterStore } from '@/store/filterStore';
import ProductGrid from '@/components/ProductGrid';
import SearchAndFilter from '@/components/SearchAndFilter';
import ProductForm from '@/components/ProductForm';
import CartIcon from '@/components/CartIcon';

const fetchProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  return res.json();
};

const fetchCategories = async () => {
  const res = await fetch('https://fakestoreapi.com/products/categories');
  return res.json();
};

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const { searchQuery, category } = useFilterStore();
  const { data: products, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  if (isLoading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error loading products</div>;

  const filteredProducts = products?.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = category === 'all' || product.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <CartIcon />
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Our Products</h1>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {showForm ? 'Hide Form' : 'Add Product'}
        </button>
      </div>
      
      {showForm && <ProductForm onClose={() => setShowForm(false)} />}
      
      <SearchAndFilter categories={categories} />
      
      <ProductGrid products={filteredProducts} />
    </div>
  );
}