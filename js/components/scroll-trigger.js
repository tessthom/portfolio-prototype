function scrollTrigger(selector, options = {}) {
  // nodeList of elements with scroll-triggered animations
  let els = document.querySelectorAll(selector);
  // nodeList to array
  els = Array.from(els);
  // add IntersectionObserver to each element
  els.forEach(el => {
    // pass options object for more control 
    addObserver(el, options);
  });
}

// fn to attach to target el using IntersectionObserver
function addObserver(el, options) {
  // new IntersectionObserver instance 
  let observer = new IntersectionObserver((entries, observer) => {
    // Takes a callback function that receives two arguments: the elements list and the observer instance
    entries.forEach(entry => {
      // isIntersecting returns true if element is in view
      if (entry.isIntersecting) {
        // lets me pass a custom callback fn to scrollTrigger if future behavior requires some operation that can't be performed with just CSS
        if (options.cb) {
          // accounts for ability to pass a callback if we want
          // options.cb(el)
          options.cb(el, entry);
        } else {
          // toggle active class
          console.log(`${entry.target} is getting active class now.`);
          entry.target.classList.add('active');
        }
        // remove observer after class added
        // observer.unobserve(entry.target);
      } 
    });
  }, options); // pass options object to observer
  // add observer to the element
  observer.observe(el);
}

// add observer to floating cube
scrollTrigger('.cube-container', {
  rootMargin: '-25%'
});
scrollTrigger('.cta-text', {
  rootMargin: '-25%'
});

/*
The custom callback function in the scrollTrigger function can be used to perform any JavaScript operation when an element comes into view. Examples for future iterations:

1. Loading additional content: If you have a "Load more" button at the bottom of your page, you could use the custom callback to automatically load more content when the button comes into view, creating an infinite scroll effect:

scrollTrigger('.load-more-button', {
  cb: function(el) {
    loadMoreContent(); // A function that loads more content
  }
});

2. Playing a video: If have a video on page that should start playing when it comes into view, 4.could use the custom callback to play the video:

scrollTrigger('.my-video', {
  cb: function(el) {
    el.play();
  }
});

3. Tracking analytics: Track when users view a certain section of your page, you could use the custom callback to send an event to your analytics:

scrollTrigger('.important-section', {
  cb: function(el) {
    ga('send', 'event', 'Important Section', 'viewed'); // Using Google Analytics as an example
  }
});

4. Loading an iframe: If you have an iframe on your page (e.g., a Google Map), you could use the custom callback to load the iframe when it comes into view, which can improve page load performance:

scrollTrigger('.my-iframe', {
  cb: function(el) {
    el.src = "https://www.google.com/maps/embed?..."; // URL of the iframe
  }
});

These are just a few examples. The custom callback function gives you the flexibility to define any JavaScript behavior that should occur when the element comes into view.
*/