import {HttpStatus} from "./http-status.constants";
import {API_ERROR_CODES} from "./codes.contants";

export const ERROR_BY_CODE = new Map([
    [API_ERROR_CODES.USER.DUPLICATE, {
      code: API_ERROR_CODES.USER.DUPLICATE,
      status: HttpStatus.BAD_REQUEST,
      title: 'Email is taken',
      message: 'Email is taken. Use another email or restore password'
    }],
    [API_ERROR_CODES.USER.NOT_FOUND, {
      code: API_ERROR_CODES.USER.NOT_FOUND,
      status: HttpStatus.BAD_REQUEST,
      title: 'User not found',
      message: 'User with this email not found. ъуъ!'
    }],
    [API_ERROR_CODES.USER.INACTIVE, {
      code: API_ERROR_CODES.USER.INACTIVE,
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      title: 'User is inactive',
      message: 'We send code to activate to email'
    }],
    [API_ERROR_CODES.USER.EDIT_ONLY_YOURSELF, {
      code: API_ERROR_CODES.USER.EDIT_ONLY_YOURSELF,
      status: HttpStatus.FORBIDDEN,
      title: 'Error',
      message: 'You can edit you user only'
    }],
    [API_ERROR_CODES.USER.WRONG_PASSWORD, {
      code: API_ERROR_CODES.USER.WRONG_PASSWORD,
      status: HttpStatus.BAD_REQUEST,
      title: 'Wrong credential',
      message: 'Wrong email or password'
    }],
    [API_ERROR_CODES.USER.NOT_LOGGED_IN, {
      code: API_ERROR_CODES.USER.NOT_LOGGED_IN,
      status: HttpStatus.BAD_REQUEST,
      title: 'Error',
      message: 'User not Logged in'
    }],
    [API_ERROR_CODES.USER.ALREADY_ACTIVATED, {
      code: API_ERROR_CODES.USER.ALREADY_ACTIVATED,
      status: HttpStatus.BAD_REQUEST,
      title: 'Error',
      message: 'User is already activated!'
    }],


    [API_ERROR_CODES.AUTH.INVALID_SPECIAL_CODE, {
      code: API_ERROR_CODES.AUTH.INVALID_SPECIAL_CODE,
      status: HttpStatus.UNAUTHORIZED,
      title: 'Error',
      message: 'No special code found'
    }],
    [API_ERROR_CODES.AUTH.NO_AUTH_HEADER, {
      code: API_ERROR_CODES.AUTH.NO_AUTH_HEADER,
      status: HttpStatus.UNAUTHORIZED,
      title: 'Error',
      message: 'No Authorization Data (Header)'
    }],
    [API_ERROR_CODES.AUTH.WRONG_AUTH_TYPE, {
      code: API_ERROR_CODES.AUTH.WRONG_AUTH_TYPE,
      status: HttpStatus.UNAUTHORIZED,
      title: 'Error',
      message: 'Wrong auth type'
    }],
    [API_ERROR_CODES.AUTH.NO_TOKEN, {
      code: API_ERROR_CODES.AUTH.NO_TOKEN,
      status: HttpStatus.UNAUTHORIZED,
      title: 'Error',
      message: 'No token found!'
    }],
    [API_ERROR_CODES.AUTH.NO_TOKEN_PAYLOAD, {
      code: API_ERROR_CODES.AUTH.NO_TOKEN_PAYLOAD,
      status: HttpStatus.UNAUTHORIZED,
      title: 'Error',
      message: 'No token payload found!'
    }],
    [API_ERROR_CODES.AUTH.INVALID_TOKEN, {
      code: API_ERROR_CODES.AUTH.INVALID_TOKEN,
      status: HttpStatus.UNAUTHORIZED,
      title: 'Error',
      message: 'Invalid token!'
    }],
    [API_ERROR_CODES.AUTH.EMPTY_CREDENTIALS, {
      code: API_ERROR_CODES.AUTH.EMPTY_CREDENTIALS,
      status: HttpStatus.UNAUTHORIZED,
      title: 'Error',
      message: 'Empty credentials!'
    }],


    [API_ERROR_CODES.SESSION.EMPTY, {
      code: API_ERROR_CODES.SESSION.EMPTY,
      status: HttpStatus.UNAUTHORIZED,
      title: 'Error',
      message: 'No session found'
    }],
    [API_ERROR_CODES.SESSION.EXPIRED, {
      code: API_ERROR_CODES.SESSION.EXPIRED,
      status: HttpStatus.UNAUTHORIZED,
      title: 'Error',
      message: 'Session has expired'
    }],
    [API_ERROR_CODES.SESSION.WRONG_DEVICE, {
      code: API_ERROR_CODES.SESSION.EMPTY,
      status: HttpStatus.UNAUTHORIZED,
      title: 'Error',
      message: 'False dragon'
    }],


    [API_ERROR_CODES.COMMON.UNKNOWN, {
      code: API_ERROR_CODES.COMMON.UNKNOWN,
      status: HttpStatus.BAD_REQUEST,
      title: 'Error',
      message: 'Wooopsy, Unknown error! Please contact administrator!'
    }],
    [API_ERROR_CODES.COMMON.HTTP, {
      code: API_ERROR_CODES.COMMON.HTTP,
    }],
    [API_ERROR_CODES.COMMON.EMPTY_EMAIL, {
      code: API_ERROR_CODES.COMMON.EMPTY_EMAIL,
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      title: 'Error',
      message: 'Empty email'
    }],
    [API_ERROR_CODES.COMMON.EMPTY_PARAM, {
      code: API_ERROR_CODES.COMMON.EMPTY_PARAM,
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      title: 'Error',
      message: `Empty param`
    }],


    [API_ERROR_CODES.CODE.INVALID, {
      code: API_ERROR_CODES.CODE.INVALID,
      status: HttpStatus.UNAUTHORIZED,
      title: 'Wrong code',
      message: `Grogu knows this cookie, but it is bad cookie! Grogu don't eat it!`
    }],
    [API_ERROR_CODES.CODE.UNKNOWN, {
      code: API_ERROR_CODES.CODE.UNKNOWN,
      status: HttpStatus.UNAUTHORIZED,
      title: 'Unknown code',
      message: `Grogu doesn't know this cookie! Grogu won't eat it! Try again`
    }],
    [API_ERROR_CODES.CODE.EXPIRED, {
      code: API_ERROR_CODES.CODE.EXPIRED,
      status: HttpStatus.UNAUTHORIZED,
      title: 'Expired code',
      message: `Grogu knows this cookie is stale! Grogu won't eat it! Try again`
    }],
    [API_ERROR_CODES.CODE.WRONG_RELATED_TO, {
      code: API_ERROR_CODES.CODE.WRONG_RELATED_TO,
      status: HttpStatus.UNAUTHORIZED,
      title: 'Wrong code',
      message: `Grogu won't eat stolen cookie!`
    }],


    [API_ERROR_CODES.DATABASE.DUPLICATE, {
      code: API_ERROR_CODES.DATABASE.DUPLICATE,
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      title: 'Error',
      message: `Duplicate record!`
    }],


    [API_ERROR_CODES.VALIDATION, {
      code: API_ERROR_CODES.VALIDATION,
      status: HttpStatus.BAD_REQUEST,
      title: 'Error',
      message: `Validation error! Please refer body for details!`
    }],


    [API_ERROR_CODES.HTTP["400"], {
      code: API_ERROR_CODES.HTTP["400"],
      status: HttpStatus.BAD_REQUEST,
      title: 'Error',
      message: 'Bad Request!'
    }],
    [API_ERROR_CODES.HTTP["401"], {
      code: API_ERROR_CODES.HTTP["401"],
      status: HttpStatus.UNAUTHORIZED,
      title: 'Error',
      message: 'Unauthorized!'
    }],
    [API_ERROR_CODES.HTTP["403"], {
      code: API_ERROR_CODES.HTTP["403"],
      status: HttpStatus.FORBIDDEN,
      title: 'Error',
      message: 'Forbidden Resource!'
    }],
    [API_ERROR_CODES.HTTP["404"], {
      code: API_ERROR_CODES.HTTP["404"],
      status: HttpStatus.NOT_FOUND,
      title: 'Error',
      message: 'Not found!'
    }],


    [API_ERROR_CODES.LICENSE.NOT_FOUND, {
      code: API_ERROR_CODES.LICENSE.NOT_FOUND,
      status: HttpStatus.BAD_REQUEST,
      title: 'Error',
      message: `No such license found!`
    }],
    [API_ERROR_CODES.LICENSE.ALREADY_EXIST, {
      code: API_ERROR_CODES.LICENSE.ALREADY_EXIST,
      status: HttpStatus.BAD_REQUEST,
      title: 'Error',
      message: `This License-Assignment already exist!`
    }],


    [API_ERROR_CODES.WORKSPACE.NO_ACCESS, {
      code: API_ERROR_CODES.WORKSPACE.NO_ACCESS,
      status: HttpStatus.UNAUTHORIZED,
      title: 'Error',
      message: `User does not have access to this workspace!`
    }],
    [API_ERROR_CODES.WORKSPACE.NOT_FOUND, {
      code: API_ERROR_CODES.WORKSPACE.NOT_FOUND,
      status: HttpStatus.BAD_REQUEST,
      title: 'Error',
      message: `No such Workspace found!`
    }],
    [API_ERROR_CODES.WORKSPACE.ALREADY_INITIATED, {
      code: API_ERROR_CODES.WORKSPACE.ALREADY_INITIATED,
      status: HttpStatus.BAD_REQUEST,
      title: 'Error',
      message: `Workspace is already initiated!`
    }],


    [API_ERROR_CODES.FEATURE.NOT_AVAILABLE, {
      code: API_ERROR_CODES.FEATURE.NOT_AVAILABLE,
      status: HttpStatus.FORBIDDEN,
      title: 'Error',
      message: `This Feature is not available for you license!`
    }],
    [API_ERROR_CODES.FEATURE.NOT_FOUND, {
      code: API_ERROR_CODES.FEATURE.NOT_FOUND,
      status: HttpStatus.FORBIDDEN,
      title: 'Error',
      message: `There is no such feature!`
    }],


    [API_ERROR_CODES.FEATURE_ASSIGNMENT.ALREADY_EXIST, {
      code: API_ERROR_CODES.FEATURE_ASSIGNMENT.ALREADY_EXIST,
      status: HttpStatus.FORBIDDEN,
      title: 'Error',
      message: `This feature-assignment already exist!`
    }],
    [API_ERROR_CODES.FEATURE_ASSIGNMENT.NOT_AVAILABLE, {
      code: API_ERROR_CODES.FEATURE_ASSIGNMENT.NOT_AVAILABLE,
      status: HttpStatus.FORBIDDEN,
      title: 'Error',
      message: `This feature-assignment is not available!`
    }],
    [API_ERROR_CODES.FEATURE_ASSIGNMENT.NOT_FOUND, {
      code: API_ERROR_CODES.FEATURE_ASSIGNMENT.NOT_FOUND,
      status: HttpStatus.FORBIDDEN,
      title: 'Error',
      message: `No such feature assignment found!!`
    }],


    [API_ERROR_CODES.PERMISSION.NOT_FOUND, {
      code: API_ERROR_CODES.PERMISSION.NOT_FOUND,
      status: HttpStatus.FORBIDDEN,
      title: 'Error',
      message: `You don't have necessary permissions to enter!`
    }],
    [API_ERROR_CODES.PERMISSION.NONE_AVAILABLE, {
      code: API_ERROR_CODES.PERMISSION.NONE_AVAILABLE,
      status: HttpStatus.FORBIDDEN,
      title: 'Error',
      message: `You don't have permissions this operation!`
    }],


    [API_ERROR_CODES.PERMISSION.WRONG_TYPE, {
      code: API_ERROR_CODES.PERMISSION.WRONG_TYPE,
      status: HttpStatus.FORBIDDEN,
      title: 'Error',
      message: `You permission type!` //todo ???
    }],



    [API_ERROR_CODES.RECORD_SECURITY.NOT_FOUND, {
      code: API_ERROR_CODES.RECORD_SECURITY.NOT_FOUND,
      status: HttpStatus.FORBIDDEN,
      title: 'Error',
      message: `You don't have permissions to perform this operation!`
    }],
    [API_ERROR_CODES.RECORD_SECURITY.NO_ACCESS, {
      code: API_ERROR_CODES.RECORD_SECURITY.NO_ACCESS,
      status: HttpStatus.FORBIDDEN,
      title: 'Error',
      message: `You don't have permissions to perform this operation!`
    }],


    [API_ERROR_CODES.PAGE.NOT_FOUND, {
      code: API_ERROR_CODES.PAGE.NOT_FOUND,
      status: HttpStatus.NOT_FOUND,
      title: 'Error',
      message: `Page not found!`
    }],

    [API_ERROR_CODES.METADATA.OBJECT.NOT_FOUND, {
        code: API_ERROR_CODES.METADATA.OBJECT.NOT_FOUND,
        status: HttpStatus.NOT_FOUND,
        title: 'Error',
        message: `Object not found!`
    }],
    [API_ERROR_CODES.METADATA.FIELD.NOT_FOUND, {
        code: API_ERROR_CODES.METADATA.FIELD.NOT_FOUND,
        status: HttpStatus.NOT_FOUND,
        title: 'Error',
        message: `Field not found!`
    }],


    [API_ERROR_CODES.ROLE.PARENT.NOT_FOUND, {
        code: API_ERROR_CODES.ROLE.PARENT.NOT_FOUND,
        status: HttpStatus.BAD_REQUEST,
        title: 'Error',
        message: `Parent role not found!`
    }],


    [API_ERROR_CODES.LICENSE_ASSIGNMENT.NOT_AVAILABLE, {
        code: API_ERROR_CODES.LICENSE_ASSIGNMENT.NOT_AVAILABLE,
        status: HttpStatus.BAD_REQUEST,
        title: 'Error',
        message: `No License Assignment Available! (No Left)!`
    }],


    [API_ERROR_CODES.INVITE.ALREADY_INVITED, {
        code: API_ERROR_CODES.INVITE.ALREADY_INVITED,
        status: HttpStatus.BAD_REQUEST,
        title: 'Error',
        message: `User is already invited.`
    }],
  ]
)