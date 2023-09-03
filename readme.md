https://react.dev/learn#updating-the-screen

React basics - 
    1). Components
    2). Rendering
    3). Conditional Rendering
    4). JSX
    5). Events
    6). Handling state and re-rendering

Types of componenets - 
    1). Functional component
        Also known as stateless components or presentational components.
        Defined as JavaScript functions.
        Used for rendering UI elements based on props.
        

    2). Class components 
        Used for more complex components that need to manage their own state.
    
    3). Pure Components:
        A type of class component that automatically performs a shallow comparison of props and state to determine if it should update.

    4). Higher-Order Components (HOCs):
        A function that takes a component and returns a new enhanced component.
        Used for code reuse, cross-cutting concerns (e.g., authentication), or prop manipulation.

What is the difference between components, elements, and instances?
    Components are the blueprints for your UI elements, defining their structure and behavior.
    Elements are lightweight representations of components and are used to describe what should be rendered.
    Instances are the actual runtime instances of class components, while functional components don't have instances in the same sense.

Functional component vs Class component 
Advantages of Functional Components (with Hooks) ->
    Simplicity
    Reusability
    Hooks
    Easier Testing

Advantages of Class Components:
    Complex state management (this.setState allows for states to be merged based on scenarios)
    Lifecycle methods (offers didComponentMount / didComponentUpdate methods)
    Legacy code
    Class Properties: Class components support class properties, which can be useful for defining class variables and class methods.

    

