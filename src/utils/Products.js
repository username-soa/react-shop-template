import collection1 from "../assets/collections/collection1.PNG";
import collection2 from "../assets/collections/collection2.PNG";
import collection3 from "../assets/collections/collection3.PNG";
import collection4 from "../assets/collections/collection4.PNG";
import collection5 from "../assets/collections/collection5.PNG";
import collection6 from "../assets/collections/collection6.PNG";
import collection7 from "../assets/collection1.png";
import collection8 from "../assets/collection2.png";

import product1 from "../assets/products/product1.PNG";
import product1hover from "../assets/products/product1hover.PNG";
import product2 from "../assets/products/product2.PNG";
import product2hover from "../assets/products/product2hover.PNG";
import product3 from "../assets/products/product3.PNG";
import product3hover from "../assets/products/product3hover.PNG";
import product4 from "../assets/products/product4.PNG";
import product4hover from "../assets/products/product4hover.PNG";

import product1dt from "../assets/product-details/product-test.PNG";
import product2dt from "../assets/product-details/product-test1.PNG";
import product3dt from "../assets/product-details/product-test2.PNG";
import product4dt from "../assets/product-details/product-test3.PNG";

const imageList = [
  {
    id: 1,
    img: product1dt,
  },
  {
    id: 2,
    img: product2dt,
  },
  {
    id: 3,
    img: product3dt,
  },
  {
    id: 4,
    img: product4dt,
  },
  {
    id: 5,
    img: product3dt,
  },
  {
    id: 6,
    img: product4dt,
  },
];

const productList = [
  {
    price: 200,
    image: product1,
    availability: true,
    hoverImage: product1hover,
    name: "Product example 1",
    slug: "product-example-1",
    size: ["XL", "XS", "L", "M", "S"],
    colors: ["#ddd", "#ace1af", "#fd5c63"],
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    price: 200,
    image: product2,
    availability: true,
    hoverImage: product2hover,
    name: "Product example 2",
    slug: "product-example-2",
    colors: ["#ddd", "#222", "#333"],
    size: ["XL", "XS", "L", "M", "S"],
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    price: 200,
    image: product3,
    hoverImage: product3hover,
    name: "Product example 3",
    slug: "product-example-3",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    availability: true,
    size: ["XL", "XS", "L", "M", "S"],
    colors: ["#ddd", "#ace1af", "#333"],
  },
  {
    price: 200,
    image: product4,
    availability: true,
    hoverImage: product4hover,
    name: "Product example 4",
    slug: "product-example-4",
    size: ["XL", "XS", "L", "M", "S"],
    colors: ["#ace1af", "#fd5c63", "#222"],
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    price: 200,
    image: product1,
    availability: true,
    hoverImage: product1hover,
    name: "Product example 5",
    slug: "product-example-5",
    size: ["XL", "XS", "L", "M", "S"],
    colors: ["#ddd", "#fd5c63", "#222"],
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    price: 200,
    image: product2,
    availability: true,
    hoverImage: product2hover,
    name: "Product example 6",
    slug: "product-example-6",
    size: ["XL", "XS", "L", "M", "S"],
    colors: ["#ace1af", "#fd5c63", "#222"],
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    price: 200,
    image: product3,
    availability: true,
    hoverImage: product3hover,
    name: "Product example 7",
    slug: "product-example-7",
    size: ["XL", "XS", "L", "M", "S"],
    colors: ["#ddd", "#fd5c63", "#222"],
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    price: 200,
    image: product4,
    availability: false,
    hoverImage: product4hover,
    name: "Product example 8",
    slug: "product-example-8",
    size: ["XL", "XS", "L", "M", "S"],
    colors: ["#ace1af", "#fd5c63", "#222"],
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    price: 200,
    image: product1,
    availability: true,
    hoverImage: product1hover,
    name: "Product example 9",
    slug: "product-example-9",
    size: ["XL", "XS", "L", "M", "S"],
    colors: ["#ddd", "#ace1af", "#333"],
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    price: 200,
    image: product2,
    availability: false,
    hoverImage: product2hover,
    name: "Product example 10",
    slug: "product-example-10",
    size: ["XL", "XS", "L", "M", "S"],
    colors: ["#ddd", "#fd5c63", "#222"],
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
];

const collectionList = [
  {
    name: "Bottoms",
    slug: "bottoms",
    img: collection2,
    id: "UP4ISvheylc7J3RrP5ET4vYw6w03",
    description: `
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
  },
  {
    name: "Dresses",
    slug: "dresses",
    img: collection3,
    id: "UxdagTG0BXZtH1Z1Bf1ZJb976LS2",
    description: `
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
  },
  {
    name: "Fresh Arrivals",
    slug: "fresh-arrivals",
    img: collection4,
    id: "ZWTeAFyVfeORcZIdXPf2PcSNvGL2",
    description: `
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
  },
  {
    name: "Jackets & Blazers",
    slug: "jackets-blazers",
    img: collection5,
    id: "ZWTeAFyVfeORcZIdXPf2PcSNvGL2",
    description: `
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
  },
  {
    name: "Sale",
    slug: "sale",
    img: collection1,
    id: "ZWTeAFyVfeORcZIdXPf2PcSNvGL2",
    description: `
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
  },
  {
    name: "Tops",
    slug: "tops",
    img: collection6,
    id: "ZWTeAFyVfeORcZIdXPf2PcSNvGL2",
    description: `
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
  },
  {
    name: "THE BLACK BEAUTY",
    slug: "the-black-beauty",
    img: collection7,
    id: "ZWTeAFyVfeORcZIdXPf2PcSNvGL2",
    description: `
    Look sophisticated in our new collection of all-black clothing ensemble.`,
  },
  {
    name: "WINTER’S BEST",
    slug: "winter-best",
    img: collection8,
    id: "ZWTeAFyVfeORcZIdXPf2PcSNvGL2",
    description: `
    Look sophisticated in our new collection of all-black clothing ensemble.`,
  },
];

const newCollections = [
  { name: "Bottoms", slug: "bottoms", img: collection2 },
  { name: "Dresses", slug: "dresses", img: collection3 },
  { name: "Fresh Arrivals", slug: "fresh-arrivals", img: collection4 },
  { name: "Jackets & Blazers", slug: "jackets-blazers", img: collection5 },
  { name: "Sale", slug: "sale", img: collection1 },
  { name: "Tops", slug: "tops", img: collection6 },
  { name: "THE BLACK BEAUTY", slug: "the-black-beauty", img: collection7 },
  { name: "WINTER’S BEST", slug: "winter-best", img: collection8 },
];

export { productList, collectionList, newCollections, imageList };
