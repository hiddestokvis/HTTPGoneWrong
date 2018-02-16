# HTTPGoneWrong

Easy to use and extendible HTTP errors for when your HTTP goes wrong. Inspired by the [restify errors](http://restify.com) but with my take on it.

## Install

```yarn add http-gone-wrong```

or

```npm install http-gone-wrong```

## Usage

```javascript
import errors from 'http-gone-wrong'

// basic
throw new errors().badRequestError()

// custom message
throw new errors().badRequestError('Oops .. this request seems invalid')

// Extend an existing error
const anExistingError = new Error(`test`)
throw new errors().badRequestError(null, anExistingError)
```

## Error functions

```
400: BadRequestError
401: UnauthorizedError
402: PaymentRequiredError
403: ForbiddenError
404: NotFoundError
405: MethodNotAllowedError
406: NotAcceptableError
407: ProxyAuthenticationRequiredError
408: RequestTimeoutError
409: ConflictError
410: GoneError
411: LengthRequiredError
412: PreconditionFailedError
413: RequestEntityTooLargeError
414: RequestUriTooLargeError
415: UnsupportedMediaTypeError
416: RangeNotSatisfiableError
417: ExpectationFailedError
418: ImATeapotError
422: UnprocessableEntityError
423: LockedError
424: FailedDependencyError
425: UnorderedCollectionError
426: UpgradeRequiredError
428: PreconditionRequiredError
429: TooManyRequestsError
431: RequestHeaderFieldsTooLargeError
500: InternalServerError
501: NotImplementedError
502: BadGatewayError
503: ServiceUnavailableError
504: GatewayTimeoutError
505: HttpVersionNotSupportedError
506: VariantAlsoNegotiatesError
507: InsufficientStorageError
509: BandwidthLimitExceededError
510: NotExtendedError
511: NetworkAuthenticationRequiredError
```