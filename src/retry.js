export function retryDelay(attempt) {
  if (attempt > 5) {
    return null;
  }
  return Math.pow(2, attempt - 1);
}