import { Geo, geolocation } from '@vercel/functions';

const DEFAULT_GEO: Geo = {
  country: 'PL',
  latitude: '52.22977',
  longitude: '21.01178',
};

export function GET(request: Request) {
  const geo = geolocation(request);

  return new Response(
    JSON.stringify({
      country: geo?.country || DEFAULT_GEO.country,
      latitude: geo?.latitude || DEFAULT_GEO.latitude,
      longitude: geo?.longitude || DEFAULT_GEO.longitude,
    })
  );
}
