import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PoojaCard from "@/components/PoojaCard";
import poojaItems from "@/data/pooja-items.json";
import { Search, Filter } from "lucide-react";
import { Helmet } from 'react-helmet-async';

export default function Seva() {
  const [displayedItems, setDisplayedItems] = useState(8);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("price-asc");

  const filteredAndSortedItems = useMemo(() => {
    let items = poojaItems.filter((item) => {
      const q = search.toLowerCase();
      return (
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        (item.deity && item.deity.toLowerCase().includes(q))
      );
    });
    if (sort === "price-asc") items.sort((a, b) => Number(a.price) - Number(b.price));
    else if (sort === "price-desc") items.sort((a, b) => Number(b.price) - Number(a.price));
    else if (sort === "name-asc") items.sort((a, b) => a.name.localeCompare(b.name));
    else if (sort === "name-desc") items.sort((a, b) => b.name.localeCompare(a.name));
    return items;
  }, [search, sort]);

  // Infinite scroll effect, optimized for mobile (no spinner, loads earlier)
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 600 &&
        displayedItems < filteredAndSortedItems.length
      ) {
        setDisplayedItems((prev) => Math.min(prev + 8, filteredAndSortedItems.length));
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [displayedItems, filteredAndSortedItems.length]);

  return (
    <>
      <Helmet>
        <title>Temple Seva - Balaji Mandir Charkop</title>
        <meta name="description" content="Participate in sacred rituals and poojas at Balaji Mandir Charkop. Choose from a variety of spiritual services and receive divine blessings." />
        <meta property="og:title" content="Temple Seva - Balaji Mandir Charkop" />
        <meta property="og:description" content="Participate in sacred rituals and poojas at Balaji Mandir Charkop. Choose from a variety of spiritual services and receive divine blessings." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tirupatibalajitemplecharkop.com/seva" />
      </Helmet>
      <div className="pt-16">
        <section className="py-16 bg-spiritual-beige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-deep-brown mb-2">Temple Seva</h2>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-1 bg-peacock-green rounded-full"></div>
              </div>
              <p className="text-xl text-deep-brown/70 max-w-3xl mx-auto">
                Participate in sacred rituals and poojas. Choose from our variety of spiritual services and receive divine blessings.
              </p>
            </div>

            {/* Search & Sort Controls */}
            <div className="mb-10">
              <div className="bg-white rounded-xl shadow-spiritual p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="relative w-full md:w-1/2">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-peacock-green" />
                  <input
                    type="text"
                    placeholder="Search seva by name, description, or deity..."
                    value={search}
                    onChange={e => { setSearch(e.target.value); setDisplayedItems(8); }}
                    className="w-full pl-10 pr-4 py-2 border border-light-saffron rounded-lg focus:outline-none focus:ring-2 focus:ring-deep-saffron bg-spiritual-beige"
                  />
                </div>
                <div className="relative w-full md:w-48">
                  <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-peacock-green" />
                  <select
                    value={sort}
                    onChange={e => setSort(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-light-saffron rounded-lg focus:outline-none focus:ring-2 focus:ring-deep-saffron bg-spiritual-beige"
                  >
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="name-asc">Name: A-Z</option>
                    <option value="name-desc">Name: Z-A</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Seva Grid */}
            <div className="bg-white/80 rounded-2xl shadow-spiritual p-4 md:p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredAndSortedItems.slice(0, displayedItems).map((pooja, idx) => (
                  <motion.div
                    key={pooja.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                  >
                    <PoojaCard pooja={{ ...pooja, price: Number(pooja.price) }} />
                  </motion.div>
                ))}
              </div>

              {/* Infinite scroll: No more View More button */}
              {filteredAndSortedItems.length === 0 && (
                <div className="text-center text-deep-brown/70 mt-8 flex flex-col items-center">
                  <span className="text-4xl mb-2">🙏</span>
                  <span>No sevas found. Try a different search or filter.</span>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

/* Add fade-in animation */
// In your global CSS (index.css or similar), add:
// .animate-fade-in-up { animation: fadeInUp 0.5s both; }
// @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: none; } }
