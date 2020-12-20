import React, { useEffect } from 'react';

/**
 * 
 * @param {function} func - A function to execute. 
 * @param {number} interval - The interval of time that needs to elapse before the provided function can execute again, in milliseconds - defaults to `50`.
 * @param {number} interval - The interval of time that needs to elapse before the provided function can execute again, in milliseconds
 * @param {boolean} invokeAtLeadingEdge - A boolean to determine if the provided function should be invoked at the start (leading edge) or end (trainling edge) of the debounce interval - defaults to `false`.
 * @returns {function} - Returns a function that uses a timer to track and group multiple, sequentials calls to a provided function schedule 
 * 
 * group multiple, sequentials calls to a provided code into a single one.  
 */
function debounce(func, interval = 50, invokeAtLeadingEdge = false) {
	let debounceIntervalTimeout;

  // Return an anonymous function as a closure (to retain access to the `debounceIntervalTimeout`, even after the outer `debounce` function has finished executing) in order to set/reset the `debounceIntervalTimeout`.
  return () => {
    // Set `context` and `args` for the `apply()` method.
    // SEE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
		let context = this;
		let args = arguments;

		// Execute the provided function at the start (leading edge) of the debounce interval.
    function invokeAtDebounceStart() {
      return Boolean(invokeAtLeadingEdge && !debounceIntervalTimeout);
		};

    // Execute the provided function at the end (trailing edge) of the debounce interval.
    function invokeAtDebounceEnd() {
			debounceIntervalTimeout = null;
			
			if(!invokeAtLeadingEdge) {
				func.apply(context, args);
      }
		};

		if (invokeAtDebounceStart()) console.log("Invoked at the beginning of the debounce interval: ", context, args);

    // Clear/Reset the `debounceIntervalTimeout`.
    clearTimeout(debounceIntervalTimeout);

    // Start/Restart the `debounceIntervalTimeout` (the default behavior, will invoke the provided function at the end of the debounce interval).
		debounceIntervalTimeout = setTimeout(invokeAtDebounceEnd, interval);
  };
};

function Navbar() {
	useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      console.log(scrollTop);
		}
		
		function debounceScroll() {
			return debounce(handleScroll);
		}

    window.addEventListener('scroll', debounceScroll());

    return () => {
      window.removeEventListener('scroll', debounceScroll());
    };
  }, []);

  return (
		<>
		 <nav style={ { height: '1000vh' } }>Navbar</nav>
		</>
  );
};

export default Navbar;