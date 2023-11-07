import Link from "next/link";
// material
import { styled } from "@mui/material/styles";
import { Box, Button, Typography, Container } from "@mui/material";
// import Page from '../components/Page';

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  display: "flex",
  minHeight: "100%",
  alignItems: "center",
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));

// ----------------------------------------------------------------------

export default function Page404() {
  return (
    <RootStyle title="404 Page Not Found | Minimal-UI">
      <Container>
        <Box sx={{ maxWidth: 480, margin: "auto", textAlign: "center" }}>
          <div>
            <Typography variant="h3" paragraph>
              Sorry, page not found!
            </Typography>
          </div>
          <Typography sx={{ color: "text.secondary" }}>
            Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
            mistyped the URL? Be sure to check your spelling.
          </Typography>

          <div>
            <Box sx={{ height: 260, mx: "auto", my: { xs: 5, sm: 10 } }}>
              <img
                src="/images/notfound.svg"
                style={{ height: 260, mx: "auto" }}
              />
            </Box>
          </div>
          <Link href="/">
            <Button className="wrong" to="/" size="large" variant="contained">
              Go to Home
            </Button>
          </Link>
        </Box>
      </Container>
    </RootStyle>
  );
}
