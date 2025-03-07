export interface Translation {
  navbar: {
    home: string;
    about: string;
    services: string;
    partners: string;
    contact: string;
    founder: string;
  };
  hero: {
    slogan: string[];
    cta: string;
  };
  about: {
    title: string;
    description: string;
    points: {
      consult: {
        title: string;
        description: string;
      };
      assess: {
        title: string;
        description: string;
      };
      secure: {
        title: string;
        description: string;
      };
    };
  };
  services: {
    title: string;
    list: Array<{
      title: string;
      description: string;
    }>;
  };
  partners: {
    title: string;
  };
  contact: {
    title: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
    };
  };
  founder: {
    title: string;
  };
}