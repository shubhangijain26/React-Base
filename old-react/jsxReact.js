const jsxElement = (
  <h1 className="heading" tabIndex="1">
    This is a jsx element
  </h1>
);
console.log(jsxElement);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxElement);

const HeadingComponent = () => {
  return <h1>This is func component</h1>;
};

// can be written in same line as well if only one line of code is there in the function
const HeadingComponent2 = () => <h1>This is func component 2</h1>;

// also it can be written without return for multiple lines too inside ()

const number = 10;
const HeadingComp3 = () => (
  <div>
    Hello
    <h2 className="heading">This is normal heading</h2>
    <h1 className="heading">This is func component 3</h1>
    {number}
    {jsxElement}
    <HeadingComponent2 />
    <HeadingComponent></HeadingComponent>
    {HeadingComponent()}
  </div>
);

{
  /*these three are same ways to use component in other component
     <HeadingComponent2 />
    <HeadingComponent></HeadingComponent>
    {HeadingComponent()} */
}

root.render(<HeadingComp3 />);
