import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { QueryClientProvider } from "@tanstack/react-query";
import { Route, Switch } from "wouter";
import { queryClient } from "./lib/queryClient";
import Home from "./pages/home";
import AIAnalyticsService from "./pages/ai-analytics-service";
import EnterpriseManagementService from "@/pages/enterprise-management-service";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/ai-analytics-service" component={AIAnalyticsService} />
      <Route path="/enterprise-management-service" component={EnterpriseManagementService} />
      <Route path="*" component={NotFound} />
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