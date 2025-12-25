import React, { useState } from "react";

/* =======================
   PRODUCTS DATA (UNCHANGED)
======================= */

const productsData = [
  {
    category: "Paints & Inks",
    subCategories: [
      {
        subCategory: "",
        products: [
          { name: "Aluminium Stearate", description: "Aluminium soap used as a thickener, water repellent, and anti-settling agent in paints and inks." },
          { name: "Aluminium Paste 30 (Non Leafing)", description: "Non-leafing aluminium paste for uniform metallic appearance in industrial paints and printing inks." },
          { name: "Aluminium Paste 30 (Leafing)", description: "Leafing aluminium paste forming a reflective metallic layer, widely used in decorative paints and inks." },
          { name: "Golden Powder (Rich Gold)", description: "High-brilliance metallic gold powder used for premium decorative paints and printing inks." },
          { name: "Golden Powder (Pale Gold)", description: "Light-shade metallic gold pigment used for subtle decorative finishes." },
          { name: "Copper Powder", description: "Metallic copper pigment used for antique, bronze, and metallic effects." },
          { name: "Beta Blue 15:3", description: "Phthalocyanine blue pigment offering excellent color strength." },
          { name: "Beta Blue 15:4", description: "Green-shade phthalocyanine blue pigment with superior heat resistance." },
          { name: "Alpha Blue", description: "High-performance organic blue pigment." },
          { name: "Alpha Plus", description: "High-purity organic pigment to enhance color strength." },
          { name: "Prussian Blue", description: "Deep blue inorganic pigment." },
          { name: "Phthalocyanine Green 7", description: "Bright bluish-green pigment with excellent weather resistance." },
          { name: "Chromocyanine Green", description: "High-opacity green pigment." },
          { name: "Carbon Black", description: "Primary black pigment providing deep color and UV protection." },
          { name: "Lemon Chrome 121", description: "Bright yellow chrome pigment." },
          { name: "Lemon Chrome 122", description: "High-opacity yellow chrome pigment." },
          { name: "Middle Chrome 131", description: "Medium-shade yellow pigment." },
          { name: "Middle Chrome 132", description: "Durable yellow pigment." },
          { name: "Yellow 12", description: "Organic yellow pigment for inks and paints." },
          { name: "Yellow 13", description: "High-performance yellow pigment." },
          { name: "Yellow Oxide", description: "Iron oxide yellow pigment." },
          { name: "Scarlet Chrome 471", description: "Reddish-orange chrome pigment." },
          { name: "Scarlet Chrome 475", description: "High-intensity scarlet pigment." },
          { name: "Maroon Toner", description: "Deep maroon organic toner pigment." },
          { name: "Rubine Toner", description: "High-strength red toner pigment." },
          { name: "Red F4R", description: "Bright red pigment." },
          { name: "Red RC", description: "Bluish-red organic pigment." },
          { name: "Red 2B", description: "Strong red pigment." },
          { name: "Red Oxide", description: "Iron oxide red pigment." },
          { name: "Orange 13", description: "High-visibility orange pigment." },
          { name: "Orange 5", description: "Bright orange pigment." },
          { name: "Ketonic Resins", description: "Synthetic resins improving gloss and adhesion." },
          { name: "Zinc Stearate", description: "Lubricant and release agent for coatings and inks." }
        ]
      },
      {
        subCategory: "IMP Solvent Soluble Dyes",
        products: [
          { name: "IMP Fire Red G", description: "High-performance red solvent soluble dye used in printing inks and coating formulations." },
          { name: "IMP Yellow R", description: "Reddish-yellow solvent dye offering good transparency and color strength for inks." },
          { name: "IMP Orange RE", description: "Bright orange solvent soluble dye suitable for packaging and decorative ink applications." },
          { name: "IMP Orange RL", description: "Strong orange solvent dye providing vivid coloration and excellent dispersion in inks." },
          { name: "IMP Black RE", description: "High-jetness black solvent soluble dye widely used in printing and industrial inks." },
          { name: "IMP Brown 2 RM", description: "Solvent soluble brown dye producing warm brown shades in ink and lacquer systems." },
          { name: "IMP Dark Brown 5 R", description: "Deep brown solvent dye offering consistent shade and good solvent compatibility." },
          { name: "IMP Pink 5 BLG", description: "Bright pink solvent dye used in decorative inks and specialty coating applications." }
        ]
      },
      {
        subCategory: "MANSI Solvent Soluble Dyes",
        products: [
          { name: "MANSI Yellow GL", description: "Bright yellow solvent soluble dye." },
          { name: "MANSI Yellow R", description: "Reddish-yellow solvent dye." },
          { name: "MANSI Orange RL", description: "High-strength orange solvent dye." },
          { name: "MANSI Fire Red G", description: "Brilliant red solvent dye." },
          { name: "MANSI Pink 5 BLG", description: "Vibrant pink solvent dye." },
          { name: "MANSI Brown 2 RM", description: "Warm brown solvent dye." },
          { name: "MANSI Dark Brown 5 R", description: "Deep brown solvent dye." },
          { name: "MANSI Blue 2 GLN", description: "Bright blue solvent dye." },
          { name: "MANSI Black RE", description: "Deep black solvent dye." },
          { name: "MANSI Cadbury Violet", description: "Rich violet solvent dye." },
          { name: "MANSI Green G2", description: "Bright green solvent dye." },
          { name: "MANSI Royal Blue", description: "Intense royal blue solvent dye." }
        ]
      }
    ]
  },

  {
  category: "Tin Stabalizer",
  description:
    "Iron oxide pigments specially formulated for cement, concrete, tiles, and construction applications, offering excellent alkali resistance, weather durability, and long-lasting color stability.",

  products: [
    {
      name: "Anti Money Tin For Garden Pipe",
      description:
        "Iron oxide black pigment used in cement and tile applications to produce deep black and gray shades with excellent durability and weather resistance."
    },
    {
      name: "MTS FOR PVC ",
      description:
        "Iron oxide brown pigment providing natural earthy brown tones in cement blocks, tiles, and concrete products."
    },
  ]
},
{
  category: "Cement & Tiles",
  description:
    "Iron oxide pigments specially formulated for cement, concrete, tiles, and construction applications, offering excellent alkali resistance, weather durability, and long-lasting color stability.",

  products: [
    {
      name: "Black Oxide",
      description:
        "Iron oxide black pigment used in cement and tile applications to produce deep black and gray shades with excellent durability and weather resistance."
    },
    {
      name: "Brown Oxide",
      description:
        "Iron oxide brown pigment providing natural earthy brown tones in cement blocks, tiles, and concrete products."
    },
    {
      name: "Yellow Oxide",
      description:
        "Iron oxide yellow pigment offering excellent alkali stability and UV resistance for cement-based and tile applications."
    },
    {
      name: "Red Oxide",
      description:
        "High-purity iron oxide red pigment widely used in cement, concrete, and tiles for long-lasting and uniform red coloration."
    }
  ]
},
{
  category: "Leather Chemicals",
  description:
    "Specialty pigments, metallics, resins, and dyes used in leather finishing and surface treatment applications to achieve uniform color, smooth texture, and long-lasting durability.",

  products: [
    
    
    {
      name: "Aluminium Paste 30 (Leafing)",
      description:
        "Leafing aluminium paste used to create reflective metallic effects in decorative leather coatings."
    },
    {
      name: "Beta Blue 15:3",
      description:
        "Phthalocyanine blue pigment used in leather coatings to produce bright and durable blue shades."
    },
    {
      name: "Beta Blue 15:4",
      description:
        "Green-shade phthalocyanine blue pigment offering improved shade depth and durability in leather finishes."
    },
    {
      name: "Alpha Plus",
      description:
        "High-purity organic pigment used to enhance color strength and dispersion in leather finishing systems."
    },
    {
      name: "Carbon Black",
      description:
        "Widely used black pigment in leather finishes to achieve deep black shades with excellent coverage."
    },
    {
      name: "Phthalocyanine Green 7",
      description:
        "High-performance green pigment used in leather finishing to obtain vibrant green tones with good fastness."
    },
    {
      name: "Chromocyanine Green",
      description:
        "High-opacity green pigment providing strong color strength in leather surface coatings."
    },
    
    {
      name: "Lemon Chrome 121",
      description:
        "Bright yellow chrome pigment used in decorative leather finishes requiring strong opacity."
    },
    {
      name: "Lemon Chrome 122",
      description:
        "High-opacity yellow pigment suitable for leather coating applications."
    },
    {
      name: "Middle Chrome 131",
      description:
        "Medium-shade yellow pigment used in leather finishes for balanced yellow tones."
    },
    {
      name: "Middle Chrome 132",
      description:
        "Durable yellow pigment providing consistent color in leather finishing systems."
    },
    {
      name: "Scarlet Chrome 471",
      description:
        "Reddish-orange chrome pigment used in leather coatings for bright decorative shades."
    },
    {
      name: "Scarlet Chrome 475",
      description:
        "High-intensity scarlet pigment delivering vivid coloration in leather finishes."
    },
    {
      name: "Maroon Toner",
      description:
        "Organic toner pigment used in leather finishing to produce deep maroon and burgundy shades."
    },
   
    {
      name: "Rubine Toner",
      description:
        "Red toner pigment providing bright and uniform red shades in leather finishing applications."
    },
    {
      name: "Red F4R",
      description:
        "Bright red pigment suitable for leather finishes requiring high color strength."
    },
    {
      name: "Red RC",
      description:
        "Bluish-red pigment used in leather coatings for vibrant red tones."
    },
    {
      name: "Red 2B",
      description:
        "Strong red pigment offering good coverage and durability in leather finishing systems."
    },
    {
      name: "Orange 13",
      description:
        "High-visibility orange pigment used in decorative leather finishes."
    },
    {
      name: "Orange 5",
      description:
        "Bright orange pigment suitable for leather coating and coloring applications."
    },
    {
      name: "Golden Powder (Rich Gold)",
      description:
        "Metallic gold powder used to create premium decorative gold effects on leather surfaces."
    },
    {
      name: "Golden Powder (Pale Gold)",
      description:
        "Light-shade metallic gold pigment used for subtle metallic finishes on leather."
    },
    
    {
      name: "Yellow Oxide",
      description:
        "Iron oxide yellow pigment used in leather coloring for natural yellow and tan shades."
    },
    {
      name: "Red Oxide",
      description:
        "Iron oxide red pigment used in leather finishing for earthy red and brown tones."
    },
    {
      name: "Zinc Stearate",
      description:
        "Lubricating and release agent used in leather finishes to improve smoothness and water resistance."
    }
  ]
},

{ category: "Plastic Industry", description: "High-performance pigments and additives designed for plastic processing applications, providing excellent heat resistance, dispersion, and long-term color stability in polymer systems.", products: [ { name: "Beta Blue 15:3", description: "Phthalocyanine blue pigment offering excellent heat stability and color strength for plastic masterbatches and molded products." }, 
  { name: "Alpha Blue", description: "Organic blue pigment used in plastic applications requiring strong color strength and uniform dispersion." },
   { name: "Carbon Black", description: "Widely used black pigment providing deep color, UV protection, and conductivity in plastic products." },
    { name: "Phthalocyanine Green 7", description: "High-performance green pigment with excellent weather resistance and thermal stability for plastics." }, 
    { name: "Lake Red", description: "Organic red pigment used in plastic coloring for producing bright and consistent red shades." }, 
    { name: "Lemon Chrome 121", description: "Bright yellow chrome pigment used in rigid plastic applications requiring strong opacity." },
     { name: "Lemon Chrome 122", description: "High-opacity yellow pigment suitable for plastic products with decorative and industrial uses." },
      { name: "Middle Chrome 131", description: "Medium-shade yellow pigment commonly used in molded plastic goods." },
       { name: "Middle Chrome 132", description: "Durable yellow pigment offering good heat resistance for plastic processing." }, { name: "Scarlet Chrome 471", description: "Reddish-orange pigment used in plastic applications requiring high visibility." }, { name: "Scarlet Chrome 475", description: "High-intensity scarlet pigment providing bright shades in plastic products." }, { name: "Maroon Toner", description: "Organic toner pigment used in plastics for deep maroon and burgundy shades." }, { name: "Rubine Toner", description: "Red toner pigment offering strong tinting strength and uniform dispersion in plastics." }, { name: "Red F4R", description: "Bright red pigment suitable for plastic molding and extrusion processes." }, { name: "Red RC", description: "Bluish-red organic pigment used in plastic applications requiring vivid coloration." }, { name: "Red 2B", description: "Strong red pigment offering good heat resistance for plastic processing." }, { name: "Yellow 12", description: "Organic yellow pigment used in plastics for bright and transparent shades." }, { name: "Yellow 13", description: "High-performance yellow pigment offering excellent color strength in plastic applications." }, { name: "OB", description: "Optical brightener used in plastics to enhance whiteness and brightness." }, { name: "OB-1", description: "High-temperature optical brightener widely used in engineering plastics and masterbatches." }, { name: "Orange 13", description: "High-visibility orange pigment suitable for plastic products and masterbatches." }, { name: "Orange 5", description: "Bright orange pigment used in decorative and industrial plastic items." }, 
  { name: "Yellow Oxide", description: "Iron oxide pigment offering excellent weather and heat resistance for plastic products." },
   { name: "Red Oxide", description: "Iron oxide red pigment used in plastic applications requiring durability and stability." } ] } ];

