// Window resize tracker
export class WindowResizeTracker {
  private listeners = new Set<() => void>();
  private currentSize = { width: window.innerWidth, height: window.innerHeight };

  constructor() {
    // TODO: Add event listener for 'resize'
    // The listener should update currentSize and notify all subscribers
    // Hint: Use window.addEventListener('resize', this.handleResize)
  }

  subscribe = (listener: () => void) => {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  };

  getSnapshot = () => {
    return this.currentSize;
  };

  // TODO: Implement this method to handle resize events
  private handleResize = () => {
    // Update currentSize with new window dimensions
    // Call notifyListeners() to inform all subscribers
  };

  private notifyListeners = () => {
    this.listeners.forEach(listener => listener());
  };

  // TODO: Implement proper cleanup method
  destroy() {
    // Remove the event listener from window
    // Clear all listeners
  }
}

export const windowResizeTracker = new WindowResizeTracker();