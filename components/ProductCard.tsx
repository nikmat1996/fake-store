import { Product } from '@/lib/types'
import Image from 'next/image'
import AddToCart from './AddToCart'

function ProductCard({product}: {product: Product}) {
  return (
    <div className="max-w-sm w-full mx-auto bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-2xl transition-all hover:scale-[1.01]">
        <Image className="w-full h-64 object-contain " width={384} height={500} src={product.image} alt="Product Image" />
        <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 line-clamp-2">{product.title}</h2>
            <p className="text-gray-600">{product.price}</p>
            <p className="text-gray-600 mt-2">Category: <span className="font-semibold">{product.category}</span></p>
            
        </div>
        <AddToCart product={product}/>
    </div>
  )
}

export default ProductCard
