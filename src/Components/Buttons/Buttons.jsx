import { IoAddCircleOutline, IoRemoveCircleOutline} from "react-icons/io5";
import { ContainerButtons, Button, NameButton } from './styled';

export default function Buttons(){
    return(
        <ContainerButtons>
            <Button  to="/add-data">
                <IoAddCircleOutline
                    color={'#ffffff'} 
                    height="22px"
                    width="22px"
                />
                <NameButton>Nova entrada</NameButton>
            </Button >
            <Button to="/subtract-data">
                <IoRemoveCircleOutline
                    color={'#ffffff'} 
                    height="22px"
                    width="22px"
                />
                <NameButton>Nova saída</NameButton>
            </Button>
        </ContainerButtons>
    )
}