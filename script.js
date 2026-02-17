function debounce(callback, delay, immediate = false) {

	const context = this;

    if (immediate) {
      if (timeoutId === null) {
        // Leading edge
        callback.apply(context, args);

        // Lock execution until delay passes
        timeoutId = setTimeout(() => {
          timeoutId = null;
        }, delay);
      }

      return;
    }

    // Standard trailing debounce
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      callback.apply(context, args);
      timeoutId = null;
    }, delay);
  };
  
  }
  
  module.exports = debounce;
