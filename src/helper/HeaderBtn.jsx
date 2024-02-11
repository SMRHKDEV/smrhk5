import { Button } from "@mui/material";

export default function HeaderBtn(props) {
    return (
        <Button {...props}>
            {props.children}
        </Button>
    )
}