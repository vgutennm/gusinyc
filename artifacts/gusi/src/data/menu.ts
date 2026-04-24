export type MenuItem = {
  name: string;
  description?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  note?: string;
  items: MenuItem[];
};

export const MENU_DATA: MenuCategory[] = [
  {
    id: "cold-starters",
    title: "Cold Starters",
    items: [
      { name: "Herring under a fur coat" },
      { name: "Olivier salad with beef tongue" },
      { name: "American wagyu tartare" },
      { name: "Toast with smoked oyster" },
      { name: "Creamy herring forshmak toast" },
      { name: "Pickled tomatoes, cucumbers, sauerkraut, and mushrooms" },
      { name: "Green salad with sorrel pesto" },
      { name: "Trout tartare with crackers and red caviar" },
    ],
  },
  {
    id: "caviar",
    title: "Caviar",
    note: "Served with fresh blini and smoked sour cream.",
    items: [
      { name: "Sturgeon caviar" },
      { name: "Kaluga caviar" },
      { name: "Trout roe" },
      { name: "Pike roe" },
    ],
  },
  {
    id: "hot-starters",
    title: "Hot Starters",
    items: [
      { name: "Blini with salmon, cream, and dill" },
      { name: "Pirozhki: cabbage, potato, egg and onion, or meat" },
      { name: "Mini stuffed cabbage with whipped sour cream" },
      { name: "Vareniki with baked potato, porcini mushrooms, and truffle sauce" },
      { name: "Buckwheat with mushrooms and parmesan" },
      { name: "Chebureki" },
    ],
  },
  {
    id: "soups",
    title: "Soups",
    items: [
      { name: "Borscht with braised cheek, sour cream, and garlic pampushki" },
      { name: "Sterlet and flounder ukha" },
      { name: "Porcini mushroom soup" },
      { name: "Pelmeni with broth" },
      { name: "Solyanka" },
      { name: "Okroshka" },
      { name: "Svekolnik" },
    ],
  },
  {
    id: "mains",
    title: "Mains",
    items: [
      { name: "Beef stroganoff with fettuccine" },
      { name: "Chicken Kyiv with buckwheat" },
      { name: "Chicken tapaka" },
      { name: "Duck breast with baked apples" },
      { name: "Crab cake with green salad" },
      { name: "Salmon kulebyaka with beurre blanc and caviar" },
      { name: "Burger with porcini sauce and fries" },
      { name: "Filet mignon with pepper sauce" },
      { name: "Christmas goose with apples and cranberry sauce" },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      { name: "Napoleon" },
      { name: "Medovik" },
      { name: "Rum baba" },
      { name: "Bird's milk" },
      { name: "Pavlova" },
      { name: "Vareniki with cherry and strawberry" },
      { name: "Sorbets and ice creams" },
      { name: "Apple sharlotka" },
      { name: "Carrot cake" },
    ],
  },
  {
    id: "signature-rituals",
    title: "Signature Rituals",
    items: [
      { name: "Complimentary bread basket with swan-shaped butter" },
      { name: "Fairytale tasting menu" },
      { name: "Seasonal cocktails in Christmas ornament-style glasses" },
      { name: "Condensed milk walnut sweet served at the end of dinner" },
      { name: "Broth cup served with lunch pirozhki or hot appetizers" },
    ],
  },
];
