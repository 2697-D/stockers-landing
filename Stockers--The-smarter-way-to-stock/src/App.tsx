import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import UserTypeSelectionPage from "./pages/UserTypeSelectionPage";
import { useAuth } from "./contexts/AuthContext";

const queryClient = new QueryClient();

// A component to protect routes that require authentication
const ProtectedRoute = () => {
  const { currentUser } = useAuth();
  
  // While Firebase is checking the auth state, currentUser is undefined.
  // We can show a loading indicator here.
  if (currentUser === undefined) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }
  
  // If a user is logged in, show the child route (e.g., UserTypeSelectionPage).
  // Otherwise, redirect them to the login page.
  return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<LoginPage />} />
            
            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/user-type-selection" element={<UserTypeSelectionPage />} />
              {/* You can add more protected routes here later */}
              {/* e.g., <Route path="/dashboard" element={<Dashboard />} /> */}
            </Route>
            
            {/* Catch-all route for pages that don't exist */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

