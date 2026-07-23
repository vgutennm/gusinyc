import { lazy, Suspense, type ComponentType } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";

/**
 * Route-level code splitting that stays compatible with synchronous
 * renderToString prerendering:
 * - Before server render and before client hydration, the page module is
 *   awaited via preloadForPath(); once loaded, the component renders
 *   synchronously, so prerendered HTML matches hydrated output exactly.
 * - On pure client-side navigation the component falls back to React.lazy
 *   with a null Suspense fallback while the chunk loads.
 */
function splitPage(loader: () => Promise<{ default: ComponentType }>) {
  let Loaded: ComponentType | null = null;
  const Lazy = lazy(loader);
  function Page() {
    if (Loaded) {
      const C = Loaded;
      return <C />;
    }
    return (
      <Suspense fallback={null}>
        <Lazy />
      </Suspense>
    );
  }
  Page.preload = async () => {
    const mod = await loader();
    Loaded = mod.default;
  };
  return Page;
}

const Press = splitPage(() => import("@/pages/Press"));
const PrivateEvents = splitPage(() => import("@/pages/PrivateEvents"));
const Blog = splitPage(() => import("@/pages/Blog"));
const BlogPost = splitPage(() => import("@/pages/BlogPost"));
const Story = splitPage(() => import("@/pages/Story"));
const Menu = splitPage(() => import("@/pages/Menu"));
const Reservations = splitPage(() => import("@/pages/Reservations"));
const Contact = splitPage(() => import("@/pages/Contact"));
const NotFound = splitPage(() => import("@/pages/not-found"));

/** Awaits the page chunk for a (base-stripped) path before render/hydration. */
export async function preloadForPath(path: string): Promise<void> {
  const clean = (path.split("?")[0].replace(/\/+$/, "") || "/");
  if (clean === "/") return;
  if (clean === "/press") return Press.preload();
  if (clean === "/events" || clean === "/events/private-events") return PrivateEvents.preload();
  if (clean === "/blog") return Blog.preload();
  if (clean.startsWith("/blog/")) return BlogPost.preload();
  if (clean === "/story") return Story.preload();
  if (clean === "/menu") return Menu.preload();
  if (clean === "/reservations") return Reservations.preload();
  if (clean === "/contact") return Contact.preload();
  return NotFound.preload();
}

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/press" component={Press} />
      <Route path="/events/private-events" component={PrivateEvents} />
      <Route path="/events" component={PrivateEvents} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/blog" component={Blog} />
      <Route path="/story" component={Story} />
      <Route path="/menu" component={Menu} />
      <Route path="/reservations" component={Reservations} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App({ ssrPath }: { ssrPath?: string }) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter
          base={import.meta.env.BASE_URL.replace(/\/$/, "")}
          ssrPath={ssrPath}
        >
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
