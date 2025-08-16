import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  Shield, 
  Smartphone, 
  Globe, 
  BarChart3, 
  Palette,
  Code2,
  Headphones,
  Lock
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Blazing Fast",
      description: "Enjoy lightning-fast performance with our optimized infrastructure and cutting-edge technology.",
      badge: "Speed"
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Your data is protected with industry-leading security measures and compliance certifications.",
      badge: "Security"
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Access your project management tools seamlessly on any device, from desktop to mobile.",
      badge: "Accessibility"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Our worldwide content delivery network ensures fast loading and reliable performance globally.",
      badge: "Infrastructure"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Gain deep insights and real-time metrics to track your team's productivity and project success.",
      badge: "Insights"
    },
    {
      icon: Palette,
      title: "Branded Experience",
      description: "Fully customize the platform to match your brand identity and create a cohesive user experience.",
      badge: "Branding"
    },
    {
      icon: Code2,
      title: "Developer Friendly",
      description: "Leverage our clean APIs, extensive documentation, and powerful developer tools to extend the platform.",
      badge: "Developers"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Our expert support team is available around the clock to assist you whenever you need help.",
      badge: "Support"
    },
    {
      icon: Lock,
      title: "Privacy Focused",
      description: "Your data is yours. We never sell or share your information, ensuring your privacy is protected.",
      badge: "Privacy"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Powerful Features to
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Streamline Your Workflow
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover the comprehensive suite of tools and capabilities that will help your team
            work smarter, faster, and more efficiently.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to transform your team's productivity?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Start Free Trial
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Explore Pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}