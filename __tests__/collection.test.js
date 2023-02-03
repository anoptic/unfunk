import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Collection from 'pages/collections/[slug]';
import * as collection from './collection.json';

// const collection = {
//   fields: {
//     title: 'Casual',
//     slug: 'casual',
//     description:
//       'Primum cur ista res digna odio est, nisi quod est turpis? Id Sextilius factum negabat. Summum a vobis bonum voluptas dicitur. Quid enim necesse est, tamquam meretricem in matronarum coetum, sic voluptatem in virtutum concilium adducere? Apud ceteros autem philosophos, qui quaesivit aliquid, tacet; Ita relinquet duas, de quibus etiam atque etiam consideret.',
//     product: [
//       {
//         fields: {
//           name: 'Red Shoes',
//           slug: 'red-shoes',
//           collection: 'Casual',
//           description: 'Only the most comfortable shoes ever!',
//           sku: 'CS1-S314',
//           price: 45,
//           image: {
//             fields: {
//               file: {
//                 contentType: 'image/jpeg',
//                 details: {
//                   image: {
//                     height: 1280,
//                     width: 1280,
//                   },
//                   size: 547034,
//                 },
//                 fileName: 'casual01.jpg',
//                 url: '//images.ctfassets.net/qrq1sxq1xfrw/6HD5b1vnaACVGumC9kpgiG/f325f473491cfa673b6a7c814df90559/casual01.jpg',
//               },
//               title: 'casual01',
//               description: 'red-shoes',
//             },
//           },
//         },
//         sys: {
//           id: '7btJndG1E3U4nwT4T4W7cG',
//         },
//       },
//       {
//         fields: {
//           name: 'Flippity Flops',
//           slug: 'flippity-flops',
//           collection: 'Casual',
//           description: 'Everybody loves sand between their toes.',
//           sku: 'CS2-689E',
//           price: 45,
//           image: {
//             fields: {
//               file: {
//                 contentType: 'image/jpeg',
//                 details: {
//                   image: {
//                     height: 1280,
//                     width: 1280,
//                   },
//                   size: 837118,
//                 },
//                 fileName: 'casual02.jpg',
//                 url: '//images.ctfassets.net/qrq1sxq1xfrw/12BykKJ3O0bZE8zf0k2Lt4/55a62f661cddce394081395cfde60450/casual02.jpg',
//               },
//               title: 'casual02',
//               description: 'flippity-flops',
//             },
//           },
//         },
//         sys: {
//           id: '1AYbqSbme7zNyWMsPQWfjV',
//         },
//       },
//       {
//         fields: {
//           name: 'Critter Slippers',
//           slug: 'critter-slippers',
//           collection: 'Casual',
//           description: 'Fluffy and comfy.',
//           sku: 'CS4-DS3E',
//           price: 65,
//           image: {
//             fields: {
//               file: {
//                 contentType: 'image/jpeg',
//                 details: {
//                   image: {
//                     height: 1280,
//                     width: 1280,
//                   },
//                   size: 548197,
//                 },
//                 fileName: 'casual04.jpg',
//                 url: '//images.ctfassets.net/qrq1sxq1xfrw/3hIKstaH7nhK2MtIe4XLJQ/b037dd7067d93138135003f71b3baf5a/casual04.jpg',
//               },
//               title: 'casual04',
//               description: 'critter-slippers',
//             },
//           },
//         },
//         sys: {
//           id: '4YTnwrGG6y6flqYELW1KjA',
//         },
//       },
//       {
//         fields: {
//           name: 'Open-Toed Sandals',
//           slug: 'open-toed-sandals',
//           collection: 'Casual',
//           description:
//             'Fun fact: You have ten toes so there are spares in case of an accident.',
//           sku: 'CS3-7C23',
//           price: 75,
//           image: {
//             fields: {
//               file: {
//                 contentType: 'image/jpeg',
//                 details: {
//                   image: {
//                     height: 1280,
//                     width: 1280,
//                   },
//                   size: 732738,
//                 },
//                 fileName: 'casual03.jpg',
//                 url: '//images.ctfassets.net/qrq1sxq1xfrw/4O6YgMj1q3ed8ejFXceZ8s/43ed352625cb51a0718f87461cf32be3/casual03.jpg',
//               },
//               title: 'casual03',
//               description: 'open-toed-sandals',
//             },
//           },
//         },
//         sys: {
//           id: '5fEKHE4l9Lfcxuga05Xz5H',
//         },
//       },
//       {
//         fields: {
//           name: 'Ordinary Shoes',
//           slug: 'ordinary-shoes',
//           collection: 'Casual',
//           description:
//             'Plain, ordinary shoes. Nothing special. Exactly your thing.',
//           sku: 'CS7-3M67',
//           price: 85,
//           image: {
//             fields: {
//               file: {
//                 contentType: 'image/jpeg',
//                 details: {
//                   image: {
//                     height: 1280,
//                     width: 1280,
//                   },
//                   size: 525590,
//                 },
//                 fileName: 'casual07.jpg',
//                 url: '//images.ctfassets.net/qrq1sxq1xfrw/qRiLQC7u07qmARFczfw8n/176e00a82e2138f365f955b1a9ccb9b0/casual07.jpg',
//               },
//               title: 'casual07',
//               description: 'ordinary-shoes',
//             },
//           },
//         },
//         sys: {
//           id: '46BPBGJ4VuuuuvrRmK0jkC',
//         },
//       },
//       {
//         fields: {
//           name: 'All-American Sneakers',
//           slug: 'all-american-sneakers',
//           collection: 'Casual',
//           description: 'Hooray for the red, white, and blue!',
//           sku: 'CS8-56WE',
//           price: 95,
//           image: {
//             fields: {
//               file: {
//                 contentType: 'image/jpeg',
//                 details: {
//                   image: {
//                     height: 1280,
//                     width: 1280,
//                   },
//                   size: 664041,
//                 },
//                 fileName: 'casual08.jpg',
//                 url: '//images.ctfassets.net/qrq1sxq1xfrw/2pOS5E4nFZkUbXnW0S0Mir/71d71a3a878495f7a6acf6b90d11c729/casual08.jpg',
//               },
//               title: 'casual08',
//               description: 'all-american-sneakers',
//             },
//           },
//         },
//         sys: {
//           id: '5ST19EJmuq68KMoSAcpwcd',
//         },
//       },
//       {
//         fields: {
//           name: 'Hip Brand-Name Sneakers',
//           slug: 'hip-brand-name-sneakers',
//           collection: 'Casual',
//           description: 'No, the other ones. Still too cool for school though.',
//           sku: 'CS5-4C47',
//           price: 125,
//           image: {
//             fields: {
//               file: {
//                 contentType: 'image/jpeg',
//                 details: {
//                   image: {
//                     height: 1280,
//                     width: 1280,
//                   },
//                   size: 376914,
//                 },
//                 fileName: 'casual05.jpg',
//                 url: '//images.ctfassets.net/qrq1sxq1xfrw/2BqKYYBGbpdU3pXlAuE0L0/d140b0e5ba25806dd1d0ed664785271c/casual05.jpg',
//               },
//               title: 'casual05',
//               description: 'hip-brand-name-sneakers',
//             },
//           },
//         },
//         sys: {
//           id: '7om01MEK4cvZrWlr9xG51d',
//         },
//       },
//       {
//         fields: {
//           name: 'Basketball Shoes',
//           slug: 'basketball-shoes',
//           collection: 'Casual',
//           description: 'You don’t ball. You ain’t foolin’ nobody.',
//           sku: 'CS6-E58C',
//           price: 145,
//           image: {
//             fields: {
//               file: {
//                 contentType: 'image/jpeg',
//                 details: {
//                   image: {
//                     height: 1280,
//                     width: 1280,
//                   },
//                   size: 433572,
//                 },
//                 fileName: 'casual06.jpg',
//                 url: '//images.ctfassets.net/qrq1sxq1xfrw/6hOGRlWaiGBxbN9bxWx9JG/12ae81cb22019564d1e48fc97b81e3d9/casual06.jpg',
//               },
//               title: 'casual06',
//               description: 'basketball-shoes',
//             },
//           },
//         },
//         sys: {
//           id: '32mIqJpCRMZ0FVBpugYsre',
//         },
//       },
//     ],
//     cover: {
//       fields: {
//         file: {
//           contentType: 'image/jpeg',
//           details: {
//             image: {
//               height: 1370,
//               width: 1920,
//             },
//             size: 616018,
//           },
//           fileName: 'casual-shoes.jpg',
//           url: '//images.ctfassets.net/qrq1sxq1xfrw/7HweDWEyRwaRu4d0wuommE/08895abd2049994b9276e472af27c4a0/casual-shoes.jpg',
//         },
//         title: 'casual-shoes',
//       },
//     },
//   },
//   sys: {
//     id: '4zyDAaXEYWDrLlWFnfoeR0',
//     contentType: {
//       sys: {
//         type: 'Link',
//         linkType: 'ContentType',
//         id: 'collection',
//       },
//     },
//   },
// };

// describe('Collection', () => {
//   it('renders collection page', async () => {
//     render(<Collection collection={collection} />);
//   });
//   expect(screen.getByTestId('header')).toBeInTheDocument();
// });

test('renders Collection page', async () => {
  render(<Collection collection={collection} />);

  // await screen.findByText(/collection/i);

  expect(await screen.findByText(/collection/i)).toBeInTheDocument();
});
