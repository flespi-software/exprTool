export function debounceAsync<Args extends unknown[], R>(
  callback: (...args: Args) => Promise<R>,
  wait: number,
): (...args: Args) => Promise<R> {
  let timeoutId: ReturnType<typeof setTimeout> | null = null

  return (...args: Args) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    return new Promise<R>((resolve, reject) => {
      const timeoutPromise = new Promise<void>((resolve) => {
        timeoutId = setTimeout(resolve, wait)
      })
      timeoutPromise
        .then(async () => {
          resolve(await callback(...args))
        })
        .catch((e) => reject(e))
    })
  }
}
