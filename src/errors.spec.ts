import errors, { ErrorFunction, IError } from './errors'

describe('Shared: Error Class', () => {
  const errorObj = new errors().errors
  const keys = Object.keys(errorObj)
  for (const key of keys) {
    const error = errorObj[Number(key)]
    describe(`Error: ${key}`, () => {
      it('Should have a matching statusCode property', () => {
        expect(error.statusCode).toBe(Number(key))
      })
      it('Should have a proper description', () => {
        if (error && error.description !== '') {
          expect(error.description.search(key)).toBeGreaterThan(-1)
        } else {
          expect(error.description).toBe('')
        }
      })
      it('Should have a function throwing the same error', () => {
        const eClass = new errors()
        const name: string = `${error.name[0].toLowerCase()}${error.name.substr(
          1
        )}`
        const e = (eClass[name] as ErrorFunction)()
        expect(e instanceof Error).toBeTruthy()
        expect(e.statusCode).toBe(error.statusCode)
        expect(e.message).toBe(error.defaultMessage)
        expect(e.description).toBe(error.description)
        expect(e.name).toBe(error.name)
      })
      it('Should be able to extend an existing model', () => {
        const errorMessage = Math.random() < 0.5 ? 'When in Rome...' : undefined
        const prevError: IError = new Error(errorMessage)
        prevError.statusCode = 200
        const eClass = new errors()
        const name: string = `${error.name[0].toLowerCase()}${error.name.substr(
          1
        )}`
        const e = (eClass[name] as ErrorFunction)(null, prevError)
        expect(e instanceof Error).toBeTruthy()
        expect(e.statusCode).toBe(error.statusCode)
        expect(e.message).toBe(errorMessage || error.defaultMessage)
        expect(e.description).toBe(error.description)
        expect(e.name).toBe(error.name)
      })
    })
  }
})
