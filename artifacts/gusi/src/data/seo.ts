import { BLOG_POSTS } from "./posts";
import {
  PAGE_TITLE as BLOG_TITLE,
  PAGE_DESCRIPTION as BLOG_DESCRIPTION,
} from "@/pages/Blog";
import {
  PAGE_TITLE as PRESS_TITLE,
  PAGE_DESCRIPTION as PRESS_DESCRIPTION,
} from "@/pages/Press";
import {
  PAGE_TITLE as EVENTS_TITLE,
  PAGE_DESCRIPTION as EVENTS_DESCRIPTION,
} from "@/pages/PrivateEvents";
import {
  PAGE_TITLE as STORY_TITLE,
  PAGE_DESCRIPTION as STORY_DESCRIPTION,
  STORY_FAQ,
} from "@/pages/Story";
import {
  PAGE_TITLE as MENU_TITLE,
  PAGE_DESCRIPTION as MENU_DESCRIPTION,
  MENU_FAQ,
} from "@/pages/Menu";
import {
  PAGE_TITLE as RESERVATIONS_TITLE,
  PAGE_DESCRIPTION as RESERVATIONS_DESCRIPTION,
  RESERVATIONS_FAQ,
} from "@/pages/Reservations";
import {
  PAGE_TITLE as CONTACT_TITLE,
  PAGE_DESCRIPTION as CONTACT_DESCRIPTION,
  CONTACT_FAQ,
} from "@/pages/Contact";

export const SITE_URL = "https://gusi.nyc";

export type Breadcrumb = { name: string; item: string };

export type PrerenderPage = {
  /** Route path rendered by the app (also the output directory in dist) */
  path: string;
  /** When true, the index.html template head is kept untouched (homepage) */
  useTemplateHead?: boolean;
  title: string;
  description: string;
  canonical: string;
  robots: string;
  ogType: "website" | "article";
  image: string;
  imageAlt: string;
  breadcrumbs: Breadcrumb[];
  /** Page-level FAQ rendered as a FAQPage schema (non-article pages) */
  faq?: { question: string; answer: string }[];
  article?: {
    headline: string;
    datePublished: string;
    dateModified: string;
    faq: { question: string; answer: string }[];
  };
};

const DEFAULT_ROBOTS =
  "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
const DEFAULT_IMAGE = `${SITE_URL}/brand/gusi-share-card-og.webp`;
const DEFAULT_IMAGE_ALT =
  "GUSI Restaurant — cream wordmark on a deep burgundy damask background, the brand mark of GUSI in Greenwich Village, NYC";

const HOME_CRUMB: Breadcrumb = { name: "Home", item: `${SITE_URL}/` };

const blogPostPages: PrerenderPage[] = Object.values(BLOG_POSTS).map(
  (post) => ({
    path: `/blog/${post.slug}`,
    title: post.metaTitle,
    description: post.metaDescription,
    canonical: `${SITE_URL}/blog/${post.slug}`,
    robots: DEFAULT_ROBOTS,
    ogType: "article",
    image: `${SITE_URL}${post.image}`,
    imageAlt: post.imageAlt,
    breadcrumbs: [
      HOME_CRUMB,
      { name: "Blog", item: `${SITE_URL}/blog` },
      { name: post.imageAlt, item: `${SITE_URL}/blog/${post.slug}` },
    ],
    article: {
      headline: post.metaTitle,
      datePublished: post.datePublished,
      dateModified: post.dateModified ?? post.datePublished,
      faq: post.faq,
    },
  }),
);

