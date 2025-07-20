import { useCartStore } from '@/store/cartStore';

export default function ProductDetailsModal({ product, onClose }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold">{product.title}</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-auto max-h-96 object-contain"
              />
            </div>
            
            <div className="md:w-1/2">
              <p className="text-gray-700 mb-4">{product.description}</p>
              
              <div className="space-y-2 mb-6">
                <p><span className="font-semibold">Price:</span> ${product.price}</p>
                <p><span className="font-semibold">Category:</span> {product.category}</p>
                <p>
                  <span className="font-semibold">Rating:</span> {product.rating?.rate} 
                  <span className="text-yellow-500 ml-1">★</span> 
                  ({product.rating?.count} reviews)
                </p>
              </div>
              
              <button
                onClick={() => {
                  addToCart(product);
                  onClose();
                }}
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}