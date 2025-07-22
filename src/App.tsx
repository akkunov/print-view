import './App.css';
import ViewList from './component/viewList/viewList.tsx';
import Button from './component/button/button.tsx';
import Text from './component/text/Text.tsx';

function App() {
    return (
        <>
            <ViewList />
            <Button as="button" primary type="button">
                Привет мир
            </Button>
            <Text as="a">label </Text>
            <input className={`file`} type="file" />
        </>
    );
}

export default App;
