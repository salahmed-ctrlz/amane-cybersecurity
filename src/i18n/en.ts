import { Translation } from '../types/i18n';

export const en: Translation = {
  navbar: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    partners: 'Partners',
    contact: 'Contact',
    founder: 'Founder',
  },
  hero: {
    slogan: ['Consult', 'Assess', 'Secure'],
    cta: 'Learn More',
  },
  about: {
    title: "About AMANE",
    description: "AMANE is an innovative Algerian cybersecurity startup driven by a passionate team of security specialists, researchers, and consultants. We blend agile methodologies with cutting-edge technology to revolutionize digital security in Algeria and beyond.",
    points: [
      {
        title: "1. Consult",
        description: "Engage with clients to understand their specific cybersecurity challenges and provide expert guidance."
      },
      {
        title: "2. Assess",
        description: "Perform rigorous vulnerability assessments to identify weaknesses and anticipate emerging threats."
      },
      {
        title: "3. Secure",
        description: "Implement robust, customized security solutions to protect sensitive data and build long-term resilience."
      }
    ]
  },
  services: {
    title: 'Services',
    list: [
      {
        title: 'Penetration Testing',
        description: 'Comprehensive security assessment of your systems',
      },
      {
        title: 'Cloud Security',
        description: 'Secure cloud infrastructure and applications',
      },
      {
        title: 'Secure Web Development',
        description: 'Building secure and robust web applications',
      },
      {
        title: 'Cyber Threat Intelligence',
        description: 'Stay ahead of emerging cyber threats',
      },
    ],
  },
  partners: {
    title: 'Partners',
  },
  contact: {
    title: 'Contact',
    form: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      submit: 'Send Message',
    },
  },
  founder: {
    title: 'Founder',
  },
};