import React from 'react'
import { useRef } from 'react';
import { Button, Input } from '@mui/material';
import classes from './Account.module.css';

const BASE_URL = 'http://localhost:8090/info/account'

const UpdateAccount = (props) => {
    const updateAccountName = useRef();

    const clickUpdateHandler = (event) => {
        event.preventDefault();

        const name = updateAccountName.current.value;

        updateAccountHandler(name);
    }

    const updateAccountHandler = async(updateName) => {
        await fetch(BASE_URL, {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                id: props.id,
                name: updateName
            })
        })

        console.log("업데이트 complete");

        props.onClose();
    }

  return (
    <div className={classes.main}>
        <p>계좌 이름 수정</p>
        <Input className={classes.header} inputRef={updateAccountName} placeholder="이름" type="text" />
        <div className={classes.bottom}>
            <Button onClick={clickUpdateHandler}>수정</Button>
            <Button onClick={props.onClose}>취소</Button>
        </div>
    </div>
  )
}

export default UpdateAccount