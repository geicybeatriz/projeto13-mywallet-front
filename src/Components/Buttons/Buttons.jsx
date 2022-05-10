import { AddCircleOutline, RemoveCircleOutline } from 'react-ionicons';
import { ContainerButtons, Button, NameButton } from './styled';

export default function Buttons(){
    return(
        <ContainerButtons>
            <Button  to="/add-data">
                <AddCircleOutline
                    color={'#ffffff'} 
                    height="22px"
                    width="22px"
                />
                <NameButton>Nova entrada</NameButton>
            </Button >
            <Button to="/subtract-data">
                <RemoveCircleOutline
                    color={'#ffffff'} 
                    height="22px"
                    width="22px"
                />
                <NameButton>Nova saída</NameButton>
            </Button>
        </ContainerButtons>
    )
}