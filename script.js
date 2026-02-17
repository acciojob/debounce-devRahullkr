function debounce(callback, delay, immediate = false) {

	let timeoutId = null

	return function debounced(...args) {
		const context = this
		const shouldCallImmediate = immediate && timeoutId === null;


		if(timeoutId !== null){
			clearTimeout(timeoutId)
		}

		timeoutId = setTimeout(() => {
			timeoutId = null

			if(!immediate){
				callback.apply(context,args)
			}

			
		},delay)
		if(shouldCallImmediate){
				callback.apply(context,args)
			}
	}
  
  }
  
  module.exports = debounce;
