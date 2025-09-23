export interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface Service {
  id: number;
  name: string;
  description: string;
  image: string;
  features: string[];
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

export interface Video {
  id: number;
  title: string;
  url: string;
  description: string;
}

export interface Social {
  name: string;
  url: string;
  icon: string;
  followers: string;
}

export interface Contact {
  whatsapp: {
    number: string;
    message: string;
  };
  phone: {
    number: string;
    display: string;
  };
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    zipcode: string;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}

export interface ContentData {
  hero: {
    slides: HeroSlide[];
  };
  services: Service[];
  products: Product[];
  videos: Video[];
  socials: Social[];
  contacts: Contact;
}
