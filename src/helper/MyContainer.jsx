import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

export default function MyContainer(props) {
    return (
        <Container>
            <Grid container {...props}>
                {props.children}
            </Grid>
        </Container>
    )
}