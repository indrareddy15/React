import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Chat Bot',
    description: 'Real-time chat application built with MERN stack and Socket.io, featuring instant messaging and user authentication.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.io'],
    links: {
      github: '#',
      live: '#'
    }
  },
  {
    title: 'Dev Overflow',
    description: 'A Stack Overflow clone built with MERN stack and TypeScript, featuring microservices architecture and real-time updates.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
    tech: ['TypeScript', 'React', 'Node.js', 'MongoDB', 'Microservices'],
    links: {
      github: '#',
      live: '#'
    }
  },
  {
    title: 'E-commerce Website',
    description: 'Full-featured e-commerce platform with product management, cart functionality, and secure checkout process.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
    tech: ['React', 'Redux', 'Node.js', 'MongoDB', 'Stripe'],
    links: {
      github: '#',
      live: '#'
    }
  }
];

export default function Projects() {
  return (
    <section className="section-padding bg-background" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-muted rounded-lg overflow-hidden card-hover">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-background rounded-full text-sm text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.links.github}
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href={project.links.live}
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}