import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Video, Headphones, FileText, ExternalLink } from "lucide-react";

const resources = [
  {
    icon: BookOpen,
    title: "Self-Help Articles",
    description: "Evidence-based articles on managing stress, anxiety, and depression",
    link: "#",
  },
  {
    icon: Video,
    title: "Guided Meditations",
    description: "Calming meditation videos to help you find peace and clarity",
    link: "#",
  },
  {
    icon: Headphones,
    title: "Mental Health Podcasts",
    description: "Expert discussions on mental wellness and coping strategies",
    link: "#",
  },
  {
    icon: FileText,
    title: "Wellness Worksheets",
    description: "Downloadable resources for self-reflection and growth",
    link: "#",
  },
];

export const Resources = () => {
  return (
    <section id="resources" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Mental Health Resources</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Curated resources to support your mental health journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)] group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                    <p className="text-muted-foreground mb-4">{resource.description}</p>
                    <Button variant="link" className="p-0 h-auto">
                      Explore <ExternalLink className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Crisis Support</h3>
            <p className="text-muted-foreground mb-4">
              If you're in crisis, please reach out immediately
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="default" size="lg">
                Crisis Hotline: 988
              </Button>
              <Button variant="outline" size="lg">
                Text "HELLO" to 741741
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
