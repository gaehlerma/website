
import './App.css';

function App2() {
  return (
    <html>
      <head>
        <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
        <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
      </head>
      <body>

        <div id="mydiv"></div>

        <script type="text/babel">
          {/* function Hello() {
            return <h1>Hello World!</h1>;
          } */}
          
          {/* const container = document.getElementById('mydiv');
          const root = ReactDOM.createRoot(container);
          root.render(<Hello />) */}
          <h1>Hello World!</h1>;
        </script>

      </body>
    </html>
  );
}

export default App2;