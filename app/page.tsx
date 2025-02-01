import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1 className="text-center text-6xl">Next.js Learning!</h1>
      <h2 className="text-center mb-4">
        Made by <span className="text-blue-600">BAba</span>
        <span className="text-yellow-300">Pro</span>
      </h2>
      <Image
        src="/images.jpeg"
        alt="BAba Pro"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      ></Image>
      <Link href="/users" className="text-lg">
        Go to users
      </Link>
      <ProductCard></ProductCard>
    </main>
  );
}
