
import React,{useState} from "react"
import Icon  from "./components/Icon"

import 'bootstrap/dist/css/bootstrap.css';
import { Container,Card,CardBody,Row,Col,Button } from "reactstrap"

import { ToastContainer,toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

import './App.css';

const itemArray=new Array(9).fill("empty");

function App() {

  const [isCross,setIsCross]=useState(false);
  const [winMessage,setWinMessage]=useState("");

  const reloadGame=()=>{
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty",0,9);
  }

  const changeItem=(ItemNumber)=>{
    if(winMessage){
      return toast(winMessage,{type:"success"});
    }
    
    if(itemArray[ItemNumber]==="empty"){
        itemArray[ItemNumber]=isCross? "cross" :"circle";

        setIsCross(!isCross);
    }
    else{
      return toast("alrady fill",{type:"warning"});
    }

    checkIsWinner()
  }

  const checkIsWinner=()=>{
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      setWinMessage(`${itemArray[3]} won`);
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[6]} won`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      setWinMessage(`${itemArray[1]} won`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[2]} won`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[2]} won`);
    }
  }

  return (
   <Container className="p-5">
     <ToastContainer position="bottom-center"/>
     <Row >
     
      <Col md={6} className="offset-md-3">
      {
        winMessage? 
        <div className="mb-2 mt-2">
          <h1 className="text-info text-center text-uppercase mb-2">
            {winMessage}
          </h1>
          <Button color="success" block onClick={reloadGame}>Reload Game</Button>
        </div>
        :
        <h1 className="mt-2 mb-2 text-danger text-center text-uppercase">
          {isCross? "cross":"circle"} Turn
        </h1>
        
      }
      <div className="grid">
         
             {itemArray.map((item,index)=>(
               <Card onClick={()=>changeItem(index)}>
                 <CardBody className="box">
                  <Icon name={item}/>
                 </CardBody>
               </Card>
             ))}
      </div>
       </Col>
     </Row>
   </Container>
  );
}

export default App;
