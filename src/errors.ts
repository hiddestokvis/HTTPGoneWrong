export interface IError {
  name?: string
  statusCode?: number
  defaultMessage?: string
  description?: string
  message?: string
}
export interface IErrors {
  [key: number]: IError
}

export interface IndexSignature {
  [key: string]: any
}

export type ErrorFunction = (message?: string, extendError?: IError) => IError

export default class HTTPGoneWrong implements IndexSignature {
  [key: string]: any

  public errors: IErrors

  constructor() {
    this.errors = {
      400: {
        defaultMessage:
          'The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).',
        description: 'https://httpstatuses.com/400',
        name: 'BadRequestError',
        statusCode: 400
      },
      401: {
        defaultMessage:
          'The request has not been applied because it lacks valid authentication credentials for the target resource.',
        description: 'https://httpstatuses.com/401',
        name: 'UnauthorizedError',
        statusCode: 401
      },
      402: {
        defaultMessage: 'Reserved for future use.',
        description: 'https://httpstatuses.com/402',
        name: 'PaymentRequiredError',
        statusCode: 402
      },
      403: {
        defaultMessage:
          'The server understood the request but refuses to authorize it.',
        description: 'https://httpstatuses.com/403',
        name: 'ForbiddenError',
        statusCode: 403
      },
      404: {
        defaultMessage:
          'The origin server did not find a current representation for the target resource or is not willing to disclose that one exists.',
        description: 'https://httpstatuses.com/404',
        name: 'NotFoundError',
        statusCode: 404
      },
      405: {
        defaultMessage:
          'The method received in the request-line is known by the origin server but not supported by the target resource.',
        description: 'https://httpstatuses.com/405',
        name: 'MethodNotAllowedError',
        statusCode: 405
      },
      406: {
        defaultMessage:
          'The target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields received in the request, and the server is unwilling to supply a default representation.',
        description: 'https://httpstatuses.com/406',
        name: 'NotAcceptableError',
        statusCode: 406
      },
      407: {
        defaultMessage:
          'Similar to 401 Unauthorized, but it indicates that the client needs to authenticate itself in order to use a proxy.',
        description: 'https://httpstatuses.com/407',
        name: 'ProxyAuthenticationRequiredError',
        statusCode: 407
      },
      408: {
        defaultMessage:
          'The server did not receive a complete request message within the time that it was prepared to wait.',
        description: 'https://httpstatuses.com/408',
        name: 'RequestTimeoutError',
        statusCode: 408
      },
      409: {
        defaultMessage:
          'The request could not be completed due to a conflict with the current state of the target resource. This code is used in situations where the user might be able to resolve the conflict and resubmit the request.',
        description: 'https://httpstatuses.com/409',
        name: 'ConflictError',
        statusCode: 409
      },
      410: {
        defaultMessage:
          'The target resource is no longer available at the origin server and that this condition is likely to be permanent.',
        description: 'https://httpstatuses.com/410',
        name: 'GoneError',
        statusCode: 410
      },
      411: {
        defaultMessage:
          'The server refuses to accept the request without a defined Content-Length.',
        description: 'https://httpstatuses.com/411',
        name: 'LengthRequiredError',
        statusCode: 411
      },
      412: {
        defaultMessage:
          'One or more conditions given in the request header fields evaluated to false when tested on the server.',
        description: 'https://httpstatuses.com/412',
        name: 'PreconditionFailedError',
        statusCode: 412
      },
      413: {
        defaultMessage:
          'The server is refusing to process a request because the request payload is larger than the server is willing or able to process.',
        description: 'https://httpstatuses.com/413',
        name: 'RequestEntityTooLargeError',
        statusCode: 413
      },
      414: {
        defaultMessage:
          'The server is refusing to service the request because the request-target is longer than the server is willing to interpret.',
        description: 'https://httpstatuses.com/414',
        name: 'RequestUriTooLargeError',
        statusCode: 414
      },
      415: {
        defaultMessage:
          'The origin server is refusing to service the request because the payload is in a format not supported by this method on the target resource.',
        description: 'https://httpstatuses.com/415',
        name: 'UnsupportedMediaTypeError',
        statusCode: 415
      },
      416: {
        defaultMessage:
          "None of the ranges in the request's Range header field overlap the current extent of the selected resource or that the set of ranges requested has been rejected due to invalid ranges or an excessive request of small or overlapping ranges.",
        description: 'https://httpstatuses.com/416',
        name: 'RangeNotSatisfiableError',
        statusCode: 416
      },
      417: {
        defaultMessage:
          "The expectation given in the request's Expect header field could not be met by at least one of the inbound servers.",
        description: 'https://httpstatuses.com/417',
        name: 'ExpectationFailedError',
        statusCode: 417
      },
      418: {
        defaultMessage:
          'Any attempt to brew coffee with a teapot should result in the error code "418 I\'m a teapot". The resulting entity body MAY be short and stout.',
        description: 'https://httpstatuses.com/418',
        name: 'ImATeapotError',
        statusCode: 418
      },
      422: {
        defaultMessage:
          'The server understands the content type of the request entity (hence a 415 Unsupported Media Type status code is inappropriate), and the syntax of the request entity is correct (thus a 400 Bad Request status code is inappropriate) but was unable to process the contained instructions.',
        description: 'https://httpstatuses.com/422',
        name: 'UnprocessableEntityError',
        statusCode: 422
      },
      423: {
        defaultMessage:
          'The source or destination resource of a method is locked.',
        description: 'https://httpstatuses.com/423',
        name: 'LockedError',
        statusCode: 423
      },
      424: {
        defaultMessage:
          'The method could not be performed on the resource because the requested action depended on another action and that action failed.',
        description: 'https://httpstatuses.com/424',
        name: 'FailedDependencyError',
        statusCode: 424
      },
      425: {
        defaultMessage: '',
        description: '',
        name: 'UnorderedCollectionError',
        statusCode: 425
      },
      426: {
        defaultMessage:
          'The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.',
        description: 'https://httpstatuses.com/426',
        name: 'UpgradeRequiredError',
        statusCode: 426
      },
      428: {
        defaultMessage:
          'The origin server requires the request to be conditional.',
        description: 'https://httpstatuses.com/428',
        name: 'PreconditionRequiredError',
        statusCode: 428
      },
      429: {
        defaultMessage:
          'The user has sent too many requests in a given amount of time ("rate limiting").',
        description: 'https://httpstatuses.com/429',
        name: 'TooManyRequestsError',
        statusCode: 429
      },
      431: {
        defaultMessage:
          'The server is unwilling to process the request because its header fields are too large. The request MAY be resubmitted after reducing the size of the request header fields.',
        description: 'https://httpstatuses.com/431',
        name: 'RequestHeaderFieldsTooLargeError',
        statusCode: 431
      },
      500: {
        defaultMessage:
          'The server encountered an unexpected condition that prevented it from fulfilling the request.',
        description: 'https://httpstatuses.com/500',
        name: 'InternalServerError',
        statusCode: 500
      },
      501: {
        defaultMessage:
          'The server does not support the functionality required to fulfill the request.',
        description: 'https://httpstatuses.com/501',
        name: 'NotImplementedError',
        statusCode: 501
      },
      502: {
        defaultMessage:
          'The server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request.',
        description: 'https://httpstatuses.com/502',
        name: 'BadGatewayError',
        statusCode: 502
      },
      503: {
        defaultMessage:
          'The server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay.',
        description: 'https://httpstatuses.com/503',
        name: 'ServiceUnavailableError',
        statusCode: 503
      },
      504: {
        defaultMessage:
          'The server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access in order to complete the request.',
        description: 'https://httpstatuses.com/504',
        name: 'GatewayTimeoutError',
        statusCode: 504
      },
      505: {
        defaultMessage:
          'The server does not support, or refuses to support, the major version of HTTP that was used in the request message.',
        description: 'https://httpstatuses.com/505',
        name: 'HttpVersionNotSupportedError',
        statusCode: 505
      },
      506: {
        defaultMessage:
          'The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.',
        description: 'https://httpstatuses.com/506',
        name: 'VariantAlsoNegotiatesError',
        statusCode: 506
      },
      507: {
        defaultMessage:
          'The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.',
        description: 'https://httpstatuses.com/507',
        name: 'InsufficientStorageError',
        statusCode: 507
      },
      509: {
        defaultMessage: '',
        description: '',
        name: 'BandwidthLimitExceededError',
        statusCode: 509
      },
      510: {
        defaultMessage:
          'The policy for accessing the resource has not been met in the request. The server should send back all the information necessary for the client to issue an extended request.',
        description: 'https://httpstatuses.com/510',
        name: 'NotExtendedError',
        statusCode: 510
      },
      511: {
        defaultMessage:
          'The client needs to authenticate to gain network access.',
        description: 'https://httpstatuses.com/511',
        name: 'NetworkAuthenticationRequiredError',
        statusCode: 511
      }
    }
  }

