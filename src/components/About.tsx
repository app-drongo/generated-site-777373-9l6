import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Target, 
  Users, 
  Award, 
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Briefcase,
  Calendar,
  Clipboard
} from "lucide-react"

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Focused on Results",
      description: "We're dedicated to helping teams achieve their goals and deliver successful projects."
    },
    {
      icon: Briefcase,
      title: "Powerful Project Management",
      description: "Our intuitive tools and features empower you to streamline your workflow and boost productivity."
    },
    {
      icon: Calendar,
      title: "Time-Saving Automation",
      description: "Automate repetitive tasks and stay on top of deadlines with our smart scheduling and reminders."
    },
    {
      icon: Clipboard,
      title: "Collaborative Workspace",
      description: "Bring your team together in a centralized platform for seamless communication and coordination."
    }
  ]

  const stats = [
    { value: "2018", label: "Founded", icon: Award },
    { value: "10K+", label: "Active Users", icon: Users },
    { value: "99.9%", label: "Uptime", icon: TrendingUp },
    { value: "20+", label: "Countries", icon: Globe }
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      image: "SJ",
      bio: "Experienced leader with a passion for empowering teams to achieve their goals."
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder", 
      image: "MC",
      bio: "Tech visionary and expert in building scalable, user-friendly platforms."
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      image: "ER",
      bio: "Award-winning designer focused on creating intuitive and visually stunning experiences."
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      image: "DK",
      bio: "Seasoned engineer dedicated to building robust and reliable software solutions."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            About ProjectHub
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Empowering Teams to
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Achieve More
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            ProjectHub is a modern project management platform designed to streamline your team's workflow and 
            help you deliver successful projects, every time.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2018, ProjectHub was born out of a shared frustration with the complexity and 
                inefficiency of traditional project management tools.
              </p>
              <p>
                As experienced project managers and team leaders, we knew there had to be a better way to 
                keep our teams organized, on track, and focused on delivering results.
              </p>
              <p>
                Today, we're proud to serve over 10,000 users worldwide, helping teams of all sizes streamline 
                their workflows, automate repetitive tasks, and collaborate more effectively.
              </p>
            </div>
            <Button className="group">
              Learn More About Our Journey
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "ProjectHub has been a game-changer for our team. It's helped us stay organized, 
                      on top of deadlines, and focused on delivering exceptional results."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- Jessica Davis, CTO, TechStartup Inc.</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Core Values</h3>
            <p className="text-muted-foreground">
              The principles that guide our team and shape the way we build ProjectHub.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Meet the ProjectHub Team</h3>
            <p className="text-muted-foreground">
              The talented individuals behind our mission to revolutionize project management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="group">
              View All Team Members
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "ProjectHub has been a game-changer for our team. It's helped us stay organized, 
                on top of deadlines, and focused on delivering exceptional results."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  JD
                </div>
                <div className="text-left">
                  <div className="font-semibold">Jessica Davis</div>
                  <div className="text-sm text-muted-foreground">CTO, TechStartup Inc.</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}