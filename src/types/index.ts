export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
}

export interface MenuGroup {
  id: string;
  title: string;
  description: string;
  image: string;
  items: MenuItem[];
}

export interface SouvenirItem {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  details: string;
}

export interface Store {
  id: string;
  name: string;
  address: string;
  openTime: string;
  phone: string;
  image: string;
  mapUrl: string;
}
