import React from "react";
import {useDispatch} from 'react-redux'

import "features/common/style/Modal.scss";
import { deleteRequest } from "features/user/reducer/userSlice";

export default function ModalForm(props) {
  const sessionUser = JSON.parse(window.localStorage.getItem('sessionUser'))
  const dispatch = useDispatch()

    const styleClasses = ["Modal",props.show === 'entering'? "ModalOpen" : props.show === 'exiting' ? 'ModalClose':null]
  return (
    <div className={styleClasses.join(' ')}>
      <h1>A Modal</h1>
      <button className="Button" onClick={(async () => {await dispatch(deleteRequest(sessionUser.email))})}>
        YES
      </button>
      <br/>
      <button className="Button" onClick={props.closed}>
        NO
      </button>
    </div>
  );
}