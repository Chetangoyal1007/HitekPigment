import React from "react";

const productsData = [
  {
    category: "Pigments & Dyes",
    products: [
      {
        name: "Golden Bronze Powder",
        description:
          "High brilliance metallic pigment used in decorative paints and coatings.",
        image: "images/golden-bronze-powder.webp",
      },
      {
        name: "Rubine Toner",
        description:
          "Strong color strength toner suitable for inks and coatings.",
        image: "/images/rubine-toner.jpeg",
      },
      {
        name: "Beta Blue / Alpha Blue",
        description:
          "High-performance blue pigments with excellent dispersion.",
        image: "/images/beta-blue.jpeg",
      },
    ],
  },
  {
    category: "Resins",
    products: [
      {
        name: "Ketonic Resin",
        description:
          "Improves gloss, adhesion, and drying in coatings and inks.",
        image: "/images/ketonic-resin.webp",
      },
      {
        name: "Malik Resin",
        description:
          "High compatibility resin for industrial paint systems.",
        image: "/images/melik-resin.jpeg",
      },
    ],
  },
  {
    category: "Synthetic Iron Oxide",
    products: [
      {
        name: "Synthetic Iron Oxide",
        description:
          "Weather-resistant pigments for construction and coatings.",
        image: "/images/synthetic-iron-oxide.jpeg",
      },
    ],
  },
  {
    category: "Carbon Black",
    products: [
      {
        name: "Carbon Black",
        description:
          "Deep black pigment with excellent UV protection.",
        image: "/images/carbon-black.jpeg",
      },
      {
        name: "Carbon Black N330",
        description:
          "Reinforcing grade carbon black for industrial use.",
        image: "/images/carbon-black-n330.jpg",
      },
    ],
  },
  {
    category: "Color Pigment",
    products: [
      {
        name: "Pigment Blue 15.0",
        description:
          "High tinting strength blue pigment.",
        image: "/images/pigment-blue.webp",
      },
      {
        name: "Pigment Green 7",
        description:
          "Durable green pigment used in plastics and coatings.",
        image: "/images/pigment-green.webp",
      },
      {
        name: "Prussian Blue",
        description:
          "Classic deep blue pigment for industrial applications.",
        image: "/images/prussian-blue.jpeg",
      },
    ],
  },
  {
    category: "Solvent Soluble Dyes",
    products: [
      {
        name: "Solvent Soluble Dyes",
        description:
          "High solubility dyes for inks, plastics, and fuels.",
        image: "/images/solvent-soluble-dyes.webp",
      },
    ],
  },
];

const Products = () => {
  return (
    <section className="py-16 bg-white dark:bg-black dark:text-white">
      <div className="container px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Our <span className="text-primary">Products</span>
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our comprehensive range of pigments, dyes, resins, and
            specialty chemicals crafted for industrial excellence.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-20">
          {productsData.map((category, index) => (
            <div key={index}>
              <h2
                data-aos="fade-up"
                className="text-2xl font-semibold mb-10 border-l-4 border-primary pl-4"
              >
                {category.category}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.products.map((product, idx) => (
                  <div
                    key={idx}
                    data-aos="fade-up"
                    className="group bg-gray-100 dark:bg-dark rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
                  >
                    {/* Image */}
                    <div className="bg-gray-200 dark:bg-gray-700 p-6 flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = "/images/placeholder.png";
                        }}
                        className="max-h-44 w-auto object-contain"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;
