import { Box, FormControl, Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

export const LoadingSkeleton = () => (
  <Grid
    container
    style={{ width: "100%" }}
    direction="column"
    justifyContent="center"
    alignItems="center"
  >
    <h1
      style={{
        fontSize: "20px",
        fontWeight: "bold",
        marginTop: "10px",
        marginBottom: "20px",
      }}
    >
      Agregar Producto
    </h1>
    <FormControl
      style={{
        width: "80%",
        alignItems: 'center'
      }}
    >
      <Skeleton
        variant="rectangular"
        style={{ marginTop: "10%" }}
        width={180}
        height={30}
      />
      <Skeleton
        variant="rectangular"
        style={{ marginTop: "10%" }}
        width={180}
        height={30}
      />
      <Skeleton
        variant="rectangular"
        style={{ marginTop: "10%" }}
        width={180}
        height={30}
      />
      <Skeleton
        variant="rectangular"
        style={{ marginTop: "10%" }}
        width={180}
        height={30}
      />

      <Skeleton
        variant="rectangular"
        style={{ marginTop: "10%" }}
        width={180}
        height={30}
      />



      <div style={{ justifyContent: "center", display: 'flex', marginTop: '3rem' }}>
        <Skeleton
          variant="rectangular"
          style={{ marginBottom: "5px", marginLeft: "2%" }}
          width={30}
          height={30}
        />
        <Skeleton
          variant="rectangular"
          style={{ marginBottom: "5px", marginLeft: "2%" }}
          width={30}
          height={30}
        />
        <Skeleton
          variant="rectangular"
          style={{ marginBottom: "5px", marginLeft: "2%" }}
          width={30}
          height={30}
        />
      </div>
    </FormControl>
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "10px",
        paddingBottom: "10px",
      }}
    >
      <Skeleton
        variant="rectangular"
        style={{ marginTop: "2rem" }}
        width={120}
        height={30}
      />
    </div>
  </Grid>
);
