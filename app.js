
   var heading = document.createElement("h1");
   heading.innerHTML = "Hello World using JS";
   const root = document.getElementById("root");
   root.appendChild(heading);

   //script for creating element using react
   const headingReact = React.createElement("h1",{id : "ReactHaeding"},"Hello World Using React");
   const rootReact =  ReactDOM.createRoot(document.getElementById("rootReact"));
   rootReact.render(headingReact);