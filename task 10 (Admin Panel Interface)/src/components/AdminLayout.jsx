import { Box, Typography, Container, Grid, Button } from "@mui/material";

function AdminLayout({ children, testModal }) {
    const [userForm, userTable, chartSection] = children;

    return (
        <Container maxWidth="xl" sx={{ py: 4 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
                <Typography variant="h3" component="h1" color="primary">
                    Admin Dashboard
                </Typography>
                <Button
                    variant="outlined"
                    onClick={testModal}
                >
                    Test Modal
                </Button>
            </Box>

            <Grid container spacing={4}>
                {/* User Form Section */}
                <Grid size={{ xs: 12, md: 4 }}>
                    <Box sx={{
                        p: 3,
                        bgcolor: "background.paper",
                        borderRadius: 2,
                        boxShadow: 1,
                        height: "100%"
                    }}>
                        <Typography variant="h5" gutterBottom>
                            User Management
                        </Typography>
                        {userForm}
                    </Box>
                </Grid>

                {/* User Table Section */}
                <Grid size={{ xs: 12, md: 8 }}>
                    <Box sx={{
                        p: 3,
                        bgcolor: "background.paper",
                        borderRadius: 2,
                        boxShadow: 1,
                        height: "100%"
                    }}>
                        <Typography variant="h5" gutterBottom>
                            User List
                        </Typography>
                        {userTable}
                    </Box>
                </Grid>

                {/* Chart Section */}
                <Grid size={{ xs: 12 }}>
                    <Box sx={{
                        p: 3,
                        bgcolor: "background.paper",
                        borderRadius: 2,
                        boxShadow: 1,
                        mt: 2
                    }}>
                        <Typography variant="h5" gutterBottom>
                            Analytics
                        </Typography>
                        {chartSection}
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default AdminLayout;