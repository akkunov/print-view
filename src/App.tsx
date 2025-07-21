import './App.css'
import ViewList from "./component/viewList/viewList.tsx";
import Button from "./component/button/button.tsx";
import Text from "./component/text/Text.tsx";


function App() {

  return (
      <>
        <ViewList />
          <Button as="button"  primary  >
              Привет мир
          </Button>
          <Text as="h1" > ghbddfdfdfh </Text>
      </>
  )
}

export default App
