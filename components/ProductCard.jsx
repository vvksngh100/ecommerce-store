import { useState } from 'react';
import { useCartStore } from '@/store/cartStore';
import ProductDetailsModal from './ProductDetailsModal';

export default function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <>
      <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        <div 
          className="h-48 bg-gray-100 flex items-center justify-center cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <img 
            src={product.image} 
            alt={product.title} 
            className="h-full object-contain p-4"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.title}</h3>
          <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
          <div className="flex justify-between items-center">
            <span className="font-bold">${product.price}</span>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                addToCart(product);
              }}
              className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      
      {isModalOpen && (
        <ProductDetailsModal 
          product={product}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}