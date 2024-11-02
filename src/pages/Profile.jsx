import styled from 'styled-components';
import BasicGrid from './BasicGrid';

function Profile() {
    const Wrapper = styled.div`
        width: 100%;
        height: 100vh;
        padding-top: 30px;
    `;

    return (
        <Wrapper>
            <BasicGrid />
        </Wrapper>
    );
}

export default Profile;
