import { Country } from './Country';

export interface City {
    ID: string;
    EnglishName: string;
    Type: string;
    Country: Country;
}