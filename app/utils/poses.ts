import { imagePath } from './url';

export const posePathToUrl = ({ path }: Pose) => {
  return `${imagePath}/image-${path}.jpg`;
};

export const defaultPoseWidth = 500;
export const defaultPoseHeight = 625;

export interface Pose {
  category: Category;
  id: number;
  name: string;
  path: string;
  transitions: number[];
}

export type Category = 'easy' | 'medium' | 'hard';

export const startingPoses = [1, 6, 8, 9, 17, 18, 19, 24, 26, 32, 33, 39, 56, 57, 64, 72, 74];

export const poses: Pose[] = [
  {
    category: 'easy',
    id: 0,
    name: 'Placeholder so that the index matches the pose id',
    path: '',
    transitions: [],
  },
  {
    category: 'easy',
    id: 1,
    name: 'Bird / Plank',
    path: '001',
    transitions: [
      5, 6, 7, 8, 9, 14, 21, 28, 30, 33, 35, 39, 40, 41, 44, 45, 47, 58, 64, 67, 69, 71, 74, 75,
    ],
  },
  {
    category: 'medium',
    id: 2,
    name: 'Foot to forearms',
    path: '002',
    transitions: [46],
  },
  {
    category: 'medium',
    id: 3,
    name: 'Shin to hand balance Gate',
    path: '003',
    transitions: [8, 24, 68],
  },
  {
    category: 'hard',
    id: 4,
    name: 'Pashi float balance wide in hands',
    path: '004',
    transitions: [17, 22, 57],
  },
  {
    category: 'hard',
    id: 5,
    name: 'Couch vash',
    path: '005',
    transitions: [24, 37],
  },
  {
    category: 'easy',
    id: 6,
    name: 'Bird 3 point contact',
    path: '006',
    transitions: [
      1, 5, 7, 8, 9, 14, 21, 28, 30, 33, 35, 39, 40, 41, 44, 45, 47, 58, 64, 67, 69, 71, 74, 75,
    ],
  },
  {
    category: 'hard',
    id: 7,
    name: 'Shoulderstand needle',
    path: '007',
    transitions: [13, 24, 34, 72],
  },
  {
    category: 'easy',
    id: 8,
    name: 'Easy throne',
    path: '008',
    transitions: [1, 33, 55],
  },
  {
    category: 'easy',
    id: 9,
    name: 'Shoulderstand candlestick',
    path: '009',
    transitions: [1, 5, 22, 24, 35, 48],
  },
  {
    category: 'medium',
    id: 10,
    name: 'Bicep stand hands reverse',
    path: '010',
    transitions: [3, 11, 16, 27, 33, 49],
  },
  {
    category: 'medium',
    id: 11,
    name: 'Hangle dangle',
    path: '011',
    transitions: [2, 14, 24, 43, 54, 63],
  },
  {
    category: 'medium',
    id: 12,
    name: 'Butterfly knife',
    path: '012',
    transitions: [4, 18, 25, 36, 41, 56, 67],
  },
  {
    category: 'hard',
    id: 13,
    name: 'Dragonfly / Dead bug float',
    path: '013',
    transitions: [11, 15, 23, 31, 42, 58],
  },
  {
    category: 'hard',
    id: 14,
    name: 'Shoulderstand free',
    path: '014',
    transitions: [2, 8, 21, 37, 45, 70],
  },
  {
    category: 'hard',
    id: 15,
    name: 'Straddle Throne Warrior',
    path: '015',
    transitions: [9, 12, 26, 46, 55, 66],
  },
  {
    category: 'hard',
    id: 16,
    name: 'Foot to hand low (F2H)',
    path: '016',
    transitions: [3, 7, 18, 32, 47, 62],
  },
  {
    category: 'easy',
    id: 17,
    name: 'Straddle bat',
    path: '017',
    transitions: [5, 15, 20, 39, 53, 71],
  },
  {
    category: 'easy',
    id: 18,
    name: 'Tick tock',
    path: '018',
    transitions: [14, 19, 28, 50, 57, 73],
  },
  {
    category: 'easy',
    id: 19,
    name: 'Whale',
    path: '019',
    transitions: [6, 9, 17, 29, 44, 75],
  },
  {
    category: 'hard',
    id: 20,
    name: 'Pashi float',
    path: '020',
    transitions: [3, 12, 22, 38, 51, 60],
  },
  {
    category: 'medium',
    id: 21,
    name: 'Shin in hands float',
    path: '021',
    transitions: [4, 10, 18, 30, 48, 65],
  },
  {
    category: 'hard',
    id: 22,
    name: 'Back bow backfly',
    path: '022',
    transitions: [6, 13, 25, 40, 52, 61],
  },
  {
    category: 'medium',
    id: 23,
    name: 'Bicep stand - feet',
    path: '023',
    transitions: [7, 14, 19, 35, 49, 72],
  },
  {
    category: 'easy',
    id: 24,
    name: 'Straddle throne',
    path: '024',
    transitions: [5, 11, 20, 34, 43, 69],
  },
  {
    category: 'hard',
    id: 25,
    name: 'Bird in hand toe hold',
    path: '025',
    transitions: [6, 15, 23, 36, 54, 64],
  },
  {
    category: 'easy',
    id: 26,
    name: 'Foot to shin',
    path: '026',
    transitions: [8, 16, 21, 37, 45, 70],
  },
  {
    category: 'hard',
    id: 27,
    name: 'Shoulderstand free reverse',
    path: '027',
    transitions: [2, 9, 24, 35, 42, 73],
  },
  {
    category: 'hard',
    id: 28,
    name: 'Reverse star',
    path: '028',
    transitions: [3, 14, 29, 38, 57, 72],
  },
  {
    category: 'medium',
    id: 29,
    name: 'Hand to hand (h2h)',
    path: '029',
    transitions: [10, 18, 26, 31, 50, 63],
  },
  {
    category: 'hard',
    id: 30,
    name: 'Shoulderstand supported',
    path: '030',
    transitions: [7, 11, 27, 39, 47, 75],
  },
  {
    category: 'medium',
    id: 31,
    name: 'Straddle throne mermaid',
    path: '031',
    transitions: [1, 12, 19, 33, 55, 76],
  },
  {
    category: 'easy',
    id: 32,
    name: 'Shin to foot',
    path: '032',
    transitions: [8, 13, 22, 40, 56, 71],
  },
  {
    category: 'easy',
    id: 33,
    name: 'Star',
    path: '033',
    transitions: [4, 15, 28, 44, 58, 70],
  },
  {
    category: 'medium',
    id: 34,
    name: 'Bicep stand - hands',
    path: '034',
    transitions: [5, 16, 21, 36, 53, 68],
  },
  {
    category: 'hard',
    id: 35,
    name: 'Camel low flying',
    path: '035',
    transitions: [2, 10, 23, 39, 49, 67],
  },
  {
    category: 'medium',
    id: 36,
    name: 'Forearm star balance',
    path: '036',
    transitions: [6, 17, 24, 42, 51, 66],
  },
  {
    category: 'hard',
    id: 37,
    name: "Couch vishnu's",
    path: '037',
    transitions: [3, 9, 20, 38, 59, 74],
  },
  {
    category: 'hard',
    id: 38,
    name: 'Side backfly dancer / Stag',
    path: '038',
    transitions: [1, 11, 25, 46, 54, 60],
  },
  {
    category: 'easy',
    id: 39,
    name: 'Shoulderstand candlestick',
    path: '039',
    transitions: [7, 14, 29, 43, 52, 65],
  },
  {
    category: 'hard',
    id: 40,
    name: 'Shoulderstand reverse supported',
    path: '040',
    transitions: [2, 12, 27, 34, 57, 69],
  },
  {
    category: 'hard',
    id: 41,
    name: 'Bird in hand presses & rotation',
    path: '041',
    transitions: [8, 13, 22, 44, 56, 75],
  },
  {
    category: 'hard',
    id: 42,
    name: 'Foot to hand mid (F2H)',
    path: '042',
    transitions: [3, 16, 28, 41, 48, 73],
  },
  {
    category: 'hard',
    id: 43,
    name: 'Backfly boat',
    path: '043',
    transitions: [5, 17, 30, 45, 50, 61],
  },
  {
    category: 'hard',
    id: 44,
    name: 'Shoulderstand supported scorpion',
    path: '044',
    transitions: [7, 14, 23, 37, 51, 62],
  },
  {
    category: 'hard',
    id: 45,
    name: 'Reverse star (free)',
    path: '045',
    transitions: [8, 16, 24, 38, 57, 71],
  },
  {
    category: 'hard',
    id: 46,
    name: 'Reverse bird',
    path: '046',
    transitions: [6, 12, 26, 39, 58, 66],
  },
  {
    category: 'hard',
    id: 47,
    name: 'Koala',
    path: '047',
    transitions: [4, 15, 27, 40, 52, 70],
  },
  {
    category: 'hard',
    id: 48,
    name: 'Star free',
    path: '048',
    transitions: [9, 19, 29, 46, 60, 76],
  },
  {
    category: 'medium',
    id: 49,
    name: 'Straddle mono pigeon',
    path: '049',
    transitions: [5, 18, 25, 42, 55, 63],
  },
  {
    category: 'hard',
    id: 50,
    name: 'Prasarita twist / Folded leaf to straddlebat',
    path: '050',
    transitions: [7, 13, 21, 43, 54, 74],
  },
  {
    category: 'medium',
    id: 51,
    name: 'Shoulderstand in hands (lotus)',
    path: '051',
    transitions: [6, 14, 22, 36, 59, 72],
  },
  {
    category: 'hard',
    id: 52,
    name: 'Thinker / Mono throne',
    path: '052',
    transitions: [8, 17, 28, 47, 61, 75],
  },
  {
    category: 'medium',
    id: 53,
    name: 'Bicep stand (hands reverse)',
    path: '053',
    transitions: [9, 15, 24, 39, 57, 70],
  },
  {
    category: 'medium',
    id: 54,
    name: 'Double splits',
    path: '054',
    transitions: [4, 11, 26, 42, 52, 69],
  },
  {
    category: 'medium',
    id: 55,
    name: 'Reverse hand to hand (RH2H)',
    path: '055',
    transitions: [5, 12, 23, 41, 56, 68],
  },
  {
    category: 'easy',
    id: 56,
    name: 'Backfly dancer',
    path: '056',
    transitions: [10, 16, 27, 38, 53, 67],
  },
  {
    category: 'easy',
    id: 57,
    name: 'Backfly',
    path: '057',
    transitions: [7, 19, 30, 44, 60, 73],
  },
  {
    category: 'hard',
    id: 58,
    name: 'Side star',
    path: '058',
    transitions: [6, 18, 25, 43, 51, 62],
  },
  {
    category: 'hard',
    id: 59,
    name: 'Shin to hands',
    path: '059',
    transitions: [4, 14, 29, 36, 55, 71],
  },
  {
    category: 'medium',
    id: 60,
    name: 'Pashi float in feet',
    path: '060',
    transitions: [5, 13, 22, 37, 54, 65],
  },
  {
    category: 'hard',
    id: 61,
    name: 'Star scorpion',
    path: '061',
    transitions: [7, 15, 26, 42, 50, 72],
  },
  {
    category: 'hard',
    id: 62,
    name: 'Side backfly dancer',
    path: '062',
    transitions: [8, 17, 28, 39, 57, 70],
  },
  {
    category: 'hard',
    id: 63,
    name: 'Camel in hands',
    path: '063',
    transitions: [3, 12, 20, 34, 47, 74],
  },
  {
    category: 'easy',
    id: 64,
    name: 'Folded leaf',
    path: '064',
    transitions: [4, 11, 23, 35, 56, 69],
  },
  {
    category: 'hard',
    id: 65,
    name: 'Camel (low flying backbend)',
    path: '065',
    transitions: [5, 14, 27, 38, 48, 75],
  },
  {
    category: 'hard',
    id: 66,
    name: 'Star free tuck (staggered)',
    path: '066',
    transitions: [6, 16, 24, 41, 53, 68],
  },
  {
    category: 'hard',
    id: 67,
    name: 'Shoulderstand (supported)',
    path: '067',
    transitions: [9, 19, 29, 40, 52, 66],
  },
  {
    category: 'hard',
    id: 68,
    name: 'Reverse throne',
    path: '068',
    transitions: [10, 18, 30, 44, 51, 67],
  },
  {
    category: 'hard',
    id: 69,
    name: 'Shoulderstand (free)',
    path: '069',
    transitions: [12, 21, 31, 46, 58, 76],
  },
  {
    category: 'hard',
    id: 70,
    name: 'Stair stepper',
    path: '070',
    transitions: [13, 22, 32, 45, 59, 73],
  },
  {
    category: 'hard',
    id: 71,
    name: 'V-Up / F-Me',
    path: '071',
    transitions: [14, 23, 33, 43, 55, 78],
  },
  {
    category: 'easy',
    id: 72,
    name: 'Pashi float',
    path: '072',
    transitions: [15, 24, 34, 42, 60, 77],
  },
  {
    category: 'hard',
    id: 73,
    name: 'Camel (low flying)',
    path: '073',
    transitions: [16, 25, 35, 41, 57, 79],
  },
  {
    category: 'easy',
    id: 74,
    name: 'Bird (free)',
    path: '074',
    transitions: [17, 26, 36, 40, 54, 80],
  },
  {
    category: 'hard',
    id: 75,
    name: 'Bow',
    path: '075',
    transitions: [18, 27, 37, 39, 61, 81],
  },
  {
    category: 'medium',
    id: 76,
    name: 'Foot to foot (F2F)',
    path: '076',
    transitions: [19, 28, 38, 45, 56, 82],
  },
];
