export type Yacht = {
  name: string;
  year: number;
  length: string;
  beam: string;
  engineHours: string;
  cabins: number;
  price: string;
  image: string;
  location?: string;
};

export const featuredYachts: Yacht[] = [
  {
    name: "Sirena 58",
    year: 2023,
    length: "18.58 M",
    beam: "5.36 M",
    engineHours: "553 H",
    cabins: 3,
    price: "€ 1,295,000",
    image:
      "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1600&q=80",
    location: "Monaco",
  },
  {
    name: "Ferretti 720",
    year: 2021,
    length: "22.30 M",
    beam: "5.6 M",
    engineHours: "700 H",
    cabins: 4,
    price: "€ 2,690,000",
    image:
      "https://images.unsplash.com/photo-1552627019-947c3789ffb5?auto=format&fit=crop&w=1600&q=80",
    location: "Cannes",
  },
  {
    name: "Azimut 60",
    year: 2021,
    length: "18.28 M",
    beam: "5 M",
    engineHours: "300 H",
    cabins: 3,
    price: "€ 1,550,000",
    image:
      "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&w=1600&q=80",
    location: "Ibiza",
  },
  {
    name: "Princess 82",
    year: 2017,
    length: "25.5 M",
    beam: "5.74 M",
    engineHours: "1774 H",
    cabins: 4,
    price: "€ 2,500,000",
    image:
      "https://images.unsplash.com/photo-1520255870062-bd79d3865de7?auto=format&fit=crop&w=1600&q=80",
    location: "Antibes",
  },
  {
    name: "Ferretti 920",
    year: 2019,
    length: "28.49 M",
    beam: "6.78 M",
    engineHours: "560 H",
    cabins: 4,
    price: "€ 5,500,000",
    image:
      "https://images.unsplash.com/photo-1543039625-14cbd3802e7d?auto=format&fit=crop&w=1600&q=80",
    location: "Saint-Tropez",
  },
  {
    name: "Azimut Magellano 25",
    year: 2021,
    length: "25.22 M",
    beam: "6.32 M",
    engineHours: "1250 H",
    cabins: 4,
    price: "€ 4,500,000",
    image:
      "https://images.unsplash.com/photo-1599789197514-47270cd526b4?auto=format&fit=crop&w=1600&q=80",
    location: "Palma",
  },
];
