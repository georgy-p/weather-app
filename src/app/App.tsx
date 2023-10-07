import './styles/index.scss';
import { Container } from '@mui/material';

const containerStyles = { background: '#fff', height: '100vh' }
function App() {
    return (
        <div className="App">
            <Container maxWidth='sm' sx={containerStyles}>
                This is a text
            </Container>
        </div>
    );
}

export default App;
