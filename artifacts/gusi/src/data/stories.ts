export type StoryArticle = {
  title: string;
  teaser: string;
  slug?: string;
  published?: boolean;
};

export const STORY_ARTICLES: StoryArticle[] = [
  {
    title: "Hummus vs Baba Ganoush: Which Mediterranean Spread Should You Try First?",
    teaser:
      "Two beloved spreads, two very different characters. A closer look at what sets them apart — and how to enjoy both at the table.",
    slug: "hummus-vs-baba-ganoush",
    published: true,
  },
  {
    title: "The Rise of House Infused Vodka in NYC Cocktail Culture",
    teaser:
      "From horseradish to seasonal fruit, house infusions are reshaping how New York drinks. Here's why the craft matters.",
  },
  {
    title: "Why Natural Wine Is Becoming a Favorite Among NYC Diners",
    teaser:
      "Minimal intervention, maximum character. What's behind the natural wine movement — and how we choose ours.",
  },
];
