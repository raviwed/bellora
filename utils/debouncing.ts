function debounce<T extends (...args: any[]) => void>(
  cb: T,
  delay: number
) {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => cb(...args), delay);
  };
}

function throttle<T extends (...args: any[]) => void>(cb: T, interval: number) {
  let lastCall = 0;

  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastCall >= interval) {
      lastCall = now;
      cb(...args);
    }
  };
}