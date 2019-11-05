getSnapshotBeforeUpdate:

getSnapshotBeforeUpdate(prevProps,prevState)
Invoked right before the most recently render output is committed
capture some information from DOM (eg.scroll position) before it changes
what ever valu get form snapshot life cylce need to pass as parameter to componentdidUpdate

componentdidUpdate(prevProps, prevState, snapshot)

handleChange = (event) => {
    const { target: { name, value } } = event
    this.setState({ [name]: value })
  }

React:
1. isValidElement: React.isValidElement(object)
  Verifies the object is a React element. Returns true or false.

2.React.Children
  React.Children.map(children, function[(thisArg)]) & React.Children.forEach(children, function[(thisArg)])
  React.Children.count(children) & React.Children.only(children) &
  React.Children.toArray(children)

Ref: ref access the DOM node directly in react
 ref cannot attached to functional component
Forwarding Refs:
  Automatically passing a ref through component of one of it children

Component LifeCylce: Four Phase
  Mounting: when instance of component is being created and inserted into DOM
  updating: when component being re-render as result of change the prop or state
  unMounting: when a component being removed from dom
  Error Handling: when there is an error during rendring, in a lifecycle method or in the constructor of any child component

  Mounting(4): constructor, static getDerivedStateFromProps, render and componentDidMount

  Updating(5): static getDerviedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate and componentDidUpdate

  unMounting(1): componentWillUnmount

  Error Handling(2): static getDerivedStateFromError and componentDidCatch

  constructor(props): a special function that will get called whenever a new component is created
  used for initialize state, Binding event handler
  do not use HTTP request
  super(props): this will call base class constructor

  static getDerivedStateFromProps(props,state): this method contain static method,so not able to use "this" keyword
  do not use HTTP request
  method is called every time a component is re-rendered
  
  render(): render method is a pure function
  do not change state or interact with DOM or make ajax calls

  componentDidMount(): involed immediately after a component and all its children components have been render to the DOM
  CAUSE SIDE EFFECT: interact with DOM , ajax(API) call to load data

  shouldComponentUpdate(nextProps, nextState): 
  getSnapshotBeforeUpdate(prevProps,prevState): called right before the changes from the virtual DOM are to be reflected in the DOM
  to capture some information about the DOM
  (e.g): get scroll position after the update maintained the scroll position to perform calculation
  return null or value
  componentDidUpdate(prevProps,prevState,snapshot): called after render is finished in the re-render cycles
  cause side effects
  handle API Call => note: need to compare previous value with current value before API call

  Error Boundary: that catch javascript error in their child component tree, log those errors, and display a fall-back UI
    static getDerviedStateFromError methods is used to render a fallback UI after an error is thrown
    componentDidCatch method is used to log the error information

RenderProps pattern:
  The term "render prop" refers to a technique for sharing code between React Component usng a prop whose value is a function




Hooks: version 16.8
Reason for hooks:
Understand how this keywords work in javascript
remember to bind event handler in class components
classes don't minify very well and make hot reloading very unreliable


there is no particular way to reuse stateful component logic
HOC and renderprops pattern to address this problem
makes code hard to follow
there is need to share stateful logic in a better way

Rules of Hooks
"Only call Hooks at the Top Level"
Don't call Hooks inside loops, conditions, or nested function

"Only Call Hooks from React Functions"
Call them from within React function componnets and not just any regular javascript function 

Hooks lifecycle:
useEffect

componentWillUnmount(){
  clearInterval(this.interval)
}

useEffect is replacemet of componentDidMount, componentDidUpdate and componentWillUnmount
useEffect hooka called after every single render

Context API:
Context provides a way to pass data through the component tree without having to pass props down manually at every level

useReducer: is a hook that is used for state management in React
            is related to reducer function
            useState is built using useReducer
            useReducer(reducre, initialState)
            newState= reducer(currentState, action)
            useReducer return a pair of values, [newState, dispatch]
            Local state managament


useReducer with useContext
useReducer: Local state managament
share state between components- Global state management
useReducer +  useContext


When to useReducer vs useState?
1.Type of state to used
useState: Number,String,boolean
useReducer: Object , Array
(e.g):useState: managecount value 
useReducer:manage person object as name , age 
2.Number of state transitions
useState Update state One or Two
useReducer update state Too many
3.Related state transitions? 
useState: No (not used)
useReducer: yes (can used to best approach)
4.Business logic
useState: No business logic
useReducer: Complex business logic
5.Local vs global
useState: Local
useReducer: Global


useState ==> state
useEffect ==> side effects
Context ==> context API
useReducer ==>reducers


useCallback Hook
useCallback is a hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed
why?
it is useful when passing callbacks to optimized child components that rely on reference eduality to prevent unnecessary renders

differen B/W useCallback vs useMemo
useCallback=> cashes the provided function itself
useMemo=> invoke provides function and cashes its result

customHook:
  custom Hook is bacically a javascript function whose name starts with "use".
  custom Hook can aslo call other Hooks if required
Why?
Share logic - Alernative to HOCs and Render Props

List of Hooks
useState
useEffects
useContext
useReducer
useCallback
useMemo
useRef
useImpervativeHandle
useLayoutEffect
useDebuggerValue