import React from 'react';
import cl from './MyModal.module.css'
import MyButton from "../button/MyButton";

const MyModal = ({children, visible, setVisible}) => {

    let rootClasses = [cl.myModal]

    if (visible) {
        rootClasses.push(cl.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.myModalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
            <MyButton onClick={() => setVisible(false)}>
                Close window
            </MyButton>
        </div>
    );
};

export default MyModal;