export type MenuItem = {
  name: string;
  description?: string;
  price?: string;
  highlight?: boolean;
};

export type MenuCategory = {
  id: string;
  title: string;
  note?: string;
  items: MenuItem[];
};

export const MENU_DATA: MenuCategory[] = [
  {
    id: "starters",
    title: "Starters",
    items: [
      { name: "Mixed Olives", price: "6" },
      { name: "Pickled Vegetables", price: "16" },
      { name: "Pickled Cucumbers", description: "Low salted, salted, or house marinated" },
    ],
  },
  {
    id: "spreads",
    title: "Spreads",
    note: "Served with pita.",
    items: [
      { name: "Hummus", description: "Chickpea, tahini, parsley, paprika, EVOO", price: "12" },
      { name: "Tahini", price: "12" },
      { name: "Tzatziki", price: "12" },
      { name: "Baba Ganoush", price: "12" },
      { name: "Spicy Feta", price: "12" },
    ],
  },
  {
    id: "appetizers",
    title: "Appetizers",
    items: [
      { name: "Pirozhki", description: "Sweet yeast dough with potatoes, cabbage, or meat", price: "6" },
      { name: "Eggplant Carpaccio", price: "18" },
      { name: "Beef Tongue Platter", price: "25" },
      { name: "Duck Leg", price: "24" },
      { name: "Prime Beef Hummus", price: "24" },
      { name: "Salo Plate", price: "22" },
      { name: "Roasted Cabbage with Wildflower Honey", price: "18" },
      { name: "Cauliflower", price: "18" },
    ],
  },
  {
    id: "blinis-caviar",
    title: "Blinis & Caviar",
    items: [
      { name: "Blinis with House-Cured Salmon", price: "28" },
      { name: "Blinis with Red Caviar", description: "70g", price: "35" },
      { name: "Stack of 10 Blinis with House-Cured Salmon and Red Caviar", description: "70g", price: "49" },
      { name: "Black Caviar — Osetra", description: "2 oz", price: "110" },
      { name: "Black Caviar — Royal", description: "2 oz", price: "135" },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    items: [
      { name: "Village Garden Salad with Tahini", price: "18", highlight: true },
      { name: "Herring Under a Fur Coat", description: "Ask your server about fur", price: "22" },
      { name: "Olivier", description: "With veal bologna, beef tongue, or vegetarian", price: "19", highlight: true },
      { name: "Three Tomato Salad with Feta", price: "19" },
    ],
  },
  {
    id: "pelmeni-vareniki",
    title: "Pelmeni / Vareniki",
    items: [
      { name: "Beef", price: "21" },
      { name: "Beef and Pork", price: "21" },
      { name: "Elk", price: "22" },
      { name: "Bison", price: "22" },
      { name: "Yak", price: "22" },
      { name: "Duck", price: "23" },
      { name: "Salmon with Tartar Sauce", price: "21" },
      { name: "Vareniki with Potatoes and Caramelized Onions", price: "21", highlight: true },
    ],
  },
  {
    id: "soups",
    title: "Soups",
    items: [
      { name: "Borscht with Duck", price: "18" },
      { name: "Mushroom", price: "17" },
      { name: "Okroshka", description: "Kvas or kefir", price: "16" },
    ],
  },
  {
    id: "entrees",
    title: "Entrées",
    items: [
      { name: "Beef Stroganoff", price: "36" },
      { name: "Chicken Kyiv", price: "35" },
      { name: "Chicken Tapaka", price: "34" },
      { name: "Chicken Cutlets", price: "28" },
      { name: "Lamb Shank", price: "39" },
      { name: "Golubtzi", description: "Beef, beef tongue, rice, sauce", price: "29", highlight: true },
      { name: "Whole Market Fish", description: "Served with roasted potatoes and schoug", price: "42" },
      { name: "Lamb Lula Kebab", price: "37" },
      { name: "Beef Kebab", price: "37" },
    ],
  },
  {
    id: "dessert",
    title: "Dessert",
    items: [
      { name: "Sirniki", description: "With condensed milk, jam, sour cream", price: "18" },
      { name: "Meringue", price: "16" },
      { name: "Sweet Blinis", price: "16" },
      { name: "Cherry Dumplings", price: "17" },
      { name: "Grillage Cake", price: "16" },
      { name: "Halva", price: "16" },
      { name: "Ice Cream", price: "12" },
    ],
  },
  {
    id: "coffee",
    title: "Coffee",
    note: "Devoción Coffee.",
    items: [
      { name: "Espresso", price: "5" },
      { name: "Cappuccino", price: "8" },
      { name: "Latte", price: "8" },
      { name: "Americano", price: "7" },
      { name: "Iced Coffee", price: "7" },
    ],
  },
  {
    id: "tea",
    title: "Tea",
    items: [
      { name: "Black English Breakfast", price: "5" },
      { name: "Black Currant", price: "5" },
      { name: "Green", price: "5" },
      { name: "Camomile", price: "5" },
      { name: "Herbal Orange", price: "5" },
      { name: "Decaf", price: "5" },
      { name: "Pot", price: "10" },
    ],
  },
];
