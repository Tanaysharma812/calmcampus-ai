import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Calendar,
  Video,
  Users,
  Music,
  BookOpen,
  Dumbbell,
  Heart,
  Sparkles,
  MapPin,
  MessageSquare,
  TrendingUp,
  Trophy,
  Target,
} from "lucide-react";

export default function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const userData = location.state || { name: "Friend", selectedMode: "online" };
  const isOnline = userData.selectedMode === "online";

  const upcomingActivities = isOnline
    ? [
        {
          icon: Video,
          title: "Mentor Session",
          time: "Today, 4:00 PM",
          type: "Video Call",
          color: "text-primary",
        },
        {
          icon: Users,
          title: "Peer Support Group",
          time: "Tomorrow, 6:00 PM",
          type: "Group Chat",
          color: "text-secondary",
        },
        {
          icon: Music,
          title: "Music Therapy",
          time: "Wed, 3:00 PM",
          type: "Guided Session",
          color: "text-accent",
        },
      ]
    : [
        {
          icon: MapPin,
          title: "Cultural Exchange Event",
          time: "Saturday, 10:00 AM",
          type: "Kerala Students Meet",
          color: "text-primary",
        },
        {
          icon: Dumbbell,
          title: "Yoga Session",
          time: "Sunday, 7:00 AM",
          type: "Outdoor Activity",
          color: "text-secondary",
        },
        {
          icon: Calendar,
          title: "Healing Trip",
          time: "Next Weekend",
          type: "Hill Station Visit",
          color: "text-accent",
        },
      ];

  const wellnessPaths = [
    { icon: Music, title: "Music Therapy", progress: 30, emoji: "🎶" },
    { icon: BookOpen, title: "Reading Challenge", progress: 60, emoji: "📚" },
    { icon: Dumbbell, title: "Fitness & Yoga", progress: 45, emoji: "🧘‍♀️" },
    { icon: Heart, title: "Mindfulness", progress: 70, emoji: "🌿" },
  ];

  const weeklyStats = [
    { label: "Sessions Attended", value: "3", icon: Video },
    { label: "Mood Check-ins", value: "7", icon: Heart },
    { label: "Achievements", value: "2", icon: Trophy },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
              {userData.name?.[0] || "M"}
            </div>
            <div>
              <h1 className="font-bold">MindWell</h1>
              <p className="text-sm text-muted-foreground">
                {isOnline ? "💻 Online Mode" : "🏫 Offline Mode"}
              </p>
            </div>
          </div>
          <Button variant="outline" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Welcome back, {userData.name || "Friend"}! 👋
          </h1>
          <p className="text-muted-foreground text-lg">
            Here's your personalized wellness dashboard
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Today's Task */}
            <Card className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Today's Self-Care Task ✨</h3>
                  <p className="text-muted-foreground mb-4">
                    Write one positive thought about yourself or someone you care about
                  </p>
                  <Button>Complete Task</Button>
                </div>
              </div>
            </Card>

            {/* Weekly Stats */}
            <div className="grid sm:grid-cols-3 gap-4">
              {weeklyStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="p-6">
                    <Icon className="w-8 h-8 text-primary mb-3" />
                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </Card>
                );
              })}
            </div>

            {/* Wellness Paths */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Your Wellness Paths</h3>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </div>
              <div className="space-y-4">
                {wellnessPaths.map((path, index) => {
                  const Icon = path.icon;
                  return (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className="w-5 h-5 text-primary" />
                        <span className="font-semibold flex-1">{path.title}</span>
                        <span className="text-2xl">{path.emoji}</span>
                        <span className="text-sm font-medium">{path.progress}%</span>
                      </div>
                      <Progress value={path.progress} className="h-2" />
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-4">Quick Actions</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="h-auto py-4 justify-start"
                  onClick={() => navigate("/")}
                >
                  <MessageSquare className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="font-semibold">AI Chat Support</div>
                    <div className="text-xs text-muted-foreground">
                      Get instant support
                    </div>
                  </div>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto py-4 justify-start"
                  onClick={() => navigate("/")}
                >
                  <Heart className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="font-semibold">Mood Tracker</div>
                    <div className="text-xs text-muted-foreground">
                      Check in today
                    </div>
                  </div>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto py-4 justify-start"
                  onClick={() => navigate("/progress")}
                >
                  <TrendingUp className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="font-semibold">Progress Report</div>
                    <div className="text-xs text-muted-foreground">
                      View your journey
                    </div>
                  </div>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto py-4 justify-start"
                  onClick={() => navigate("/")}
                >
                  <BookOpen className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="font-semibold">Resources</div>
                    <div className="text-xs text-muted-foreground">
                      Explore content
                    </div>
                  </div>
                </Button>
              </div>
            </Card>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Activities */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Upcoming Activities
              </h3>
              <div className="space-y-3">
                {upcomingActivities.map((activity, index) => {
                  const Icon = activity.icon;
                  return (
                    <div
                      key={index}
                      className="p-4 rounded-xl border-2 hover:border-primary/50 transition-all cursor-pointer"
                    >
                      <div className="flex items-start gap-3">
                        <Icon className={`w-5 h-5 ${activity.color} flex-shrink-0 mt-1`} />
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold mb-1 truncate">
                            {activity.title}
                          </div>
                          <div className="text-xs text-muted-foreground mb-1">
                            {activity.time}
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {activity.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View Full Schedule
              </Button>
            </Card>

            {/* Achievement Card */}
            <Card className="p-6 bg-gradient-to-br from-accent/20 to-secondary/20">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2">7-Day Streak! 🔥</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  You've checked in every day this week. Keep it up!
                </p>
                <Button size="sm" className="w-full">
                  <Target className="w-4 h-4 mr-2" />
                  View Achievements
                </Button>
              </div>
            </Card>

            {/* Support Contact */}
            <Card className="p-6 border-primary/50">
              <h4 className="font-bold mb-2">Need immediate help?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Our support team is available 24/7
              </p>
              <Button variant="default" className="w-full mb-2">
                Crisis Hotline: 988
              </Button>
              <Button variant="outline" className="w-full">
                Chat with Counselor
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
