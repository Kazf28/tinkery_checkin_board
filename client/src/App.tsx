import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Activity from "@/pages/activity";
import LearnTool from "@/pages/learn-tool";
import TeachTool from "@/pages/teach-tool";
import ResearchTool from "@/pages/research-tool";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/activity/:slug" component={Activity} />
      <Route path="/learn-with-ai/:tool" component={LearnTool} />
      <Route path="/teach-with-ai/:tool" component={TeachTool} />
      <Route path="/research-with-ai/:tool" component={ResearchTool} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
