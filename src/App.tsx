import './App.css'
import ViewList from "./component/viewList/viewList.tsx";
import Button from "./component/buttons/button.tsx";


function App() {

  return (
      <>
        <ViewList />
          <Button as="button"  primary >
              Привет мир
          </Button>
      </>
  )
}

export default App
