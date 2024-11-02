import { useEffect, useState } from 'react';
import { List, ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function ProfileNav() {
    const params = window.location.pathname;
    const [isValue, setIsValue] = useState(true);

    useEffect(() => {
        if (params === '/Profile') {
            setIsValue(false);
        } else {
            setIsValue(true);
        }
    }, [params]);

    const StyledLink = styled(Link)`
        text-decoration: none;
        color: #fff;
    `;

    return (
        <div>
            <List
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: isValue ? 'row' : 'column',
                    alignItems: isValue ? '' : 'flex-end',
                }}
            >
                <StyledLink to="/">
                    <ListItemButton>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </StyledLink>
                <StyledLink to="/Profile">
                    <ListItemButton>
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                </StyledLink>
                <StyledLink to="/Project">
                    <ListItemButton>
                        <ListItemText primary="Project" />
                    </ListItemButton>
                </StyledLink>
                <StyledLink to="/Contact">
                    <ListItemButton>
                        <ListItemText primary="Contact" />
                    </ListItemButton>
                </StyledLink>
            </List>
        </div>
    );
}
export default ProfileNav;
