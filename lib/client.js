import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'jwej12ux',
  dataset: 'production',
  apiVersion: '2022-05-07',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

export const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

// export const sanityClient = createClient(config);

// export const urlFor = (source) => imageUrlBuilder(client).image(source);