  public badRequestError(message?: string, extendError?: IError): IError {
    return this.returnError(400, message, extendError)
  }
  public unauthorizedError(message?: string, extendError?: IError): IError {
    return this.returnError(401, message, extendError)
  }
  public paymentRequiredError(message?: string, extendError?: IError): IError {
    return this.returnError(402, message, extendError)
  }
  public forbiddenError(message?: string, extendError?: IError): IError {
    return this.returnError(403, message, extendError)
  }
  public notFoundError(message?: string, extendError?: IError): IError {
    return this.returnError(404, message, extendError)
  }
  public methodNotAllowedError(message?: string, extendError?: IError): IError {
    return this.returnError(405, message, extendError)
  }
  public notAcceptableError(message?: string, extendError?: IError): IError {
    return this.returnError(406, message, extendError)
  }
  public proxyAuthenticationRequiredError(
    message?: string,
    extendError?: IError
  ): IError {
    return this.returnError(407, message, extendError)
  }
  public requestTimeoutError(message?: string, extendError?: IError): IError {
    return this.returnError(408, message, extendError)
  }
  public conflictError(message?: string, extendError?: IError): IError {
    return this.returnError(409, message, extendError)
  }
  public goneError(message?: string, extendError?: IError): IError {
    return this.returnError(410, message, extendError)
  }
  public lengthRequiredError(message?: string, extendError?: IError): IError {
    return this.returnError(411, message, extendError)
  }
  public preconditionFailedError(
    message?: string,
    extendError?: IError
  ): IError {
    return this.returnError(412, message, extendError)
  }
  public requestEntityTooLargeError(
    message?: string,
    extendError?: IError
  ): IError {
    return this.returnError(413, message, extendError)
  }
  public requestUriTooLargeError(
    message?: string,
    extendError?: IError
  ): IError {
    return this.returnError(414, message, extendError)
  }
  public unsupportedMediaTypeError(
    message?: string,
    extendError?: IError
  ): IError {
    return this.returnError(415, message, extendError)
  }
  public rangeNotSatisfiableError(
    message?: string,
    extendError?: IError
  ): IError {
    return this.returnError(416, message, extendError)
  }
  public expectationFailedError(
    message?: string,
    extendError?: IError
  ): IError {
    return this.returnError(417, message, extendError)
  }
  public imATeapotError(message?: string, extendError?: IError): IError {
    return this.returnError(418, message, extendError)
  }
  public unprocessableEntityError(
    message?: string,
    extendError?: IError
  ): IError {
    return this.returnError(422, message, extendError)
  }
  public lockedError(message?: string, extendError?: IError): IError {
    return this.returnError(423, message, extendError)
  }
  public failedDependencyError(message?: string, extendError?: IError): IError {
    return this.returnError(424, message, extendError)
  }
  public unorderedCollectionError(
    message?: string,
    extendError?: IError
  ): IError {
    return this.returnError(425, message, extendError)
  }
  public upgradeRequiredError(message?: string, extendError?: IError): IError {
    return this.returnError(426, message, extendError)
  }
  public preconditionRequiredError(
    message?: string,
    extendError?: IError
  ): IError {
    return this.returnError(428, message, extendError)
  }
  public tooManyRequestsError(message?: string, extendError?: IError): IError {
    return this.returnError(429, message, extendError)
  }
  public requestHeaderFieldsTooLargeError(
    message?: string,
    extendError?: IError
  ): IError {
    return this.returnError(431, message, extendError)
  }
  public internalServerError(message?: string, extendError?: IError): IError {
    return this.returnError(500, message, extendError)
  }
  public notImplementedError(message?: string, extendError?: IError): IError {
    return this.returnError(501, message, extendError)
  }
  public badGatewayError(message?: string, extendError?: IError): IError {
    return this.returnError(502, message, extendError)
  }
  public serviceUnavailableError(
    message?: string,
    extendError?: IError
  ): IError {
    return this.returnError(503, message, extendError)
  }
  public gatewayTimeoutError(message?: string, extendError?: IError): IError {
    return this.returnError(504, message, extendError)
  }
  public httpVersionNotSupportedError(
    message?: string,
    extendError?: IError
  ): IError {
    return this.returnError(505, message, extendError)
  }
  public variantAlsoNegotiatesError(
    message?: string,
    extendError?: IError
  ): IError {
    return this.returnError(506, message, extendError)
  }
  public insufficientStorageError(
    message?: string,
    extendError?: IError
  ): IError {
    return this.returnError(507, message, extendError)
  }
  public bandwidthLimitExceededError(
    message?: string,
    extendError?: IError
  ): IError {
    return this.returnError(509, message, extendError)
  }
  public notExtendedError(message?: string, extendError?: IError): IError {
    return this.returnError(510, message, extendError)
  }
  public networkAuthenticationRequiredError(
    message?: string,
    extendError?: IError
  ): IError {
    return this.returnError(511, message, extendError)
  }

  private returnError(
    statusCode: number,
    message?: string,
    extendError?: IError
  ): IError {
    const error: IError = this.errors[statusCode]
    if (extendError) {
      extendError.statusCode = error.statusCode
      extendError.name = error.name
      extendError.description = error.description
      if (!extendError.message) {
        extendError.message = error.defaultMessage
      }
      return extendError
    }
    const returnError: IError = new Error(
      message ? message : error.defaultMessage
    )
    returnError.statusCode = error.statusCode
    returnError.description = error.description
    returnError.name = error.name
    return returnError
  }
}
