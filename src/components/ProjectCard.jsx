import { motion } from 'framer-motion';
import Button from './Button'; // Import komponen Button

// Custom Icons
const ExternalLinkIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
);

const GithubIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative flex flex-col" // Tambah flex flex-col
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-burgundy/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
      
      {/* Tambah h-full agar kartu sama tinggi */}
      <div className="relative h-full glass rounded-2xl p-8 hover:border-accent/30 transition-all duration-300 flex flex-col">
        
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="font-display text-2xl font-semibold text-light mb-1 group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-muted text-sm">{project.subtitle}</p>
          </div>
        </div>

        {/* Content (Problem & Solution) */}
        <div className="space-y-4 mb-6 flex-grow">
          <div>
            <span className="text-xs uppercase tracking-wider text-burgundy font-medium">Problem</span>
            <p className="text-light/80 text-sm mt-1 leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-accent font-medium">Solution</span>
            <p className="text-light/80 text-sm mt-1 leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs bg-muted/10 text-muted rounded-full border border-muted/20"
            >
              {tech}
            </span>
          ))}
        </div>

       
        <div className="mt-auto pt-4 border-t border-muted/20">
          <a href={project.github || "#"} target="_blank" rel="noopener noreferrer" className="block">
            <Button variant="primary" size="md" className="w-full">
              <GithubIcon size={18} />
              View on GitHub
            </Button>
          </a>
        </div>
        

      </div>
    </motion.article>
  );
}