import { environment } from 'src/environments/environment';

//Instead of adding your dev and prod apiHost in environemnts add it here in the config file
export const baseUrl = environment.production
  ? 'https://api.ArafaStore.com'
  : 'http://localhost:3000';

// equipments route
export const productUrl = baseUrl + '/products';

// cart route
export const cartUrl = baseUrl + '/cart';
