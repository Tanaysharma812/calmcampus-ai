import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Smile, Meh, Frown, Heart, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const moods = [
  { icon: Smile, label: "Great", color: "text-primary hover:text-primary" },
  { icon: Heart, label: "Good", color: "text-secondary hover:text-secondary" },
  { icon: Meh, label: "Okay", color: "text-muted-foreground hover:text-foreground" },
  { icon: Frown, label: "Low", color: "text-accent hover:text-accent" },
  { icon: Sparkles, label: "Anxious", color: "text-destructive hover:text-destructive" },
];

export const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const { toast } = useToast();

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
    toast({
      title: "Mood Recorded",
      description: `You're feeling ${mood.toLowerCase()} today. Remember, it's okay to feel this way.`,
    });
  };

  return (
    <section id="mood-tracker" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            How are you feeling today?
          </h2>
          <p className="text-muted-foreground text-lg">
            Track your emotional wellness and understand your patterns
          </p>
        </div>

        <Card className="p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)]">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {moods.map(({ icon: Icon, label, color }) => (
              <button
                key={label}
                onClick={() => handleMoodSelect(label)}
                className={`flex flex-col items-center gap-4 p-6 rounded-2xl border-2 transition-all ${
                  selectedMood === label
                    ? "border-primary bg-primary/5 scale-105"
                    : "border-border hover:border-primary/50 hover:bg-muted/50"
                }`}
              >
                <Icon className={`w-12 h-12 ${color}`} />
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </div>

          {selectedMood && (
            <div className="mt-8 p-6 bg-muted/50 rounded-xl animate-in fade-in slide-in-from-bottom-2 duration-500">
              <p className="text-center text-muted-foreground">
                Your mood has been recorded. Consider writing in your journal or talking to someone if you need support.
              </p>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
};
