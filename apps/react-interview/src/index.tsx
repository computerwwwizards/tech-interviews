import "./App.css";
/// <reference types="@types/dom-chromium-ai" />
import { ObservableStore } from '@computerwwwizards/observers'

const { body } = document

const hasLoadedObserver = new ObservableStore(false);

const isDeferedInactive = !!(new URLSearchParams(window.location.search).get('deferredHydrationDeactivated'))

const cleanUp = hasLoadedObserver
  .subscribeWithCleanup(hasLoaded => {
    if (hasLoaded) {
      const hasHeavyProcessFlag = !!(new URLSearchParams(window.location.search).get('heavyProcessActive'));

      import('./lazy.init').then(({ init }) => init(isDeferedInactive && hasHeavyProcessFlag))
      cleanUp();
    }
  });



const handler = function (this: typeof body) {
  hasLoadedObserver.update(true);
}

function appendListener<K extends keyof HTMLElementEventMap>(eventType: K) {
  body.addEventListener(eventType, handler)

  return () => body.removeEventListener(eventType, handler)
}

if (navigator.userActivation.hasBeenActive || isDeferedInactive) {
  hasLoadedObserver.update(true);
} else {
  const cleanListeners = [
    appendListener('scroll'),
    appendListener('touchstart'),
    appendListener('mouseover'),
    appendListener('click')
  ]

  const lastClean = hasLoadedObserver.subscribeWithCleanup((hasLoaded) => {
    if (hasLoaded) {
      lastClean()
      cleanListeners.forEach(clean => {
        clean()
      })
    }
  })

  setTimeout(() => {
    hasLoadedObserver.update(true);
  }, 5500)

}
