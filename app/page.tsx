import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello World!</h1>
      <h2>Made by BAbaPro</h2>
      <Image src="/images.jpeg" alt="BAba Pro" width={500} height={300}></Image>
      <Link href="/users">Go to users</Link>
      <ProductCard></ProductCard>
    </main>
  );
}
