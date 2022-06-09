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
    issuer: 'https://iamrhyanjay-001-site1.itempurl.com:44387',
    redirectUri: baseUrl,
    clientId: 'BookStore_App',
    responseType: 'code',
    scope: 'offline_access BookStore',
    requireHttps: false,
  },
  apis: {
    default: {
      url: 'https://iamrhyanjay-001-site1.itempurl.com:44387',
      rootNamespace: 'Acme.BookStore',
    },
  },
} as Environment;
