export function debounceAsync<T, Callback extends (...args: unknown[]) => Promise<T>>(
  callback: Callback,
  wait: number
): (...args: Parameters<Callback>) => Promise<T> {
  let timeoutId: number | null = null

  return (...args: unknown[]) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    return new Promise<T>((resolve, reject) => {
      const timeoutPromise = new Promise<void>((resolve) => {
        timeoutId = setTimeout(resolve, wait)
      })
      timeoutPromise.then(async () => {
        // eslint-disable-next-line node/no-callback-literal
        resolve(await callback(...args))
      }).catch(e => reject(e))
    })
  }
}
