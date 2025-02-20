import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop"
            alt="Profile"
            className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-primary/20"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Software Engineer</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about building scalable applications and solving complex problems
          </p>
        </div>
        
        <div className="flex justify-center gap-6">
          <a href="https://github.com" className="text-primary hover:text-primary/80 transition-colors">
            <Github className="w-8 h-8" />
          </a>
          <a href="https://linkedin.com" className="text-primary hover:text-primary/80 transition-colors">
            <Linkedin className="w-8 h-8" />
          </a>
          <a href="mailto:your.email@example.com" className="text-primary hover:text-primary/80 transition-colors">
            <Mail className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
}