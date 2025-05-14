import Link from "next/link";

export default function SareeCard({ saree }: { saree: any }) {
  return (
    <Link href={`/product/${saree.id}`} className="block my-4">
      <div className="aspect-[3/4] overflow-hidden bg-gray-100 relative group">
        <img
          src={saree.images[0]}
          alt={saree.name}
          className="w-full h-full object-cover object-top transition-transform duration-300
          ease-in-out group-hover:scale-105"
        />
      </div>
      <div className="mt-2 ml-3">
        <h2 className="text-md font-normal text-zinc-500">{saree.name}</h2>
        <p className="text-md text-zinc-600 font-bold">{saree.price}</p>
      </div>
    </Link>
  );
}
