import AddToCart from "@/components/AddToCart";
import Image from "next/image";

export default async function Page({ params }: { params: { id: string } }) {
    
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
    const product = await res.json();

    return <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-900 text-white p-4">
        <div className="max-w-2xl w-full bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col">
            <Image 
                src={product.image} 
                alt={product.title} 
                width={600} 
                height={600} 
                className="object-contain w-full h-96"
            />
            <div className="p-6">
                <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                <p className="text-xl mb-2">Price: ${product.price}</p>
                <p className="text-lg mb-2">Category: {product.category}</p>
                <p className="text-md mb-4">{product.description}</p>
            </div>
            <AddToCart product={product} />
        </div>
    </div>
  }