export const PRERENDER_PAGES: PrerenderPage[] = [
  {
    path: "/",
    useTemplateHead: true,
    title: "GUSI | Modern Eastern European Restaurant in Greenwich Village, NYC",
    description: "",
    canonical: `${SITE_URL}/`,
    robots: DEFAULT_ROBOTS,
    ogType: "website",
    image: DEFAULT_IMAGE,
    imageAlt: DEFAULT_IMAGE_ALT,
    breadcrumbs: [HOME_CRUMB],
  },
  {
    path: "/press",
    title: PRESS_TITLE,
    description: PRESS_DESCRIPTION,
    canonical: `${SITE_URL}/press`,
    robots: DEFAULT_ROBOTS,
    ogType: "website",
    image: DEFAULT_IMAGE,
    imageAlt: DEFAULT_IMAGE_ALT,
    breadcrumbs: [HOME_CRUMB, { name: "Press", item: `${SITE_URL}/press` }],
  },
  {
    path: "/events",
    title: EVENTS_TITLE,
    description: EVENTS_DESCRIPTION,
    canonical: `${SITE_URL}/events/private-events`,
    robots: DEFAULT_ROBOTS,
    ogType: "website",
    image: DEFAULT_IMAGE,
    imageAlt: DEFAULT_IMAGE_ALT,
    breadcrumbs: [
      HOME_CRUMB,
      { name: "Private Events", item: `${SITE_URL}/events/private-events` },
    ],
  },
  {
    path: "/events/private-events",
    title: EVENTS_TITLE,
    description: EVENTS_DESCRIPTION,
    canonical: `${SITE_URL}/events/private-events`,
    robots: DEFAULT_ROBOTS,
    ogType: "website",
    image: DEFAULT_IMAGE,
    imageAlt: DEFAULT_IMAGE_ALT,
    breadcrumbs: [
      HOME_CRUMB,
      { name: "Private Events", item: `${SITE_URL}/events/private-events` },
    ],
  },
  {
    path: "/blog",
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    canonical: `${SITE_URL}/blog`,
    robots: DEFAULT_ROBOTS,
    ogType: "website",
    image: DEFAULT_IMAGE,
    imageAlt: DEFAULT_IMAGE_ALT,
    breadcrumbs: [HOME_CRUMB, { name: "Blog", item: `${SITE_URL}/blog` }],
  },
  {
    path: "/story",
    title: STORY_TITLE,
    description: STORY_DESCRIPTION,
    canonical: `${SITE_URL}/story`,
    robots: DEFAULT_ROBOTS,
    ogType: "website",
    image: DEFAULT_IMAGE,
    imageAlt: DEFAULT_IMAGE_ALT,
    breadcrumbs: [HOME_CRUMB, { name: "Story", item: `${SITE_URL}/story` }],
    faq: STORY_FAQ,
  },
  {
    path: "/menu",
    title: MENU_TITLE,
    description: MENU_DESCRIPTION,
    canonical: `${SITE_URL}/menu`,
    robots: DEFAULT_ROBOTS,
    ogType: "website",
    image: DEFAULT_IMAGE,
    imageAlt: DEFAULT_IMAGE_ALT,
    breadcrumbs: [HOME_CRUMB, { name: "Menu", item: `${SITE_URL}/menu` }],
    faq: MENU_FAQ,
  },
  {
    path: "/reservations",
    title: RESERVATIONS_TITLE,
    description: RESERVATIONS_DESCRIPTION,
    canonical: `${SITE_URL}/reservations`,
    robots: DEFAULT_ROBOTS,
    ogType: "website",
    image: DEFAULT_IMAGE,
    imageAlt: DEFAULT_IMAGE_ALT,
    breadcrumbs: [
      HOME_CRUMB,
      { name: "Reservations", item: `${SITE_URL}/reservations` },
    ],
    faq: RESERVATIONS_FAQ,
  },
  {
    path: "/contact",
    title: CONTACT_TITLE,
    description: CONTACT_DESCRIPTION,
    canonical: `${SITE_URL}/contact`,
    robots: DEFAULT_ROBOTS,
    ogType: "website",
    image: DEFAULT_IMAGE,
    imageAlt: DEFAULT_IMAGE_ALT,
    breadcrumbs: [HOME_CRUMB, { name: "Contact", item: `${SITE_URL}/contact` }],
    faq: CONTACT_FAQ,
  },
  ...blogPostPages,
];
