import { imagePath } from '../../utils/url';
import { Category } from './categories';

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

export const filterByCategories = (poses: Pose[], categories: Category[]) => {
  return poses.filter((pose) => categories.includes(pose.category));
};

export const startingPoses = [1, 8, 9, 17, 19, 24, 26, 32, 33, 57, 64, 74];

export const poses: Pose[] = [
  {
    category: 'easy',
    id: 1,
    name: 'Bird / Plank',
    path: '001',
    transitions: [7, 8, 9, 14, 24, 28, 30, 33, 35, 37, 41, 44, 45, 46, 47, 58, 64, 71, 74, 75],
  },
  {
    category: 'medium',
    id: 2,
    name: 'Foot to forearms',
    path: '002',
    transitions: [3, 12, 16, 21, 33, 42, 48, 46, 68],
  },
  {
    category: 'medium',
    id: 3,
    name: 'Shin to hand balance Gate',
    path: '003',
    transitions: [2, 8, 24, 42, 68],
  },
  {
    category: 'hard',
    id: 4,
    name: 'Pashi float balance wide in hands',
    path: '004',
    transitions: [11, 57, 64],
  },
  {
    category: 'hard',
    id: 7,
    name: 'Shoulderstand needle',
    path: '007',
    transitions: [1, 8, 9, 24, 26, 28, 30, 32, 35, 36, 44, 45, 51, 55, 64, 71, 74],
  },
  {
    category: 'easy',
    id: 8,
    name: 'Easy throne',
    path: '008',
    transitions: [1, 3, 7, 15, 16, 19, 21, 24, 31, 35, 37, 38, 42, 52, 54, 58, 59, 63, 70, 74],
  },
  {
    category: 'easy',
    id: 9,
    name: 'Shoulderstand candlestick',
    path: '009',
    transitions: [1, 7, 10, 14, 30, 44, 51, 64, 74],
  },
  {
    category: 'medium',
    id: 10,
    name: 'Bicep stand hands reverse',
    path: '010',
    transitions: [27, 33, 40, 43, 57, 64],
  },
  {
    category: 'medium',
    id: 11,
    name: 'Hangle dangle',
    path: '011',
    transitions: [4, 17, 18, 37, 47, 49, 58],
  },
  {
    category: 'medium',
    id: 12,
    name: 'Butterfly knife',
    path: '012',
    transitions: [2, 16, 33, 41, 46, 48],
  },
  {
    category: 'hard',
    id: 13,
    name: 'Dragonfly / Dead bug float',
    path: '013',
    transitions: [41, 47, 57],
  },
  {
    category: 'hard',
    id: 14,
    name: 'Shoulderstand free',
    path: '014',
    transitions: [1, 7, 9, 23, 26, 28, 34, 35, 47, 49, 51, 55, 64, 71, 74],
  },
  {
    category: 'hard',
    id: 15,
    name: 'Straddle Throne Warrior',
    path: '015',
    transitions: [3, 8, 16, 21, 24, 31, 37, 52, 54],
  },
  {
    category: 'hard',
    id: 16,
    name: 'Foot to hand low (F2H)',
    path: '016',
    transitions: [8, 12, 19, 21, 24, 28, 42, 54, 65, 73, 76],
  },
  {
    category: 'easy',
    id: 17,
    name: 'Straddle bat',
    path: '017',
    transitions: [11, 18, 20, 28, 29, 37, 41, 45, 46, 47, 49, 50, 58, 60],
  },
  {
    category: 'easy',
    id: 18,
    name: 'Tick tock',
    path: '018',
    transitions: [11, 17, 20, 33, 37, 47, 48, 49, 58, 64, 66, 74],
  },
  {
    category: 'easy',
    id: 19,
    name: 'Whale',
    path: '019',
    transitions: [8, 16, 24, 38, 58, 59],
  },
  {
    category: 'hard',
    id: 20,
    name: 'Pashi float',
    path: '020',
    transitions: [17, 27, 33, 36, 43, 48, 51, 57, 60],
  },
  {
    category: 'medium',
    id: 21,
    name: 'Shin in hands float',
    path: '021',
    transitions: [2, 8, 16, 19, 24, 26, 32, 52, 54, 59, 70, 76],
  },
  {
    category: 'medium',
    id: 23,
    name: 'Bicep stand - feet',
    path: '023',
    transitions: [30, 35, 36, 51, 64, 74],
  },
  {
    category: 'easy',
    id: 24,
    name: 'Straddle throne',
    path: '024',
    transitions: [1, 3, 7, 15, 16, 19, 21, 35, 37, 38, 42, 52, 58, 59, 63, 70, 74],
  },
  {
    category: 'hard',
    id: 25,
    name: 'Bird in hand toe hold',
    path: '025',
    transitions: [43, 57, 68],
  },
  {
    category: 'easy',
    id: 26,
    name: 'Foot to shin',
    path: '026',
    transitions: [7, 8, 14, 16, 21, 24, 30, 32, 34, 35, 41, 44, 51, 55, 59, 76],
  },
  {
    category: 'hard',
    id: 27,
    name: 'Shoulderstand free reverse',
    path: '027',
    transitions: [10, 29, 33, 34, 36, 48, 55, 61],
  },
  {
    category: 'hard',
    id: 28,
    name: 'Reverse star',
    path: '028',
    transitions: [1, 7, 17, 30, 44, 45, 74],
  },
  {
    category: 'medium',
    id: 29,
    name: 'Hand to hand (h2h)',
    path: '029',
    transitions: [17, 27, 33, 36, 40, 48, 51, 57, 61],
  },
  {
    category: 'hard',
    id: 30,
    name: 'Shoulderstand supported',
    path: '030',
    transitions: [1, 7, 9, 14, 23, 26, 28, 34, 35, 45, 47, 49, 51, 55, 64, 71, 74],
  },
  {
    category: 'medium',
    id: 31,
    name: 'Straddle throne mermaid',
    path: '031',
    transitions: [15, 47, 49, 52, 59],
  },
  {
    category: 'easy',
    id: 32,
    name: 'Shin to foot',
    path: '032',
    transitions: [7, 14, 16, 21, 26, 35, 41, 55.59, 63, 65, 71],
  },
  {
    category: 'easy',
    id: 33,
    name: 'Star',
    path: '033',
    transitions: [1, 2, 10, 12, 18, 20, 27, 29, 36, 40, 46, 48, 51, 57, 58, 60, 61, 64, 66, 74],
  },
  {
    category: 'medium',
    id: 34,
    name: 'Bicep stand - hands',
    path: '034',
    transitions: [1, 14, 26, 30, 35, 44, 47, 55],
  },
  {
    category: 'hard',
    id: 35,
    name: 'Camel low flying',
    path: '035',
    transitions: [1, 7, 8, 24, 26, 30, 32, 34, 41, 44, 47, 51, 55, 59, 63, 64, 65, 71, 74],
  },
  {
    category: 'medium',
    id: 36,
    name: 'Forearm star balance',
    path: '036',
    transitions: [7, 20, 27, 29, 33, 40, 55, 57, 61],
  },
  {
    category: 'hard',
    id: 37,
    name: "Couch vishnu's",
    path: '037',
    transitions: [8, 11, 17, 18, 20, 24, 41, 47, 49, 58, 64],
  },
  {
    category: 'hard',
    id: 38,
    name: 'Side backfly dancer / Stag',
    path: '038',
    transitions: [8, 19, 24, 29, 43, 57],
  },
  {
    category: 'hard',
    id: 40,
    name: 'Shoulderstand reverse supported',
    path: '040',
    transitions: [10, 29, 33, 40, 48],
  },
  {
    category: 'hard',
    id: 41,
    name: 'Bird in hand presses & rotation',
    path: '041',
    transitions: [1, 13, 17, 26, 35, 37, 43, 44, 46, 47, 49, 57, 64, 74, 75],
  },
  {
    category: 'hard',
    id: 42,
    name: 'Foot to hand mid (F2H)',
    path: '042',
    transitions: [1, 3, 33, 46, 48, 68, 74, 76],
  },
  {
    category: 'hard',
    id: 43,
    name: 'Backfly boat',
    path: '043',
    transitions: [13, 25, 38, 41, 57, 58],
  },
  {
    category: 'hard',
    id: 44,
    name: 'Shoulderstand supported scorpion',
    path: '044',
    transitions: [1, 7, 28, 34, 35, 41, 45, 49, 55, 64, 71, 74],
  },
  {
    category: 'hard',
    id: 45,
    name: 'Reverse star (free)',
    path: '045',
    transitions: [1, 7, 17, 30, 44, 74],
  },
  {
    category: 'hard',
    id: 46,
    name: 'Reverse bird',
    path: '046',
    transitions: [1, 2, 12, 17, 41, 33, 42, 47, 58, 60, 61, 74],
  },
  {
    category: 'hard',
    id: 47,
    name: 'Koala',
    path: '047',
    transitions: [1, 11, 14, 17, 18, 30, 34, 35, 37, 41, 49, 55, 58, 64, 74, 75],
  },
  {
    category: 'hard',
    id: 48,
    name: 'Star free',
    path: '048',
    transitions: [1, 2, 10, 12, 18, 20, 27, 29, 36, 40, 48, 51, 57, 58, 60, 61, 64, 66, 71, 74],
  },
  {
    category: 'medium',
    id: 49,
    name: 'Straddle mono pigeon',
    path: '049',
    transitions: [1, 11, 17, 18, 30, 37, 41, 44, 47, 55, 58, 60, 64, 71, 74, 75],
  },
  {
    category: 'hard',
    id: 50,
    name: 'Prasarita twist / Folded leaf to straddlebat',
    path: '050',
    transitions: [17, 64],
  },
  {
    category: 'medium',
    id: 51,
    name: 'Shoulderstand in hands (lotus)',
    path: '051',
    transitions: [7, 9, 14, 20, 23, 26, 29, 30, 33, 35, 48, 57],
  },
  {
    category: 'hard',
    id: 52,
    name: 'Thinker / Mono throne',
    path: '052',
    transitions: [1, 8, 15, 21, 24, 31, 54, 57, 58, 59, 63, 64, 68, 74],
  },
  {
    category: 'medium',
    id: 54,
    name: 'Double splits',
    path: '054',
    transitions: [1, 8, 15, 16, 21, 52, 59, 70, 71, 74],
  },
  {
    category: 'medium',
    id: 55,
    name: 'Reverse hand to hand (RH2H)',
    path: '055',
    transitions: [1, 7, 9, 14, 23, 26, 28, 30, 34, 35, 36, 41, 44, 47, 64, 71, 74, 76],
  },
  {
    category: 'easy',
    id: 57,
    name: 'Backfly',
    path: '057',
    transitions: [4, 10, 13, 25, 29, 33, 36, 38, 41, 43, 48, 51, 58, 68],
  },
  {
    category: 'hard',
    id: 58,
    name: 'Side star',
    path: '058',
    transitions: [1, 8, 11, 17, 18, 19, 24, 33, 37, 43, 46, 47, 48, 49, 52, 57, 60, 61, 64, 66, 74],
  },
  {
    category: 'hard',
    id: 59,
    name: 'Shin to hands',
    path: '059',
    transitions: [1, 8, 16, 19, 21, 24, 26, 32, 35, 52, 63, 65, 70, 74, 76],
  },
  {
    category: 'medium',
    id: 60,
    name: 'Pashi float in feet',
    path: '060',
    transitions: [17, 20, 33, 46, 48, 58, 61],
  },
  {
    category: 'hard',
    id: 61,
    name: 'Star scorpion',
    path: '061',
    transitions: [27, 29, 33, 36, 46, 48, 58, 60],
  },
  {
    category: 'hard',
    id: 63,
    name: 'Camel in hands',
    path: '063',
    transitions: [8, 24, 32, 35, 52, 59, 65],
  },
  {
    category: 'easy',
    id: 64,
    name: 'Folded leaf',
    path: '064',
    transitions: [
      1, 4, 7, 9, 10, 14, 18, 23, 30, 33, 35, 37, 41, 44, 47, 48, 49, 50, 51, 55, 58, 71, 74, 75,
    ],
  },
  {
    category: 'hard',
    id: 65,
    name: 'Camel (low flying backbend)',
    path: '065',
    transitions: [14, 27, 32, 35, 38, 48, 59, 63, 75],
  },
  {
    category: 'hard',
    id: 66,
    name: 'Star free tuck (staggered)',
    path: '066',
    transitions: [18, 33, 48, 58],
  },
  {
    category: 'hard',
    id: 68,
    name: 'Reverse throne',
    path: '068',
    transitions: [2, 3, 25, 33, 42, 48, 52, 57],
  },
  {
    category: 'hard',
    id: 70,
    name: 'Stair stepper',
    path: '070',
    transitions: [8, 16, 21, 54, 59, 71, 76],
  },
  {
    category: 'hard',
    id: 71,
    name: 'V-Up / F-Me',
    path: '071',
    transitions: [1, 7, 14, 30, 32, 34, 44, 47, 49, 54, 55, 64, 70, 74, 76],
  },
  {
    category: 'easy',
    id: 74,
    name: 'Bird (free)',
    path: '074',
    transitions: [1, 7, 8, 9, 14, 18, 28, 30, 33, 35, 37, 41, 44, 45, 46, 47, 58, 64, 71, 75],
  },
  {
    category: 'hard',
    id: 75,
    name: 'Bow',
    path: '075',
    transitions: [1, 14, 30, 34, 35, 41, 44, 46, 47, 55, 58, 64, 65, 71, 74],
  },
  // Probably a lot back,
  {
    category: 'medium',
    id: 76,
    name: 'Foot to foot (F2F)',
    path: '076',
    transitions: [7, 8, 14, 15, 16, 21, 24, 30, 34, 41, 42, 44, 52, 55, 59, 70, 71],
  },
];
