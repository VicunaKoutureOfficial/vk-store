import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

import Salebar from "@/components/salebar";
import Marquee from "@/components/marquee";
import Navbar from "@/components/navbar";
import { Hero } from "@/components/hero";
import CreativeHubs from "@/components/creative-hubs";
import { Fashion } from "@/components/fashion";
import Faqsection from "@/components/faqsection";
import Custompics from "@/components/custompics";
import RamMerch from "@/components/ram-merch";
import CskMerch from "@/components/csk-merch";
import PokemonMerch from "@/components/pokemon-merch";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("01d4f631-6bee-42ee-9c13-06c3151dcfe9");

  return (
    <main>
      {/* <Salebar /> */}
      {/* <Navbar /> */}
      <Marquee />
      <Hero />
      <ProductList title="Featured Products" items={products} />
      <RamMerch/>
      <CskMerch/>
      <PokemonMerch/>
      <Custompics />
      <Faqsection />
      <CreativeHubs />
      {/* <Fashion /> */}
      {/* <Billboard data={billboard} /> */}
    </main>
  );
};

export default HomePage;
