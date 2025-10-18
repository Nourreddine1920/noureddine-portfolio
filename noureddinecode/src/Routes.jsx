import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import CollaborationGateway from './pages/collaboration-gateway';
import ProfessionalJourneyTimeline from './pages/professional-journey-timeline';
import InteractiveLandingExperience from './pages/interactive-landing-experience';
import TechnicalPortfolioShowcase from './pages/technical-portfolio-showcase';
import IndustryInsightsHub from './pages/industry-insights-hub';
import SkillsExpertiseObservatory from './pages/skills-expertise-observatory';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<InteractiveLandingExperience />} />
        <Route path="/collaboration-gateway" element={<CollaborationGateway />} />
        <Route path="/professional-journey-timeline" element={<ProfessionalJourneyTimeline />} />
        <Route path="/interactive-landing-experience" element={<InteractiveLandingExperience />} />
        <Route path="/technical-portfolio-showcase" element={<TechnicalPortfolioShowcase />} />
        <Route path="/industry-insights-hub" element={<IndustryInsightsHub />} />
        <Route path="/skills-expertise-observatory" element={<SkillsExpertiseObservatory />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
