import React from 'react';
import { WrapperForm } from './units';

const Form = ({color, name, text}) => {
    return (
        <WrapperForm bgColor={color}>
        <h3>{name}</h3>
        <div>{text}</div>
        </WrapperForm>
    );
};
export default Form;