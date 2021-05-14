import React from "react";
import "../styles/input-group.scss";
import Input from "../components/Input";
import Button from "../components/Button";

export default function InputGroup(props: any) {
    return (
        <div className="flex">
            <form onSubmit={props.onSubmit} style={{ display: 'flex', width: '100%' }} className="w-4/5">
                <Input
                    inputGroup
                    value={props.value}
                    onChange={props.onChange}
                />
                <Button inputGroup type="submit">
                    {props.children}
                </Button>
            </form>
        </div>
    );
}
