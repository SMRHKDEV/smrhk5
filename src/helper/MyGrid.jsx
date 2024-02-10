import Grid from "@mui/material/Unstable_Grid2/Grid2";

export default function MyGrid(props) {
    return (
        <Grid {...props}>
            {props.children}
        </Grid>
    )
}