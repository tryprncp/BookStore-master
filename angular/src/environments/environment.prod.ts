import { Environment } from '@abp/ng.core';

const baseUrl = 'rhyanjaypascualmaglangit.netlify.app';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'BookStore',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:iamrhyanjay-001-site1.itempurl.com',
    redirectUri: baseUrl,
    clientId: 'BookStore_App',
    responseType: 'code',
    scope: 'offline_access BookStore',
    requireHttps: false
  },
  apis: {
    default: {
      url: 'https://localhiamrhyanjay-001-site1.itempurl.comost:44387',
      rootNamespace: 'Acme.BookStore',
    },
  },
} as Environment;
