import "./App.css";

import { ObservableStore } from '@computerwwwizards/observers'

const { body } = document


const hasLoadedObserver = new ObservableStore(false);

const cleanUp = hasLoadedObserver
  .subscribeWithCleanup(hasLoaded => {
    if (hasLoaded) {
      import('./lazy.ini').then(({init})=>init())
      cleanUp();
    }
  });

const isDeferedInactive = new URLSearchParams(window.location.search).get('deferedHydrationDeactivated')

if (navigator.userActivation.hasBeenActive || isDeferedInactive) {
  hasLoadedObserver.update(true);
} else {
  function appendListener<K extends keyof HTMLElementEventMap>(eventType: K) {
    const handler = function (this: typeof body) {
      hasLoadedObserver.update(true);

      this.removeEventListener('scroll', handler);
    }


    body.addEventListener(eventType, handler)

    return () => body.removeEventListener(eventType, handler)
  }
  const cleanListeners = [
    appendListener('scroll'),
    appendListener('touchstart'),
    appendListener('mouseover'),
    appendListener('click')
  ]

  const lastClean = hasLoadedObserver.subscribeWithCleanup((hasLoaded) => {
    if (hasLoaded) {
      cleanListeners.forEach(clean => {
        clean()
        lastClean()
      })
    }

  })

  setTimeout(() => {
    hasLoadedObserver.update(true);
  }, 3500)

}
