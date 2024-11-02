import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function MyButton(props) {
    const ButtonTheme = styled(Button)({
        marginRight: '10px!important',
        color: 'white!important',
    });
    return (
        <>
            {props.name && (
                <ButtonTheme variant="outlined" color={props.color}>
                    {props.name}
                </ButtonTheme>
            )}
        </>
    );
}

MyButton.propTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
};

export default MyButton;
