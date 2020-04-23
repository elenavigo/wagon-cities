// IMPORTING DABATASE INSTEAD OF API CALL
import cities from '../cities';

export function setCities() {
  return {
    type: 'SET_CITIES',
    payload: cities
  };
}

export function selectCity(activeCity) {
  return {
    type: 'SELECT_CITY',
    payload: activeCity
  };
}
