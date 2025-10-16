import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Upload,
  FileText,
  Brain,
  Clock,
  TrendingUp,
  Search,
  Plus,
  MoreVertical,
} from "lucide-react";

export default function Dashboard() {
  const recentMaps = [
    {
      id: 1,
      title: "Introduction to Quantum Physics",
      nodes: 48,
      lastModified: "2 hours ago",
      progress: 65,
    },
    {
      id: 2,
      title: "Machine Learning Fundamentals",
      nodes: 32,
      lastModified: "1 day ago",
      progress: 40,
    },
    {
      id: 3,
      title: "Organic Chemistry - Chapter 5",
      nodes: 56,
      lastModified: "3 days ago",
      progress: 85,
    },
  ];

  const stats = [
    { label: "Total Maps", value: "12", icon: Brain, color: "text-primary" },
    { label: "Study Streak", value: "7 days", icon: TrendingUp, color: "text-accent" },
    { label: "Hours Saved", value: "24h", icon: Clock, color: "text-destructive" },
  ];

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome back! 👋</h1>
            <p className="text-muted-foreground">
              Continue your learning journey
            </p>
          </div>
          
          <div className="flex gap-3">
            <Button variant="glass" size="lg">
              <Plus className="mr-2 h-5 w-5" />
              New Map
            </Button>
            <Link to="/workspace">
              <Button variant="hero" size="lg">
                <Upload className="mr-2 h-5 w-5" />
                Upload PDF
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass-panel p-6 hover:scale-105 transition-all">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-10 w-10 ${stat.color}`} />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex gap-4"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search maps, topics..."
              className="w-full glass-panel h-12 rounded-lg pl-10 pr-4 bg-background/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </motion.div>

        {/* Recent Maps */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Recent Maps</h2>
            <Button variant="ghost" size="sm">View All</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentMaps.map((map, index) => (
              <motion.div
                key={map.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <Card className="glass-panel overflow-hidden hover:scale-105 transition-all group cursor-pointer">
                  {/* Thumbnail */}
                  <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Brain className="h-16 w-16 text-primary/40 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="absolute top-3 right-3">
                      <Button variant="ghost" size="icon" className="h-8 w-8 bg-background/50">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-bold mb-2 line-clamp-1">{map.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <FileText className="h-4 w-4" />
                        <span>{map.nodes} nodes</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{map.lastModified}</span>
                      </div>
                    </div>

                    {/* Progress */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-semibold">{map.progress}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-accent transition-all"
                          style={{ width: `${map.progress}%` }}
                        />
                      </div>
                    </div>

                    <Link to="/workspace">
                      <Button variant="glass" className="w-full mt-4">
                        Open Map
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Start Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Card className="glass-panel p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-50" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Ready for your next study session?
                </h3>
                <p className="text-muted-foreground">
                  Upload a new PDF or continue with your recent maps.
                </p>
              </div>
              <Link to="/workspace">
                <Button variant="neon" size="lg">
                  <Upload className="mr-2 h-5 w-5" />
                  Upload New PDF
                </Button>
              </Link>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