/* =======================
   COMPONENT
======================= */

const Products = () => {
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const hasMatch = (category) => {
    if (category.subCategories) {
      return category.subCategories.some(sub =>
        sub.products.some(p =>
          p.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
    return category.products.some(p =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-black dark:text-white">
      <div className="container max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold">
            Our <span className="text-primary">Product Portfolio</span>
          </h1>
        </div>

        {/* Search */}
        <div className="mb-12 flex justify-center">
          <input
            type="text"
            placeholder="Search product name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-xl px-5 py-3 rounded-xl border bg-white dark:bg-gray-900"
          />
        </div>

        {/* Accordion */}
        <div className="space-y-6">
          {productsData.map((category, index) => {
            const isOpen =
              search.trim() !== ""
                ? hasMatch(category)
                : openIndex === index;

            if (search && !hasMatch(category)) return null;

            return (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl shadow">
                <button
                  onClick={() => {
                    if (!search.trim()) {
                      setOpenIndex(isOpen ? null : index);
                    }
                  }}
                  className="w-full flex justify-between px-8 py-5 font-semibold text-lg"
                >
                  {category.category}
                  <span className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-8 space-y-6">
                    {category.subCategories ? (
                      category.subCategories
                        .filter(sub =>
                          sub.products.some(p =>
                            p.name.toLowerCase().includes(search.toLowerCase())
                          )
                        )
                        .map((sub, i) => (
                          <div key={i}>
                            {sub.subCategory && (
                              <h2 className="text-lg font-semibold text-blue-600 mb-3">
                                {sub.subCategory}
                              </h2>
                            )}
                            <div className="flex flex-wrap gap-3">
                              {sub.products
                                .filter(p =>
                                  p.name.toLowerCase().includes(search.toLowerCase())
                                )
                                .map((product, idx) => (
                                  <span
                                    key={idx}
                                    onClick={() => setSelectedProduct(product)}
                                    className="px-4 py-2 rounded-full bg-primary/10 text-primary cursor-pointer hover:bg-primary hover:text-white transition"
                                  >
                                    {product.name}
                                  </span>
                                ))}
                            </div>
                          </div>
                        ))
                    ) : (
                      <div className="flex flex-wrap gap-3">
                        {category.products
                          .filter(p =>
                            p.name.toLowerCase().includes(search.toLowerCase())
                          )
                          .map((product, idx) => (
                            <span
                              key={idx}
                              onClick={() => setSelectedProduct(product)}
                              className="px-4 py-2 rounded-full bg-primary/10 text-primary cursor-pointer hover:bg-primary hover:text-white"
                            >
                              {product.name}
                            </span>
                          ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl max-w-md w-full">
            <h2 className="text-2xl font-bold mb-3">{selectedProduct.name}</h2>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              {selectedProduct.description || "No additional details available."}
            </p>
            <button
              onClick={() => setSelectedProduct(null)}
              className="w-full bg-primary text-white py-2 rounded-lg"
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
