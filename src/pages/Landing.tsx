import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, Zap, Brain } from "lucide-react";
import heroVisualization from "@/assets/hero-visualization.jpg";
import featureMindmap from "@/assets/feature-mindmap.png";
import featureSummary from "@/assets/feature-summary.png";
import featureVoice from "@/assets/feature-voice.png";

export default function Landing() {
  const features = [
    {
      icon: featureMindmap,
      title: "Interactive Mind Maps",
      description: "Transform complex PDFs into beautiful, interactive knowledge graphs. See connections, understand hierarchies, and master topics visually.",
      benefits: ["Auto-generated from any PDF", "Color-coded by difficulty", "Zoom & explore freely"],
    },
    {
      icon: featureSummary,
      title: "AI Summarization",
      description: "Get instant TL;DRs, detailed explanations, or ELI5 versions of any concept. Multiple summary modes for different learning styles.",
      benefits: ["Quick summaries", "Detailed breakdowns", "Analogies & examples"],
    },
    {
      icon: featureVoice,
      title: "Voice Tutor",
      description: "Listen to your content. Perfect for commutes or when you need to rest your eyes. Natural AI voices bring your notes to life.",
      benefits: ["Natural text-to-speech", "Adjustable speed", "Highlight as it reads"],
    },
  ];

  const steps = [
    { step: "1", title: "Upload", description: "Drop your PDF or paste a URL" },
    { step: "2", title: "Parse", description: "AI analyzes and structures content" },
    { step: "3", title: "Map", description: "Interactive mind map generated" },
    { step: "4", title: "Study", description: "Learn with summaries & voice" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 opacity-50" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-6"
              >
                <span className="glass-panel px-4 py-2 rounded-full text-sm font-medium text-primary inline-flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  AI-Powered Learning Platform
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                Transform Overload into{" "}
                <span className="text-gradient">Mastery</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-muted-foreground mb-8 max-w-xl"
              >
                Turn any PDF into interactive mind maps with AI summaries and voice assistance. Perfect for students facing exam day pressure.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/workspace">
                  <Button variant="hero" size="xl" className="group">
                    Upload Your First PDF (Free)
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button variant="glass" size="xl">
                    How It Works
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 flex items-center gap-6 text-sm text-muted-foreground"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Trusted by 50K+ Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Free to Start</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Hero Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-panel p-4 rounded-3xl animate-float">
                <img
                  src={heroVisualization}
                  alt="AI Mind Map Visualization"
                  className="rounded-2xl w-full h-auto shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 glass-panel p-4 rounded-xl neon-glow">
                  <div className="flex items-center gap-3">
                    <Zap className="h-6 w-6 text-accent" />
                    <div>
                      <p className="text-xs text-muted-foreground">Processing Speed</p>
                      <p className="text-lg font-bold">2.3s avg</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Everything You Need to <span className="text-gradient">Excel</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful AI tools designed for students who want to learn smarter, not harder.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-panel h-full p-8 hover:scale-105 transition-all duration-300 group cursor-pointer">
                  <div className="mb-6 relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <img src={feature.icon} alt={feature.title} className="w-12 h-12" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Get Started in <span className="text-gradient">4 Simple Steps</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="glass-panel p-6 rounded-2xl text-center hover:scale-105 transition-all">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-bold mx-auto mb-4 neon-glow">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-accent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-panel rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-50" />
            <div className="relative z-10">
              <Brain className="h-16 w-16 text-primary mx-auto mb-6 animate-pulse-slow" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Transform Your Learning?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of students who are mastering their subjects faster with AI-powered tools.
              </p>
              <Link to="/workspace">
                <Button variant="neon" size="xl" className="group">
                  Start Free Today
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
