import { ExpressionSpecification, FilterSpecification } from 'maplibre-gl';
import {
  POI_COLOR_FILTER,
  POI_EATING_CLASSES,
  POI_EDUCATION_CLASSES,
  POI_HEALTH_CLASSES,
  POI_LANDMARK_CLASSES,
  POI_LEISURE_CLASSES,
  POI_PUBLIC_SERVICES_CLASSES,
  POI_RELIGION_CLASSES,
  POI_SHOPPING_CLASSES,
  POI_SPORT_CLASSES,
  POI_TOURISM_CLASSES,
} from '../../constants/poi-group.constants';

const CLASSES_FILTER: ExpressionSpecification = [
  'match',
  ['get', 'class'],
  [
    ...POI_SHOPPING_CLASSES,
    ...POI_EATING_CLASSES,
    ...POI_SPORT_CLASSES,
    ...POI_EDUCATION_CLASSES,
    ...POI_LEISURE_CLASSES,
    ...POI_RELIGION_CLASSES,
    ...POI_PUBLIC_SERVICES_CLASSES.filter((c) => !['toilets'].includes(c)),
    ...POI_HEALTH_CLASSES,
    ...POI_TOURISM_CLASSES,
    ...POI_LANDMARK_CLASSES,
  ],
  true,
  false,
];

const POINT_FILTER: ExpressionSpecification = [
  '==',
  ['geometry-type'],
  'Point',
];

const NAME_FILTER: ExpressionSpecification = ['has', 'name'];

const POI_FILTER: FilterSpecification = [
  'all',
  POINT_FILTER,
  NAME_FILTER,
  CLASSES_FILTER,
];

const POI_PAINT = {
  'text-color': POI_COLOR_FILTER,
  'text-halo-blur': 0.5,
  'text-halo-width': 1,
};

const ICON_IMAGE_FILTER: ExpressionSpecification = [
  'match',
  ['get', 'subclass'],
  ['florist', 'furniture', 'soccer', 'tennis'],
  ['get', 'subclass'],
  ['get', 'class'],
];

const POI_LAYOUT = {
  'icon-image': ICON_IMAGE_FILTER,
  'text-anchor': 'top',
  'text-field': '{name}',
  'text-font': ['Noto Sans Regular'],
  'text-max-width': 9,
  'text-offset': [0, 0.6],
  'text-size': 12,
  'icon-size': 0.7,
  'icon-padding': 2.5,
  visibility: 'visible',
};

//!TODO: Fix the type of the layout and paint objects
export const getPoiFilter = (): FilterSpecification => POI_FILTER;

export const getPoiLayout = (): any => POI_LAYOUT;

export const getPoiPaint = (isDark = false): any => {
  return {
    ...POI_PAINT,
    'text-halo-color': isDark ? '#000000' : '#ffffff',
  };
};
