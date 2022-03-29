export const CODES = {
  USER: {
    DUPLICATE: 'ERROR:USER-DUPLICATE',
    NOT_FOUND: 'ERROR:USER-NOT_FOUND',
    INACTIVE: 'ERROR:USER-INACTIVE',
    EDIT_ONLY_YOURSELF: 'ERROR:USER-EDIT_ONLY_YOURSELF',
    WRONG_PASSWORD: 'ERROR:USER-WRONG_PASSWORD',
    NOT_LOGGED_IN: 'ERROR:USER-NOT_LOGGED_IN!'
  },
  AUTH: {
    INVALID_SPECIAL_CODE: 'ERROR:AUTH-INVALID_SPECIAL_CODE',
    NO_AUTH_HEADER: 'ERROR:AUTH-NO_AUTH_HEADER',
    WRONG_AUTH_TYPE: 'ERROR:AUTH-WRONG_AUTH_TYPE',
    NO_TOKEN: 'ERROR:AUTH-NO_TOKEN',
    NO_TOKEN_PAYLOAD: 'ERROR:AUTH-NO_TOKEN_PAYLOAD'
  },
  SESSION: {
    EMPTY: 'ERROR:TOKEN-EMPTY',
    WRONG_DEVICE: 'ERROR:TOKEN-WRONG_DEVICE',
    EXPIRED: 'ERROR:TOKEN-EXPIRED',
  },
  COMMON: {
    UNKNOWN: 'ERROR:SYSTEM-UNKNOWN!',
    HTTP: 'ERROR:SYSTEM-HTTP_EXCEPTION',
    EMPTY_EMAIL: 'ERROR:SYSTEM-EMAIL_REQUIRED',
    EMPTY_PARAM: 'ERROR:SYSTEM-EMPTY_PARAM'
  },
  CODE: {
    INVALID: 'ERROR:CODE-INVALID',
    UNKNOWN: 'ERROR:CODE-UNKNOWN',
    EXPIRED: 'ERROR:CODE-EXPIRED',
    WRONG_RELATED_TO: 'ERROR:CODE-NOT_YOURS_BITCH'
  },
  DATABASE: {
    DUPLICATE: 'ERROR:DATABASE-DUPLICATE'
  },
  VALIDATION: 'ERROR:VALIDATION',
  HTTP: {
    '400': 'ERROR:HTTP-BAD_REQUEST',
    '401': 'ERROR:HTTP-UNAUTHORIZED',
    '403': 'ERROR:HTTP-FORBIDDEN_RESOURCE',
    '404': 'ERROR:HTTP-NOT_FOUND',
  },
  LICENSE: {
    NOT_FOUND: 'ERROR:LICENSE-NOT_FOUND'
  },
  WORKSPACE: {
    NOT_FOUND: 'ERROR:WORKSPACE-NOT_FOUND',
    NO_ACCESS: 'ERROR:WORKSPACE-NO_ACCESS'
  },
  FEATURE: {
    NOT_AVAILABLE: 'ERROR:FEATURE-NOT_AVAILABLE'
  },
  PERMISSION: {
    NOT_FOUND: 'ERROR:PERMISSION-NOT_FOUND',
    NONE_AVAILABLE: 'ERROR:PERMISSIONS-NONE_AVAILABLE'
  }
}