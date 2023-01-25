import styled from "styled-components";
import CancelIcon from '@mui/icons-material/Cancel';


const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Text = styled.div`
    flex:20;
    text-align:center;
`;


const Announcement = ({handleCancel}) => {


  return (
    <Container>
        <Text>Super Deal! Free Shipping on Orders Over $50</Text>
        <CancelIcon onClick={()=>{
            handleCancel();
        }} style={{color: "white", fontSize: 16,flex:1}}/>
    </Container>
  );
}

export default Announcement;