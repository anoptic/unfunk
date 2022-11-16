import { createClient } from 'contentful';
import { useState, useEffect } from 'react';
import { contentfulClient } from '../contentful/client';

const useFetch = async () => {
  const [menuImages, setMenuImages] = useState<any | null>(null);

  // const client = createClient({
  //   space: process.env.CONTENTFUL_SPACE_ID as string,
  //   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  // });

  const response = await contentfulClient.getEntry('3yBox6imcKVyYsVAGYFWAx');
  setMenuImages(response);
  console.log(response);

  return menuImages;
};

export default useFetch;
