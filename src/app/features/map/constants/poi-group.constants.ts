export const POI_SHOPPING_CLASSES = [
  'bank',
  'clothing_store',
  'florist',
  'furniture',
  'gift',
  'grocery',
  'hairdresser',
  'laundry',
  'music',
  'pharmacy',
  'shop',
  'suitcase',
];

export const POI_SHOPPING_COLOR = '#5b92e5';

export const POI_EATING_CLASSES = [
  'alcohol_shop',
  'bakery',
  'bar',
  'beer',
  'butcher',
  'cafe',
  'fast_food',
  'ice_cream',
  'restaurant',
  'sushi',
];

export const POI_EATING_COLOR = '#e5a65b';

export const POI_SPORT_CLASSES = [
  'american_football',
  'baseball',
  'basketball',
  'cricket',
  'golf',
  'pitch',
  'skateboard',
  'skiing',
  'soccer',
  'sports_centre',
  'swimming_pool',
  'table_tennis',
  'tennis',
];

export const POI_SPORT_COLOR = '#2e8b57';

export const POI_EDUCATION_CLASSES = ['college', 'library', 'museum', 'school'];

export const POI_EDUCATION_COLOR = '#a67c52';

export const POI_LEISURE_CLASSES = [
  'aquarium',
  'art_gallery',
  'attraction',
  'bicycle',
  'cinema',
  'dog_park',
  'playground',
  'stadium',
  'theatre',
  'theme_park',
  'zoo',
];

export const POI_LEISURE_COLOR = '#d65ba5';

export const POI_TRANSPORT_CLASSES = [
  'aerialway',
  'airfield',
  'airport',
  'bicycle_rental',
  'bus',
  'car',
  'entrance',
  'ferry',
  'fuel',
  'harbor',
  'heliport',
  'parking',
  'parking_garage',
  'railway',
];

export const POI_TRANSPORT_COLOR = '#6a5be5';

export const POI_RELIGION_CLASSES = [
  'place_of_worship',
  'religious_buddhist',
  'religious_christian',
  'religious_jewish',
  'religious_muslim',
  'religious_shinto',
];

export const POI_RELIGION_COLOR = '#767676';

export const POI_PUBLIC_SERVICES_CLASSES = [
  'office',
  'cemetery',
  'embassy',
  'multi',
  'police',
  'post',
  'prison',
  'ranger_station',
  'roadblock',
  'rocket',
  'toilets',
  'town_hall',
  'water',
  'wheelchair',
];

export const POI_PUBLIC_SERVICES_COLOR = '#767676';

export const POI_NATURE_CLASSES = [
  'garden',
  'mountain',
  'park',
  'picnic_site',
  'volcano',
  'wetland',
];

export const POI_NATURE_COLOR = '#4caf50';

export const POI_HEALTH_CLASSES = [
  'danger',
  'dentist',
  'doctors',
  'fire_station',
  'heart',
  'hospital',
  'veterinary',
];

export const POI_HEALTH_COLOR = '#e55b5b';

export const POI_TOURISM_CLASSES = [
  'campsite',
  'information',
  'lodging',
  'shelter',
];

export const POI_TOURISM_COLOR = '#9370db';

export const POI_LANDMARK_CLASSES = ['castle', 'lighthouse', 'monument'];

export const POI_LANDMARK_COLOR = '#c4a484';

export const POI_DEFAULT_COLOR = '#666';

export const POI_COLOR_FILTER = [
  'match',
  ['get', 'class'],
  ...[
    [POI_SHOPPING_CLASSES, POI_SHOPPING_COLOR],
    [POI_EATING_CLASSES, POI_EATING_COLOR],
    [POI_SPORT_CLASSES, POI_SPORT_COLOR],
    [POI_EDUCATION_CLASSES, POI_EDUCATION_COLOR],
    [POI_LEISURE_CLASSES, POI_LEISURE_COLOR],
    [POI_TRANSPORT_CLASSES, POI_TRANSPORT_COLOR],
    [POI_RELIGION_CLASSES, POI_RELIGION_COLOR],
    [POI_PUBLIC_SERVICES_CLASSES, POI_PUBLIC_SERVICES_COLOR],
    [POI_NATURE_CLASSES, POI_NATURE_COLOR],
    [POI_HEALTH_CLASSES, POI_HEALTH_COLOR],
    [POI_TOURISM_CLASSES, POI_TOURISM_COLOR],
    [POI_LANDMARK_CLASSES, POI_LANDMARK_COLOR],
  ].reduce((acc, [classes, color]) => {
    return [...acc, classes, color];
  }, []),
  POI_DEFAULT_COLOR,
];
