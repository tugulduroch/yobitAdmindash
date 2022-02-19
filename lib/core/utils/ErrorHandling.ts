export class AppError extends Error {
  constructor(statusCode: number, message: string) {
    super(message);
  }
}
