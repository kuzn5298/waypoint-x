import {
  FilterSpecification,
  ExpressionSpecification,
  DataDrivenPropertyValueSpecification,
} from 'maplibre-gl';
import { POI_COLOR_FILTER } from '../../constants/poi-group.constants';

const TRANSPORT_CLASSES = [
  'aerialway',
  'airfield',
  'airport',
  'bicycle_rental',
  'bus',
  'ferry',
  'harbor',
  'heliport',
  'railway',
];

const POINT_FILTER: ExpressionSpecification = [
  '==',
  ['geometry-type'],
  'Point',
];

const CLASSES_FILTER: ExpressionSpecification = [
  'match',
  ['get', 'class'],
  TRANSPORT_CLASSES,
  true,
  false,
];

const RANK_FILTER: ExpressionSpecification = [
  'any',
  ['>=', ['zoom'], 16],
  ['all', ['>=', ['zoom'], 10], ['<=', ['get', 'rank'], 2]],
];

const POI_TRANSPORT_FILTER: FilterSpecification = [
  'all',
  POINT_FILTER,
  CLASSES_FILTER,
  RANK_FILTER,
];

const ICON_IMAGE_FILTER: ExpressionSpecification = [
  'match',
  ['get', 'subclass'],
  ['subway', 'tram_stop'],
  ['concat', ['get', 'class'], '_', ['get', 'subclass']],
  ['get', 'class'],
];

const TEXT_FIELD_FILTER = {
  stops: [
    [11, ''],
    [15, '{name_en}'],
  ],
};

const POI_TRANSPORT_LAYOUT = {
  'icon-image': ICON_IMAGE_FILTER,
  'text-anchor': 'left',
  'text-field': TEXT_FIELD_FILTER,
  'text-font': ['Noto Sans Regular'],
  'text-max-width': 9,
  'text-offset': [0.9, 0],
  'text-size': 12,
  'icon-size': 0.7,
  'icon-padding': 2,
  visibility: 'visible',
};

const getHoverColorFilter = () => {
  const root = document.documentElement;
  const hoverColor =
    getComputedStyle(root).getPropertyValue('--p-primary-color');

  return [
    'case',
    ['boolean', ['feature-state', 'hover'], false],
    hoverColor,
    POI_COLOR_FILTER,
  ];
};

//!TODO: Fix the type of the layout and paint objects

export const getPoiTransportPaint = (isDark = false): any => {
  return {
    'text-color': getHoverColorFilter(),
    'text-halo-blur': 0.5,
    'text-halo-width': 1,
    'text-halo-color': isDark ? '#000000' : '#ffffff',
  };
};

export const getPoiTransportLayout = (): any => POI_TRANSPORT_LAYOUT;

export const getPoiTransportFilter = (): FilterSpecification =>
  POI_TRANSPORT_FILTER;
