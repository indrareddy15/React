import React from 'react';
import { Code2, Database, Globe } from 'lucide-react';

export default function About() {
  return (
    <section className="section-padding bg-muted" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-muted-foreground mb-6">
              With 2.8 years of experience at Ramco Systems as Software Engineer 1, 
              I've successfully delivered 4 production-level projects, focusing on 
              building scalable and efficient solutions.
            </p>
            <p className="text-lg text-muted-foreground">
              I specialize in full-stack development using modern technologies 
              including React, Node.js, and TypeScript. My passion lies in creating 
              intuitive user experiences backed by robust architecture.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-background rounded-lg card-hover">
              <Code2 className="w-12 h-12 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">Frontend</h3>
              <p className="text-muted-foreground">React, TypeScript, Redux</p>
            </div>
            <div className="p-6 bg-background rounded-lg card-hover">
              <Database className="w-12 h-12 mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2">Backend</h3>
              <p className="text-muted-foreground">Node.js, Express, MongoDB</p>
            </div>
            <div className="p-6 bg-background rounded-lg card-hover col-span-2">
              <Globe className="w-12 h-12 mb-4 text-green-400" />
              <h3 className="text-xl font-semibold mb-2">Full Stack</h3>
              <p className="text-muted-foreground">End-to-end application development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}