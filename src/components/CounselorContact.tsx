import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const CounselorContact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted",
      description: "A counselor will reach out to you within 24 hours.",
    });
  };

  return (
    <section id="counselor-contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Connect with a Counselor</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our professional counselors are here to provide personalized support
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-8 shadow-[var(--shadow-card)]">
            <h3 className="text-2xl font-semibold mb-6">Request a Session</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Your name" required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your.email@university.edu" required />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="(555) 123-4567" />
              </div>
              <div>
                <Label htmlFor="message">How can we help?</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us briefly what you'd like to discuss..."
                  rows={4}
                  required
                />
              </div>
              <Button type="submit" className="w-full" variant="calm" size="lg">
                Submit Request
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-6 hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-muted-foreground">(555) 123-4567</p>
                  <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 8am-6pm</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-muted-foreground">support@mentalhealth.edu</p>
                  <p className="text-sm text-muted-foreground mt-1">Response within 24 hours</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-muted-foreground">Student Wellness Center, Room 201</p>
                  <p className="text-sm text-muted-foreground mt-1">Campus Main Building</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Walk-in Hours</h4>
                  <p className="text-muted-foreground">Monday, Wednesday, Friday</p>
                  <p className="text-sm text-muted-foreground mt-1">2pm-4pm</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
