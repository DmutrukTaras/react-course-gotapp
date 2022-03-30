import React,{useState} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';


const App = () => {

    const [btnShowChar, setBtnShowChar] = useState(true);
    const [selectedChar, setSelectedChar] = useState(null);

    const ChangeShowBtn = () =>{
        setBtnShowChar(!btnShowChar);
    }

    const onCharSelected = (id) => {
        setSelectedChar(id);
    }

    return (
        <> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        {btnShowChar?<RandomChar/>:'' }
                        <Button style={{marginBottom: 40}} color="primary" onClick={ChangeShowBtn}>
                            Toggle random character
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <ItemList onCharSelected={onCharSelected} />
                    </Col>
                    <Col md='6'>
                        <CharDetails charId={selectedChar} />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default App;