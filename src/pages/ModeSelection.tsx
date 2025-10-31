import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Video,
  Users,
  Calendar,
  MapPin,
  MessageSquare,
  Heart,
  Palmtree,
  Music,
  Dumbbell,
  Sparkles,
} from "lucide-react";

export default function ModeSelection() {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state || {};

  const handleModeSelect = (mode: string) => {
    navigate("/dashboard", { state: { ...formData, selectedMode: mode } });
  };

  const onlineFeatures = [
    { icon: Video, title: "Video Counseling", desc: "Connect with mentors face-to-face" },
    { icon: MessageSquare, title: "Chat Support", desc: "Real-time assistance" },
    { icon: Users, title: "Peer Groups", desc: "Connect with friends" },
    { icon: Heart, title: "Guided Therapy", desc: "Daily self-care tasks" },
  ];

  const offlineFeatures = [
    { icon: Palmtree, title: "Cultural Events", desc: "Inter-state interaction programs" },
    { icon: Dumbbell, title: "Yoga & Sports", desc: "Physical wellness activities" },
    { icon: Calendar, title: "Healing Trips", desc: "Nature visits & outdoor events" },
    { icon: Music, title: "Art Therapy", desc: "Creative expression sessions" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Choose Your Path to Wellness
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {formData.name && `Welcome ${formData.name}! `}
            Select how you'd like to get support
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Online Mode Card */}
          <Card className="p-8 hover:shadow-[var(--shadow-soft)] transition-all group cursor-pointer border-2 hover:border-primary/50">
            <div className="text-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Video className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-2">💻 Online Mode</h2>
              <p className="text-muted-foreground">
                Connect virtually from anywhere, anytime
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {onlineFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-muted/50"
                  >
                    <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">{feature.title}</div>
                      <div className="text-sm text-muted-foreground">{feature.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button
              onClick={() => handleModeSelect("online")}
              className="w-full"
              size="lg"
            >
              Choose Online Mode
            </Button>
          </Card>

          {/* Offline Mode Card */}
          <Card className="p-8 hover:shadow-[var(--shadow-soft)] transition-all group cursor-pointer border-2 hover:border-primary/50">
            <div className="text-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-accent mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-2">🏫 Offline Mode</h2>
              <p className="text-muted-foreground">
                In-person support with activities and events
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {offlineFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-muted/50"
                  >
                    <Icon className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">{feature.title}</div>
                      <div className="text-sm text-muted-foreground">{feature.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button
              onClick={() => handleModeSelect("offline")}
              className="w-full"
              size="lg"
              variant="secondary"
            >
              Choose Offline Mode
            </Button>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" />
            Don't worry, you can always change this later
          </p>
        </div>
      </div>
    </div>
  );
}
