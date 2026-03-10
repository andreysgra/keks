export const BASE_URL = 'https://grading.design.htmlacademy.pro/v0/keks';

export const REQUEST_TIMEOUT = 5000;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum RequestStatus {
  Error = 'Error',
  Idle = 'Idle',
  Pending = 'Pending',
  Success = 'Success'
}
