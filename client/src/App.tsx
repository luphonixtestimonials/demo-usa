import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { QueryClientProvider } from "@tanstack/react-query";
import { Route, Switch } from "wouter";
import { queryClient } from "./lib/queryClient";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import AIAnalyticsService from "./pages/ai-analytics-service";
import EnterpriseManagementService from "@/pages/enterprise-management-service";
import CloudServices from "./pages/cloud-services";
import DigitalModernization from "./pages/digital-modernization";
import DataManagementServices from "./pages/data-management-services";
import CybersecurityServices from "./pages/cybersecurity-services";
import ProfessionalServices from "./pages/professional-services";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/ai-analytics-service" component={AIAnalyticsService} />
      <Route path="/cloud-services" component={CloudServices} />
      <Route path="/digital-modernization" component={DigitalModernization} />
      <Route path="/data-management-services" component={DataManagementServices} />
      <Route path="/cybersecurity-services" component={CybersecurityServices} />
      <Route path="/professional-services" component={ProfessionalServices} />
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