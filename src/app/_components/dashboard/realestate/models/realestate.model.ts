import { Address } from '../../../../_models';

export interface RealEstate{
  realEstateId?: string;
  ealsEstateOwnerId?: string;
  name?: string;

  address: Address;
  amenities: Amenity[];
  images?: PropertyImage[];

  price: number;
  area: number;
  lot: number;
  estateStatus: string;
  featured: boolean;

  //Need to be added at the backend:
  type: string; //Single-Family, Condo, Lot


}

export interface Amenity{
  amenityId?: string;
  realEstateId?: string;
  name: string;
  value: string;
}

export interface PropertyImage{
  imageId: string;
  realEstateId?: string;
  description?: string;
  featuredImage?: boolean;
}
