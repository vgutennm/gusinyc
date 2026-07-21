import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Press from "@/pages/Press";
import PrivateEvents from "@/pages/PrivateEvents";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Story from "@/pages/Story";
import Menu from "@/pages/Menu";
import Reservations from "@/pages/Reservations";
import Contact from "@/pages/Contact";

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
