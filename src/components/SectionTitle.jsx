import { motion } from 'framer-motion';

export default function SectionTitle({ subtitle, title, description, align = 'left' }) {
  const alignment = {
    left: 'text-left',
    center: 'text-center mx-auto',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`max-w-2xl mb-16 ${alignment[align]}`}
    >
      <span className="inline-block px-4 py-1 text-sm font-medium text-accent bg-accent/10 rounded-full mb-4">
        {subtitle}
      </span>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-light mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-muted text-lg leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}