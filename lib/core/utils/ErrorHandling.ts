export class AppError extends Error {
  constructor(statusCode: number, message: string, translationKey: string) {
    super(message);
  }
}
