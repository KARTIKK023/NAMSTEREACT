const heading = React.createElement("h1",{class: "text-center uppercase text-rose-400"},"hello from react is here!!");
const root = ReactDOM.createRoot(document.getElementById("main"));
console.log(heading);
root.render(heading);