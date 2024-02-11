import { Button } from "@mui/material";

export default function FooterBtn(props) {
    return (
        <Button {...props}>{props.children}</Button>
    )
}