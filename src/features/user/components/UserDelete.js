import {  Button, Modal,Row, Card } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { deleteRequest } from '../reducer/userSlice';
import {useDispatch} from 'react-redux'


export default function UserDelete(){
     const sessionUser = JSON.parse(window.localStorage.getItem('sessionUser'))
     const dispatch = useDispatch()

      // Modal
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      // const handleSubmit = async (data) => {
      //   alert("눌렀어요")
      //    dispatch(deleteRequest(data))
      // };
     
      useEffect(() => {
        console.log();
        // getBoard(match.params.id);
      }, []);
    return(
        <>
      <Row className="justify-content-end">
       <Card.Title className="pb-2" style={{borderBottom: '1px solid #dddddd'}}>{sessionUser.username}</Card.Title>
        <Button variant="danger" onClick={() => handleShow()}>회원탈퇴 하기</Button>
      </Row>
      <Card className="p-3 my-3">
       
        <Card.Text>
          {}
        </Card.Text>
      </Card>
      {/* <commentlist board_id="{match.params.id}"></commentlist> */}
      <Row className="justify-content-center">
      </Row>
 
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            아니요!!!!
          </Button>
          <Button variant="primary" onClick={(async () => {await dispatch(deleteRequest(sessionUser.email))})}>
            그래!!!나 탈퇴할거야
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}