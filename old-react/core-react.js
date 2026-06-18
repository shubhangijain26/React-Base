//noraml js
// const div = document.createElement("div");
// div.innerHTML = "hello";
// document.body.appendChild(div);

// const h1 = document.createElement("h1");
// h1.innerHTML = "React";
// let root = document.getElementById("root");
// root.appendChild(h1);

//.............React DOM..............


// const div = document.createElement("div");
// console.log(div)
// const heading = React.createElement(
//   "h1",
//   {
//     id: "Heading",
//   },
//   "Hello world",
// );

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "h1 as nested tag"),
    React.createElement("h2", {}, "h2 as nested tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "h1 as nested tag"),
    React.createElement("h2", {}, "h2 as nested tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);
