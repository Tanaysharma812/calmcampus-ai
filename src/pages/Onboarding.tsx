import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { Heart, User, MapPin, MessageCircle } from "lucide-react";

export default function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    institution: "",
    location: "",
    issueType: "",
    feeling: "",
    modePreference: "",
  });

  const updateField = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
    else navigate("/mode-selection", { state: formData });
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-background py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Welcome to MindConnect
          </h1>
          <p className="text-muted-foreground text-lg">
            Your privacy and comfort come first 💚
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mb-8 gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`h-2 w-16 rounded-full transition-all ${
                i === step
                  ? "bg-gradient-to-r from-primary to-secondary"
                  : i < step
                  ? "bg-primary/50"
                  : "bg-border"
              }`}
            />
          ))}
        </div>

        <Card className="p-8 shadow-[var(--shadow-card)]">
          {/* Step 1: Basic Info */}
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Tell us about yourself</h2>
                  <p className="text-muted-foreground">Basic information</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    type="number"
                    value={formData.age}
                    onChange={(e) => updateField("age", e.target.value)}
                    placeholder="Your age"
                  />
                </div>
                <div>
                  <Label htmlFor="institution">Institution</Label>
                  <Input
                    id="institution"
                    value={formData.institution}
                    onChange={(e) => updateField("institution", e.target.value)}
                    placeholder="Your school/college"
                  />
                </div>
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => updateField("location", e.target.value)}
                    placeholder="City, State"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Emotional Assessment */}
          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">How are you feeling?</h2>
                  <p className="text-muted-foreground">Help us understand your needs</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="feeling">Tell us how you've been feeling lately 👋</Label>
                  <Textarea
                    id="feeling"
                    value={formData.feeling}
                    onChange={(e) => updateField("feeling", e.target.value)}
                    placeholder="Share your thoughts and feelings..."
                    rows={4}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Issue Type */}
          {step === 3 && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">What brings you here?</h2>
                  <p className="text-muted-foreground">Select primary concern</p>
                </div>
              </div>

              <RadioGroup
                value={formData.issueType}
                onValueChange={(value) => updateField("issueType", value)}
              >
                {[
                  { value: "stress", label: "Academic Stress", emoji: "📚" },
                  { value: "anxiety", label: "Anxiety", emoji: "😰" },
                  { value: "depression", label: "Feeling Low/Depression", emoji: "😔" },
                  { value: "loneliness", label: "Loneliness", emoji: "🌙" },
                  { value: "relationships", label: "Relationship Issues", emoji: "💔" },
                  { value: "general", label: "General Wellness", emoji: "🌟" },
                ].map((issue) => (
                  <div
                    key={issue.value}
                    className="flex items-center space-x-3 border-2 rounded-xl p-4 cursor-pointer transition-all hover:border-primary/50"
                  >
                    <RadioGroupItem value={issue.value} id={issue.value} />
                    <Label
                      htmlFor={issue.value}
                      className="flex-1 cursor-pointer flex items-center gap-3"
                    >
                      <span className="text-2xl">{issue.emoji}</span>
                      <span className="font-medium">{issue.label}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {/* Step 4: Mode Preference */}
          {step === 4 && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Choose your preference</h2>
                  <p className="text-muted-foreground">Online or offline support?</p>
                </div>
              </div>

              <RadioGroup
                value={formData.modePreference}
                onValueChange={(value) => updateField("modePreference", value)}
              >
                <div className="flex items-center space-x-3 border-2 rounded-xl p-6 cursor-pointer transition-all hover:border-primary/50">
                  <RadioGroupItem value="online" id="online" />
                  <Label htmlFor="online" className="flex-1 cursor-pointer">
                    <div className="font-bold text-lg mb-1">💻 Online Mode</div>
                    <p className="text-sm text-muted-foreground">
                      Connect virtually with mentors, video calls, and chat support
                    </p>
                  </Label>
                </div>

                <div className="flex items-center space-x-3 border-2 rounded-xl p-6 cursor-pointer transition-all hover:border-primary/50">
                  <RadioGroupItem value="offline" id="offline" />
                  <Label htmlFor="offline" className="flex-1 cursor-pointer">
                    <div className="font-bold text-lg mb-1">🏫 Offline Mode</div>
                    <p className="text-sm text-muted-foreground">
                      In-person support, events, activities, and cultural programs
                    </p>
                  </Label>
                </div>
              </RadioGroup>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={step === 1}
              className="min-w-24"
            >
              Back
            </Button>
            <Button onClick={nextStep} className="min-w-24">
              {step === 4 ? "Get Started" : "Continue"}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
