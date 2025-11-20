import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface Translations {
  [key: string]: {
    fr: string;
    en: string;
  };
}

export const translations: Translations = {
  // Navigation
  'nav.home': { fr: 'Accueil', en: 'Home' },
  'nav.about': { fr: 'À Propos', en: 'About' },
  'nav.services': { fr: 'Services', en: 'Services' },
  'nav.projects': { fr: 'Projets', en: 'Projects' },
  'nav.contact': { fr: 'Contact', en: 'Contact' },
  
  // Hero
  'hero.title': { fr: "Formation, Conseils et Construction BTP", en: 'Training, Consulting and Construction' },
  'hero.subtitle': { fr: 'Expertise en formation professionnelle, conseil technique et réalisation de projets BTP de qualité.', en: 'Expertise in professional training, technical consulting and quality construction projects.' },
  'hero.cta.quote': { fr: 'Demandez un devis', en: 'Request a Quote' },
  'hero.cta.chat': { fr: 'Contactez un Expert', en: 'Contact an Expert' },
  
  // Trust badges
  'trust.member': { fr: "Centre de Formation Certifié", en: 'Certified Training Center' },
  'trust.experience': { fr: "+10 ans d'expérience", en: '+10 Years Experience' },
  'trust.projects': { fr: '100+ projets réalisés', en: '100+ Completed Projects' },
  
  // About
  'about.title': { fr: 'À Propos de Nous', en: 'About Us' },
  'about.mission': { fr: 'Former, Conseiller et Construire avec excellence.', en: 'Train, Advise and Build with excellence.' },
  'about.description': { fr: "CFCC (Centre De Formation De Conseils Et De Construction En BTP) est un centre spécialisé en formation professionnelle, conseil technique et construction basé à Cotonou, Bénin. Avec plus de 10 ans d'expérience, nous offrons des solutions complètes en formation BTP, conseil en construction, et réalisation de projets.", en: 'CFCC (Training, Consulting and Construction Center) is a specialized center in professional training, technical consulting and construction based in Cotonou, Benin. With over 10 years of experience, we offer comprehensive solutions in construction training, construction consulting, and project realization.' },
  'about.values': { fr: 'Nos Valeurs', en: 'Our Values' },
  'about.value.integrity': { fr: 'Intégrité', en: 'Integrity' },
  'about.value.accuracy': { fr: 'Précision', en: 'Accuracy' },
  'about.value.innovation': { fr: 'Innovation', en: 'Innovation' },
  'about.value.sustainability': { fr: 'Durabilité', en: 'Sustainability' },
  
  // Services
  'services.title': { fr: 'Nos Services', en: 'Our Services' },
  'services.subtitle': { fr: 'Des solutions de construction métallique adaptées à tous vos besoins', en: 'Metal construction solutions tailored to all your needs' },
  'services.learnmore': { fr: 'En savoir plus', en: 'Learn More' },
  
  'service.topo.title': { fr: 'Formation Professionnelle', en: 'Professional Training' },
  'service.topo.desc': { fr: 'Formation qualifiante en BTP : maçonnerie, électricité, plomberie, gestion de chantier et plus.', en: 'Qualifying training in construction: masonry, electricity, plumbing, site management and more.' },
  
  'service.bornage.title': { fr: 'Conseil Technique', en: 'Technical Consulting' },
  'service.bornage.desc': { fr: 'Accompagnement et expertise technique pour vos projets de construction.', en: 'Support and technical expertise for your construction projects.' },
  
  'service.drone.title': { fr: 'Études de Projets', en: 'Project Studies' },
  'service.drone.desc': { fr: 'Études de faisabilité, plans et devis pour tous types de constructions.', en: 'Feasibility studies, plans and quotes for all types of constructions.' },
  
  'service.urbanisme.title': { fr: 'Construction & Réalisation', en: 'Construction & Realization' },
  'service.urbanisme.desc': { fr: "Réalisation de projets de construction : bâtiments résidentiels, commerciaux et industriels.", en: 'Realization of construction projects: residential, commercial and industrial buildings.' },
  
  'service.vrd.title': { fr: 'Rénovation & Réhabilitation', en: 'Renovation & Rehabilitation' },
  'service.vrd.desc': { fr: "Travaux de rénovation et réhabilitation de bâtiments existants.", en: 'Renovation and rehabilitation works of existing buildings.' },
  
  'service.conseil.title': { fr: 'Gestion de Chantier', en: 'Site Management' },
  'service.conseil.desc': { fr: 'Gestion complète de vos chantiers : planification, suivi et coordination.', en: 'Complete management of your construction sites: planning, monitoring and coordination.' },
  
  // Achievements
  'achievements.title': { fr: 'Nos Réalisations', en: 'Our Achievements' },
  'achievements.hectares': { fr: '+50000m² construits', en: '+50000m² Built' },
  'achievements.communes': { fr: '15 villes desservies', en: '15 Cities Served' },
  'achievements.clients': { fr: '100+ clients satisfaits', en: '100+ Satisfied Clients' },
  'achievements.accuracy': { fr: '99.9% de satisfaction', en: '99.9% Satisfaction' },
  
  // Partners
  'partners.title': { fr: 'Nos Partenaires', en: 'Our Partners' },
  'partners.subtitle': { fr: 'Nous collaborons avec les meilleures entreprises', en: 'We collaborate with the best companies' },
  'partners.cta': { fr: 'Rejoignez notre réseau de partenaires', en: 'Join Our Partner Network' },
  
  // Testimonials
  'testimonials.title': { fr: 'Témoignages Clients', en: 'Client Testimonials' },
  
  // Contact
  'contact.title': { fr: 'Contactez-Nous', en: 'Contact Us' },
  'contact.subtitle': { fr: 'Discutons de votre projet', en: "Let's discuss your project" },
  'contact.form.name': { fr: 'Nom complet', en: 'Full Name' },
  'contact.form.email': { fr: 'Email', en: 'Email' },
  'contact.form.phone': { fr: 'Téléphone', en: 'Phone' },
  'contact.form.project': { fr: 'Type de Projet', en: 'Project Type' },
  'contact.form.message': { fr: 'Message', en: 'Message' },
  'contact.form.submit': { fr: 'Envoyer', en: 'Send' },
  'contact.address': { fr: 'Adresse', en: 'Address' },
  'contact.hours': { fr: "Heures d'ouverture", en: 'Business Hours' },
  'contact.hours.weekday': { fr: 'Lun - Ven: 8h00 - 17h00', en: 'Mon - Fri: 8:00 AM - 5:00 PM' },
  'contact.hours.saturday': { fr: 'Sam: 9h00 - 13h00', en: 'Sat: 9:00 AM - 1:00 PM' },
  
  // Footer
  'footer.about': { fr: 'À Propos', en: 'About' },
  'footer.description': { fr: 'Centre de Formation et Construction BTP', en: 'Training and Construction Center' },
  'footer.quicklinks': { fr: 'Liens Rapides', en: 'Quick Links' },
  'footer.rights': { fr: 'Tous droits réservés', en: 'All rights reserved' },
  
  // CTA
  'cta.callnow': { fr: 'Appelez Maintenant', en: 'Call Now' },
  'cta.whatsapp': { fr: 'WhatsApp', en: 'WhatsApp' },
  'cta.quoterequest': { fr: 'Demande de Devis', en: 'Quote Request' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
