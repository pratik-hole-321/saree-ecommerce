import Image from "next/image";
import Link from "next/link";

export default function SareeCard({
  saree,
}: {
  saree: { id: string; name: string; images: string[]; price: string };
}) {
  return (
    <Link href={`/product/${saree.id}`} className="block my-4">
      <div className="aspect-[3/4] overflow-hidden bg-gray-100 relative group">
        <Image
          width={150}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          height={240}
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
