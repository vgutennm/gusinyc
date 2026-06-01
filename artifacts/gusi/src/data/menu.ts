export type MenuItem = {
  name: string;
  description?: string;
  price?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  note?: string;
  items: MenuItem[];
};

export const MENU_DATA: MenuCategory[] = [
  {
    id: "spreads",
    title: "Spreads",
    note: "Served with pita.",
    items: [
      { name: "Hummus", description: "Chickpea, tahini, parsley, paprika, EVOO", price: "12" },
      { name: "Tahini", price: "12" },
      { name: "Tzatziki", price: "12" },
      { name: "Baba ganoush", price: "12" },
    ],
  },
  {
    id: "starts",
    title: "Starts",
    items: [
      { name: "Pirozhki", description: "Sweet yeast dough with potatoes, cabbage, or meat", price: "6" },
      { name: "Pickled vegetables", description: "Pickles, tomatoes, cabbage", price: "16" },
      { name: "Beef tongue platter", price: "25" },
    ],
  },
  {
    id: "blinis",
    title: "Blinis",
    items: [
      { name: "Blinis with house-cured salmon", price: "28" },
      { name: "Blinis with red caviar", price: "35" },
      { name: "Stack of 10 blinis with red caviar and house-cured salmon", price: "48" },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    items: [
      { name: "Duck salad", description: "Mixed greens, apple, orange, prunes", price: "21" },
      { name: "Herring under a fur coat", description: "Ask your server about fur", price: "22" },
      { name: "Olivier", description: "With veal bologna, beef tongue, or vegetarian", price: "19" },
      { name: "Garden salad", price: "18" },
    ],
  },
  {
    id: "pelmeni-vareniki",
    title: "Pelmeni / Vareniki",
    items: [
      { name: "Beef", price: "21" },
      { name: "Beef and pork", price: "21" },
      { name: "Elk", price: "22" },
      { name: "Bison", price: "22" },
      { name: "Yak", price: "22" },
      { name: "Duck", price: "23" },
      { name: "Potato with caramelized onions", price: "21" },
    ],
  },
  {
    id: "soups",
    title: "Soups",
    items: [
      { name: "Borscht with duck", price: "18" },
      { name: "Mushroom", price: "17" },
      { name: "Solyanka", description: "Meat", price: "18" },
    ],
  },
  {
    id: "entrees",
    title: "Entrées",
    items: [
      { name: "Beef stroganoff", price: "36" },
      { name: "Branzino", price: "42" },
      { name: "Chicken Kyiv", price: "35" },
      { name: "Chicken tapaka", price: "34" },
      { name: "Duck leg", price: "24" },
      { name: "Chicken cutlets", price: "26" },
      { name: "Lamb shank", price: "39" },
      { name: "Golubtzi", description: "Beef, beef tongue, rice, sauce", price: "29" },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      { name: "Sirniki with condensed milk", price: "18" },
      { name: "Meringue", price: "16" },
      { name: "Blinis with sweet condiments", price: "16" },
      { name: "Cherry dumplings", price: "17" },
      { name: "Grillage cake", price: "16" },
    ],
  },
];
