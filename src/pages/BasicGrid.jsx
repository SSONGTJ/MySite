import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import ProfileNav from './ProfileNav';
import ProfileContent from './ProfileContent';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#1b1b1e',
    // ...theme.typography.body2,
    // padding: theme.spacing(1),
    textAlign: 'left',
    color: '#fff',
    boxShadow: 'none',
}));

function BasicGrid() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid size={2}>
                        <Item>
                            <ProfileNav />
                        </Item>
                    </Grid>
                    <Grid size={8}>
                        <Item>
                            <ProfileContent />
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
export default BasicGrid;
