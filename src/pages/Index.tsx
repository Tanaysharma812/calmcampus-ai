import { Button } from "@/components/ui/button";
import { MoodTracker } from "@/components/MoodTracker";
import { ChatSupport } from "@/components/ChatSupport";
import { Resources } from "@/components/Resources";
import { CounselorContact } from "@/components/CounselorContact";
import { Heart, Menu } from "lucide-react";
import heroImage from "@/assets/hero-mental-health.jpg";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">MindWell</span>
          </div>
          
          <div className="hidden md:flex gap-6">
            <Button variant="ghost" onClick={() => scrollToSection("mood-tracker")}>
              Mood Tracker
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("chat-support")}>
              AI Support
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("resources")}>
              Resources
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("counselor-contact")}>
              Contact
            </Button>
          </div>

          <Button 
            variant="calm" 
            size="lg" 
            className="hidden md:flex"
            onClick={() => navigate("/onboarding")}
          >
            Get Started
          </Button>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
            Your Mental Health Matters
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            A safe, supportive space for students to track their wellness, access resources, 
            and connect with professional counselors whenever you need support.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              variant="calm" 
              size="lg" 
              className="text-lg px-8"
              onClick={() => navigate("/onboarding")}
            >
              Get Started with MindConnect →
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8"
              onClick={() => scrollToSection("chat-support")}
            >
              Talk to AI Support
            </Button>
          </div>
        </div>
      </section>

      {/* Sections */}
      <MoodTracker />
      <ChatSupport />
      <Resources />
      <CounselorContact />

      {/* Footer */}
      <footer className="border-t py-12 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">MindWell</span>
          </div>
          <p className="text-muted-foreground mb-2">
            Supporting student mental health, one conversation at a time
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 MindWell. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
