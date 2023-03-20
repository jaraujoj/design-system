import { state } from '../../data/store';
import { GeocodeLocation, GeocodeResponse } from '../../models/geocode.model';
import { gisAPIUrl, placesUrl } from './places.settings';
import { hardNormalize } from './search-utilities';

/**
 * Query the Gis API for locations and localities (pois)
 *
 * @param query User input string
 * @returns
 */
export const queryPlaces = async (query: string): Promise<GeocodeLocation[]> => {
  if (query.length === 0) {
    return [];
  }

  const searchParameters = Object.entries({
    query: encodeURIComponent(query),
    lang: state.currentLanguage,
    limit: 7,
  }).reduce((s, [k, v], i) => `${s}${i === 0 ? '?' : '&'}${k}=${v}`, '');

  const geocoderUrl = `${gisAPIUrl}/Geocode${searchParameters}`;

  try {
    const geocodeResponse = await fetch(geocoderUrl);
    const geocodeJSON = (await geocodeResponse.json()) as GeocodeResponse;
    if (!geocodeJSON.ok) {
      throw new Error(geocodeJSON.info);
    }
    return geocodeJSON.locations;
  } catch (error) {
    console.error(
      'Fetching places failed. Did you add "places.post.ch" to your connect-src content security policy?',
    );
    throw error;
  }
};

/**
 * Try to highlight place suggestions
 * Limitation: accented chars are not handled by this basic function
 *
 * @param query Search term
 * @param place Name of the suggested place
 * @returns
 */
export const highlightPlacesString = (query: string | undefined, place: string) => {
  if (query === undefined) return place;

  // Strip accents from the string
  const reference = hardNormalize(place);
  const q = hardNormalize(query);
  const indexOfQuery = reference.indexOf(q);

  if (indexOfQuery < 0) {
    return place;
  }

  return `${place.substring(0, indexOfQuery)}{${place.substring(
    indexOfQuery,
    indexOfQuery + query.length,
  )}}${place.substring(indexOfQuery + query.length, place.length)}`;
};

/**
 * Get the deeplink to any location found via geocoder
 *
 * @param location A location from the Gis API Geocode endpoint
 * @returns
 */
export const getPlacesUrl = (location: GeocodeLocation): string => {
  let url: string;

  if (location.id) {
    url = `${placesUrl}/${state.currentLanguage}/${location.id}/detail`;
  } else {
    url = `${placesUrl}?preselecttext=${encodeURIComponent(location.name)}`;
  }

  return url;
};
