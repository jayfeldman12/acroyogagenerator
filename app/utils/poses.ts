import { imagePath } from './url';

export const posePathToUrl = (path: string) => {
  return `${imagePath}/image-${path}.jpg`;
};

export const poses = Array(76)
  .fill('')
  .map(
    (_, index) => posePathToUrl(index.toString().padStart(3, '0')) // Converts 4 => 004, 34 => 034 etc
  );

export const defaultPoseWidth = 500;
export const defaultPoseHeight = 625;

export interface Pose {
  id: number;
  name: string;
  path: string;
  transitions: number[];
}

export const startingPoses = [1];

export const poseFlows: Pose[] = [
  {
    id: 0,
    name: 'Placeholder so that the index matches the pose id',
    path: '',
    transitions: [],
  },
  {
    id: 1,
    name: 'Bird',
    path: '001',
    transitions: [1, 2, 31, 46, 74, 76],
  },
  {
    id: 2,
    name: 'Foot to forearms',
    path: '002',
    transitions: [1, 22, 41, 53, 64, 72, 73],
  },
  {
    id: 3,
    name: 'Shin to hand balance Gate',
    path: '003',
    transitions: [1, 3, 14, 27, 58],
  },
  {
    id: 4,
    name: 'Pashi float balance wide in hands',
    path: '004',
    transitions: [1, 12, 23, 24, 47, 68, 71],
  },
  {
    id: 5,
    name: 'Couch vash',
    path: '005',
    transitions: [12, 41, 53, 68, 69],
  },
  {
    id: 6,
    name: 'Birth 3 point contact',
    path: '006',
    transitions: [2, 16, 59],
  },
  {
    id: 7,
    name: 'Shoulder stand needle',
    path: '007',
    transitions: [13, 24, 34, 72],
  },
  {
    id: 8,
    name: 'Easy throne',
    path: '008',
    transitions: [1, 33, 55],
  },
  {
    id: 9,
    name: 'Shoulder stand candlestick',
    path: '009',
    transitions: [1, 5, 22, 24, 35, 48],
  },
  {
    id: 10,
    name: 'One-legged pigeon',
    path: '010',
    transitions: [3, 11, 16, 27, 33, 49],
  },
  {
    id: 11,
    name: 'Firefly pose',
    path: '011',
    transitions: [2, 14, 24, 43, 54, 63],
  },
  {
    id: 12,
    name: 'Peacock pose',
    path: '012',
    transitions: [4, 12, 25, 36, 41, 56, 67],
  },
  {
    id: 13,
    name: 'Eight-angle pose',
    path: '013',
    transitions: [11, 13, 23, 31, 42, 58],
  },
  {
    id: 14,
    name: 'Lotus headstand',
    path: '014',
    transitions: [2, 8, 21, 37, 45, 70],
  },
  {
    id: 15,
    name: 'Flying pigeon',
    path: '015',
    transitions: [9, 12, 26, 46, 55, 66],
  },
  {
    id: 16,
    name: 'Wild thing',
    path: '016',
    transitions: [3, 7, 16, 32, 47, 62],
  },
  {
    id: 17,
    name: 'Wheel pose',
    path: '017',
    transitions: [5, 15, 20, 39, 53, 71],
  },
  {
    id: 18,
    name: 'Forearm stand',
    path: '018',
    transitions: [14, 19, 28, 50, 57, 73],
  },
  {
    id: 19,
    name: 'Side plank',
    path: '019',
    transitions: [6, 9, 17, 29, 44, 75],
  },
  {
    id: 20,
    name: 'Revolved triangle',
    path: '020',
    transitions: [3, 12, 22, 38, 51, 60],
  },
  {
    id: 21,
    name: 'Half moon',
    path: '021',
    transitions: [4, 10, 18, 30, 48, 65],
  },
  {
    id: 22,
    name: 'Revolved half moon',
    path: '022',
    transitions: [6, 13, 25, 40, 52, 61],
  },
  {
    id: 23,
    name: 'Handstand',
    path: '023',
    transitions: [7, 14, 19, 35, 49, 72],
  },
  {
    id: 24,
    name: 'Lizard pose',
    path: '024',
    transitions: [5, 11, 20, 34, 43, 69],
  },
  {
    id: 25,
    name: 'Bound side angle',
    path: '025',
    transitions: [6, 15, 23, 36, 54, 64],
  },
  {
    id: 26,
    name: 'Half pigeon',
    path: '026',
    transitions: [8, 16, 21, 37, 45, 70],
  },
  {
    id: 27,
    name: 'Crow',
    path: '027',
    transitions: [2, 9, 24, 35, 42, 73],
  },
  {
    id: 28,
    name: 'Headstand',
    path: '028',
    transitions: [3, 14, 29, 38, 57, 72],
  },
  {
    id: 29,
    name: 'Warrior II',
    path: '029',
    transitions: [10, 18, 26, 31, 50, 63],
  },
  {
    id: 30,
    name: 'Revolved triangle',
    path: '030',
    transitions: [7, 11, 27, 39, 47, 75],
  },
  {
    id: 31,
    name: 'Camel',
    path: '031',
    transitions: [1, 12, 19, 33, 55, 76],
  },
  {
    id: 32,
    name: 'Reverse plank',
    path: '032',
    transitions: [8, 13, 22, 40, 56, 71],
  },
  {
    id: 33,
    name: 'Fish',
    path: '033',
    transitions: [4, 15, 28, 44, 58, 70],
  },
  {
    id: 34,
    name: 'Eagle',
    path: '034',
    transitions: [5, 16, 21, 36, 53, 68],
  },
  {
    id: 35,
    name: 'Half lotus',
    path: '035',
    transitions: [2, 10, 23, 39, 49, 67],
  },
  {
    id: 36,
    name: 'Tree',
    path: '036',
    transitions: [6, 17, 24, 42, 51, 66],
  },
  {
    id: 37,
    name: 'Upward facing dog',
    path: '037',
    transitions: [3, 9, 20, 38, 59, 74],
  },
  {
    id: 38,
    name: 'Downward facing dog',
    path: '038',
    transitions: [1, 11, 25, 46, 54, 60],
  },
  {
    id: 39,
    name: 'Extended triangle',
    path: '039',
    transitions: [7, 14, 29, 43, 52, 65],
  },
  {
    id: 40,
    name: 'Goddess',
    path: '040',
    transitions: [2, 12, 27, 34, 57, 69],
  },
  {
    id: 41,
    name: 'Revolved chair',
    path: '041',
    transitions: [8, 13, 22, 44, 56, 75],
  },
  {
    id: 42,
    name: 'Chair',
    path: '042',
    transitions: [3, 16, 28, 41, 48, 73],
  },
  {
    id: 43,
    name: 'Warrior I',
    path: '043',
    transitions: [5, 17, 30, 45, 50, 61],
  },

  {
    id: 44,
    name: 'Warrior II',
    path: '044',
    transitions: [7, 14, 23, 37, 51, 62],
  },
  {
    id: 45,
    name: 'Warrior III',
    path: '045',
    transitions: [8, 16, 24, 38, 57, 71],
  },
  {
    id: 46,
    name: 'Reverse warrior',
    path: '046',
    transitions: [6, 12, 26, 39, 58, 66],
  },
  {
    id: 47,
    name: 'Extended side angle',
    path: '047',
    transitions: [4, 15, 27, 40, 52, 70],
  },
  {
    id: 48,
    name: 'High lunge',
    path: '048',
    transitions: [9, 19, 29, 46, 60, 76],
  },
  {
    id: 49,
    name: 'Low lunge',
    path: '049',
    transitions: [5, 18, 25, 42, 55, 63],
  },
  {
    id: 50,
    name: 'Pyramid',
    path: '050',
    transitions: [7, 13, 21, 43, 54, 74],
  },
  {
    id: 51,
    name: 'Garland pose',
    path: '051',
    transitions: [6, 14, 22, 36, 59, 72],
  },
  {
    id: 52,
    name: 'Plank',
    path: '052',
    transitions: [8, 17, 28, 47, 61, 75],
  },
  {
    id: 53,
    name: 'Chaturanga',
    path: '053',
    transitions: [9, 15, 24, 39, 57, 70],
  },
  {
    id: 54,
    name: 'Upward-facing dog',
    path: '054',
    transitions: [4, 11, 26, 42, 52, 69],
  },
  {
    id: 55,
    name: 'Downward-facing dog',
    path: '055',
    transitions: [5, 12, 23, 41, 56, 68],
  },
  {
    id: 56,
    name: 'Extended puppy',
    path: '056',
    transitions: [10, 16, 27, 38, 53, 67],
  },
  {
    id: 57,
    name: "Child's pose",
    path: '057',
    transitions: [7, 19, 30, 44, 60, 73],
  },
  {
    id: 58,
    name: 'Thread the needle',
    path: '058',
    transitions: [6, 18, 25, 43, 51, 62],
  },
  {
    id: 59,
    name: 'Happy baby',
    path: '059',
    transitions: [4, 14, 29, 36, 55, 71],
  },
  {
    id: 60,
    name: 'Bridge',
    path: '060',
    transitions: [5, 13, 22, 37, 54, 65],
  },
  {
    id: 61,
    name: 'Revolved triangle',
    path: '061',
    transitions: [7, 15, 26, 42, 50, 72],
  },
  {
    id: 62,
    name: 'Wild thing',
    path: '062',
    transitions: [8, 17, 28, 39, 57, 70],
  },
  {
    id: 63,
    name: 'Extended triangle',
    path: '063',
    transitions: [3, 12, 20, 34, 47, 74],
  },
  {
    id: 64,
    name: 'Revolved extended triangle',
    path: '064',
    transitions: [4, 11, 23, 35, 56, 69],
  },
  {
    id: 65,
    name: 'Camel',
    path: '065',
    transitions: [5, 14, 27, 38, 48, 75],
  },
  {
    id: 66,
    name: 'Sphinx',
    path: '066',
    transitions: [6, 16, 24, 41, 53, 68],
  },
  {
    id: 67,
    name: 'Reverse plank',
    path: '067',
    transitions: [9, 19, 29, 40, 52, 66],
  },
  {
    id: 68,
    name: 'Garland',
    path: '068',
    transitions: [10, 18, 30, 44, 51, 67],
  },
  {
    id: 69,
    name: 'Plow',
    path: '069',
    transitions: [12, 21, 31, 46, 58, 76],
  },
  {
    id: 70,
    name: 'Seated forward fold',
    path: '070',
    transitions: [13, 22, 32, 45, 59, 73],
  },
  {
    id: 71,
    name: 'Boat',
    path: '071',
    transitions: [14, 23, 33, 43, 55, 78],
  },
  {
    id: 72,
    name: 'Revolved side angle',
    path: '072',
    transitions: [15, 24, 34, 42, 60, 77],
  },
  {
    id: 73,
    name: 'Low lunge',
    path: '073',
    transitions: [16, 25, 35, 41, 57, 79],
  },
  {
    id: 74,
    name: 'Half lotus',
    path: '074',
    transitions: [17, 26, 36, 40, 54, 80],
  },
  {
    id: 75,
    name: 'Revolved half moon lunge',
    path: '075',
    transitions: [18, 27, 37, 39, 61, 81],
  },
  {
    id: 76,
    name: 'Frog',
    path: '076',
    transitions: [19, 28, 38, 45, 56, 82],
  },
];
