import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TrendingUp,
  Heart,
  Calendar,
  Trophy,
  Target,
  Smile,
  Meh,
  Frown,
  ArrowLeft,
  Star,
  CheckCircle2,
  Award,
} from "lucide-react";

export default function ProgressPage() {
  const navigate = useNavigate();

  const moodData = [
    { day: "Mon", mood: "Great", color: "bg-green-500", emoji: "😊" },
    { day: "Tue", mood: "Good", color: "bg-blue-500", emoji: "🙂" },
    { day: "Wed", mood: "Okay", color: "bg-yellow-500", emoji: "😐" },
    { day: "Thu", mood: "Good", color: "bg-blue-500", emoji: "🙂" },
    { day: "Fri", mood: "Great", color: "bg-green-500", emoji: "😊" },
    { day: "Sat", mood: "Great", color: "bg-green-500", emoji: "😊" },
    { day: "Sun", mood: "Good", color: "bg-blue-500", emoji: "🙂" },
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "7-Day Streak",
      desc: "Checked in every day this week",
      unlocked: true,
    },
    {
      icon: Star,
      title: "Early Bird",
      desc: "Completed 5 morning yoga sessions",
      unlocked: true,
    },
    {
      icon: Heart,
      title: "Self-Care Champion",
      desc: "Completed 10 self-care tasks",
      unlocked: true,
    },
    {
      icon: Award,
      title: "Community Helper",
      desc: "Participated in 3 peer support groups",
      unlocked: false,
    },
    {
      icon: Target,
      title: "Goal Getter",
      desc: "Achieved 5 wellness goals",
      unlocked: false,
    },
  ];

  const weeklyActivities = [
    { activity: "Yoga Sessions", count: 3, target: 5, icon: "🧘" },
    { activity: "Meditation Minutes", count: 120, target: 150, icon: "🧘‍♀️" },
    { activity: "Social Events", count: 2, target: 3, icon: "🎭" },
    { activity: "Journal Entries", count: 5, target: 7, icon: "📝" },
  ];

  const mentorFeedback = [
    {
      date: "Last Week",
      mentor: "Dr. Sarah",
      feedback:
        "Amazing consistency! You've attended 3 yoga sessions this week. Keep prioritizing your wellness journey. 🌼",
      rating: 5,
    },
    {
      date: "2 Weeks Ago",
      mentor: "Prof. Raj",
      feedback:
        "Your engagement in group activities shows great progress. Consider joining the art therapy sessions next!",
      rating: 4,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/dashboard")}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="font-bold text-xl">Progress & Insights</h1>
              <p className="text-sm text-muted-foreground">Track your wellness journey</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="mood">Mood</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              <Card className="p-6">
                <TrendingUp className="w-8 h-8 text-primary mb-3" />
                <div className="text-3xl font-bold mb-1">85%</div>
                <div className="text-sm text-muted-foreground">Overall Progress</div>
              </Card>
              <Card className="p-6">
                <Calendar className="w-8 h-8 text-secondary mb-3" />
                <div className="text-3xl font-bold mb-1">21</div>
                <div className="text-sm text-muted-foreground">Days Active</div>
              </Card>
              <Card className="p-6">
                <Trophy className="w-8 h-8 text-accent mb-3" />
                <div className="text-3xl font-bold mb-1">5</div>
                <div className="text-sm text-muted-foreground">Achievements</div>
              </Card>
            </div>

            {/* Weekly Activities */}
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-6">This Week's Progress</h3>
              <div className="space-y-6">
                {weeklyActivities.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="font-semibold">{item.activity}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {item.count} / {item.target}
                      </span>
                    </div>
                    <Progress value={(item.count / item.target) * 100} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>

            {/* Mentor Feedback */}
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-6">Mentor Feedback</h3>
              <div className="space-y-4">
                {mentorFeedback.map((feedback, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-muted/50 border-2 border-transparent hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="font-semibold">{feedback.mentor}</div>
                        <div className="text-xs text-muted-foreground">
                          {feedback.date}
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(feedback.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-primary text-primary"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed">{feedback.feedback}</p>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Mood Tab */}
          <TabsContent value="mood" className="space-y-6">
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-6">Weekly Mood Tracker</h3>
              <div className="grid grid-cols-7 gap-4">
                {moodData.map((day, index) => (
                  <div key={index} className="text-center">
                    <div
                      className={`w-16 h-16 ${day.color} rounded-full flex items-center justify-center text-2xl mb-2 mx-auto hover:scale-110 transition-transform cursor-pointer`}
                    >
                      {day.emoji}
                    </div>
                    <div className="text-xs font-medium">{day.day}</div>
                    <div className="text-xs text-muted-foreground">{day.mood}</div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-4">Mood Insights</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-green-500/10 rounded-xl">
                  <Smile className="w-8 h-8 text-green-500" />
                  <div>
                    <div className="font-semibold">Overall Mood: Positive</div>
                    <div className="text-sm text-muted-foreground">
                      You've had 5 great days this week!
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-blue-500/10 rounded-xl">
                  <Meh className="w-8 h-8 text-blue-500" />
                  <div>
                    <div className="font-semibold">Improvement Area</div>
                    <div className="text-sm text-muted-foreground">
                      Consider more self-care on Wednesdays
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-6">
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-6">Your Achievements</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div
                      key={index}
                      className={`p-6 rounded-xl border-2 transition-all ${
                        achievement.unlocked
                          ? "bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20"
                          : "bg-muted/50 border-border opacity-60"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                            achievement.unlocked
                              ? "bg-gradient-to-br from-primary to-secondary"
                              : "bg-muted"
                          }`}
                        >
                          <Icon
                            className={`w-6 h-6 ${
                              achievement.unlocked ? "text-white" : "text-muted-foreground"
                            }`}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="font-bold mb-1 flex items-center gap-2">
                            {achievement.title}
                            {achievement.unlocked && (
                              <CheckCircle2 className="w-4 h-4 text-primary" />
                            )}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {achievement.desc}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-accent/20 to-secondary/20 text-center">
              <Trophy className="w-16 h-16 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Keep Going! 🌟</h4>
              <p className="text-muted-foreground mb-4">
                You're on track to unlock 2 more achievements this week
              </p>
              <Button>View All Challenges</Button>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
