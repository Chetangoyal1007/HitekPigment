import React, { useState } from "react";

const productsData = [
  {
    category: "Paints, Inks & Leather Chemicals",
    products: [
      { 
        name: "Aluminium Paste 30 (Non Leafing)",
        description: "Non-leafing aluminium paste used for coatings and inks."
      },
      { 
        name: "Aluminium Paste 30 (Leafing)",
        description: "Leafing aluminium paste for decorative coatings with a metallic finish."
      },
      { 
        name: "Beta Blue 15:3",
        description: "High-performance phthalocyanine blue pigment for inks and coatings."
      },
      { 
        name: "Carbon Black",
        description: "Widely used for black pigmentation in plastics, inks and coatings."
      },
      { name: "Phthalocyanine Green 7", description: "Bright green pigment for paints and plastics." },
      { name: "Chromocyanine Green" },
      { name: "Ketonic Resins" },
      { name: "Lemon Chrome 121 / 122" },
      { name: "Middle Chrome 131 / 132" },
      { name: "Scarlet Chrome 471 / 475" },
      { name: "Maroon Toner" },
      { name: "Prussian Blue" },
      { name: "Rubine Toner" },
      { name: "Red F4R / Red RC / Red 2B" },
      { name: "Orange 13 / Orange 5" },
      { name: "Golden Powder (Rich Gold / Pale Gold)" },
      { name: "Copper Powder" },
      { name: "Yellow Oxide / Red Oxide" },
      { name: "Zinc Stearate" }
    ],
  },

  {
    category: "Mansi Solvent Soluble Dyes",
    products: [
      { name: "Mansi Yellow GL / R", description: "Yellow dye for solvent-based applications." },
      { name: "Mansi Orange RL" },
      { name: "Mansi Fire Red G" },
      { name: "Mansi Pink 5 BLG" },
      { name: "Mansi Brown 2 RM" },
      { name: "Mansi Dark Brown 5 R" },
      { name: "Mansi Blue 2 GLN" },
      { name: "Mansi Black RE" },
      { name: "Mansi Cadbury Violet" },
      { name: "Mansi Green G2" },
      { name: "Mansi Royal Blue" },
    ],
  },

  {
    category: "IMP Solvent Soluble Dyes",
    products: [
      { name: "IMP Fire Red G" },
      { name: "IMP Yellow R" },
      { name: "IMP Orange RE / RL" },
      { name: "IMP Black RE" },
      { name: "IMP Brown 2 RM" },
      { name: "IMP Dark Brown 5 R" },
      { name: "IMP Pink 5 BLG" },
    ],
  },

  {
    category: "Paper Industry",
    products: [
      { name: "Black Oxide" },
      { name: "Carbon Black" },
      { name: "Beta Blue 15:3 / 15:4" },
      { name: "Alpha Blue" },
      { name: "Phthalocyanine Green 7" },
      { name: "Ketonic Resin" },
      { name: "Lake Red" },
      { name: "Golden Powder (Rich / Pale)" },
      { name: "Copper Powder" },
      { name: "Yellow 12 / Yellow 13" },
    ],
  },

  {
    category: "Cement & Tiles",
    products: [
      { name: "Black Oxide / Brown Oxide" },
      { name: "Yellow Oxide / Red Oxide" },
      { name: "OB / OB-1" },
      { name: "Beta Blue 15:3 / 15:4" },
      { name: "Alpha Blue" },
      { name: "Carbon Black" },
      { name: "Orange 13 / Orange 5" },
      { name: "Phthalocyanine Green 7" },
    ],
  },

  {
    category: "Plastic Industry",
    products: [
      { name: "Beta Blue 15:3" },
      { name: "Alpha Blue" },
      { name: "Carbon Black" },
      { name: "Phthalocyanine Green 7" },
      { name: "Lake Red" },
      { name: "Lemon / Middle / Scarlet Chrome" },
      { name: "Maroon Toner / Rubine Toner" },
      { name: "Red F4R / Red RC / Red 2B" },
      { name: "Yellow 12 / Yellow 13" },
      { name: "Orange 13 / Orange 5" },
      { name: "OB / OB-1" },
      { name: "Yellow Oxide / Red Oxide" },
    ],
  },
];



const Products = () => {
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null); // NEW

  return (
    <section className="py-20 bg-gray-50 dark:bg-black dark:text-white">
      <div className="container px-4 max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold">
            Our <span className="text-primary">Product Portfolio</span>
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A diversified range of pigments, dyes, resins, and specialty chemicals
            serving multiple industrial applications.
          </p>
        </div>

        {/* Search */}
        <div className="mb-12 flex justify-center">
          <input
            type="text"
            placeholder="Search product name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full max-w-xl
              px-5 py-3
              rounded-xl
              border border-gray-300 dark:border-gray-700
              bg-white dark:bg-gray-900
              focus:outline-none focus:ring-2 focus:ring-primary
            "
          />
        </div>

        {/* Accordion Categories */}
        <div className="space-y-6">
          {productsData.map((category, index) => {
            const filteredProducts = category.products.filter((p) =>
              p.name.toLowerCase().includes(search.toLowerCase())
            );

            if (filteredProducts.length === 0) return null;

            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white dark:bg-dark rounded-2xl shadow-md overflow-hidden"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="
                    w-full
                    flex justify-between items-center
                    px-8 py-5
                    text-left
                    font-semibold text-lg
                    hover:bg-gray-100 dark:hover:bg-gray-800
                    transition
                  "
                >
                  <span>{category.category}</span>
                  <span
                    className={`transform transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {/* Accordion Body */}
                {isOpen && (
                  <div className="px-8 pb-8 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex flex-wrap gap-3">
                      {filteredProducts.map((product, idx) => (
                        <span
                          key={idx}
                          onClick={() => setSelectedProduct(product)} // OPEN MODAL
                          className="
                            px-4 py-2
                            text-sm font-medium
                            rounded-full
                            bg-primary/10 text-primary
                            hover:bg-primary hover:text-white
                            transition cursor-pointer
                          "
                        >
                          {product.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

      {/* PRODUCT DETAILS MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl max-w-md w-full">

            <h2 className="text-2xl font-bold mb-3">
              {selectedProduct.name}
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {selectedProduct.description || "No additional details available."}
            </p>

            <button
              onClick={() => setSelectedProduct(null)}
              className="px-4 py-2 bg-primary text-white rounded-lg w-full hover:bg-primary/80 transition"
            >
              Close
            </button>

          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
