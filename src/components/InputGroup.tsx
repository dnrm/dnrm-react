import React from "react";
import "../styles/input-group.scss";
import Input from '../components/Input';
import Button from '../components/Button';

export default function InputGroup(props: any) {
    return (
        <div className="flex">
            <Input inputGroup value={props.value} onChange={props.onChange} />
            <Button inputGroup {...props}>{props.children}</Button>
        </div>
    );
}
