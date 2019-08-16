1. What problem does the context API help solve?

The context API gives us a way to share props between components without having to explicitly pass them through every level of the tree.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

In Redux, data is stored and set in a single state object, which is in the store. Actions are created to describe the events that happen in the view/UI, and tell the reducer that the state should be updated accordingly. Reducers take the previous state and the dispatched action, and update the state by running the logic for the dispatched action and creating a new state tree for the store. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is data that is managed with a tool like Context API or Redux so that any component in the application can access it. Component or local state is managed within the component. For data that is being used by various parts of the application and affecting multiple components, it is more worth the trade-off of using an application-wide state store like what Redux offers us. However at the scale of our projects, local state is a perfectly fine solution. Even in tandem with application state management tools, it can make sense to manage some state locally, especially if that state only drives one component, such as a form.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware that helps us handle asynchronous operations. It does this by intercepting action creators. If the object it intercepts is an action, it sends it on to the reducer, but if it’s a function it will invoke it with the dispatch function as needed. It essentially allows us to delay the execution of functions.


1. What is your favorite state management system you've learned and this sprint? Please explain why!

For small projects, I appreciate the context API because it is conceptually simple, and allows any child component to access data in the context easily. However, I also enjoy the architecture of Redux and would like to practice using it more!