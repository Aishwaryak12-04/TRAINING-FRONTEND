function createObservable() {
    let observers = []; 
    let state = null; 
    return {
      subscribe(observer) {
        if (typeof observer === "function") {
          observers.push(observer);
          console.log("Observer added.");
        } else {
          console.log("Observer must be a function.");
        }
      },
  
      unsubscribe(observer) {
        observers = observers.filter((obs) => obs !== observer);
        console.log("Observer removed.");
      },
  
      notify() {
        observers.forEach((observer) => observer(state));
      },
  
      setState(newState) {
        state = newState;
        console.log(`State updated to: ${state}`);
        this.notify();
      },
    };
  }
  
  const observable = createObservable();
  
  function observer1(state) {
    console.log(`Observer 1 notified. New State: ${state}`);
  }
  
  function observer2(state) {
    console.log(`Observer 2 notified. New State: ${state}`);
  }
  
 
  observable.subscribe(observer1);
  observable.subscribe(observer2);
  
  
  observable.setState("JavaScript");
  
 
  observable.unsubscribe(observer1);
  
  observable.setState("ReactJS");
  