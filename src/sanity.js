import SanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

export const sanity = SanityClient({
    projectId: 'cvzpon6k',
    dataset: 'production',
    // this option enables faster responses
    // but can return stale data at times.
    // recommended for client-side queries
    useCdn: true,
});

export const imageUrlBuilder = ImageUrlBuilder(sanity);