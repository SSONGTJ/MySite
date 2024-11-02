import { Avatar } from '@mui/material';
import styled from 'styled-components';
// import MyButton from '../components/MyButton';
import Skills from '../components/Skills';

function ProfileContent() {
    const Head = styled.div`
        display: flex;
        border-bottom: 0.5px solid rgb(255, 252, 236, 0.5);
        padding-bottom: 20px;
        justify-content: space-between;
    `;
    const HeadRight = styled.div`
        display: flex;
        flex-direction: column;

        justify-content: center;
        & > h1 {
            margin: 0;
        }
        & > h2 {
            margin: 0 0 8px;
        }
    `;
    // const ButtonWrap = styled.div`
    //     display: flex;
    // `;
    return (
        <div>
            <Head>
                <HeadRight>
                    <h1>송태정</h1>
                    <h2>1995.05.05</h2>
                    {/* <ButtonWrap>
                        <MyButton name="front-end developer" color="primary" />
                        <MyButton name="react.js" color="success" />
                        <MyButton name="HTML" color="success" />
                        <MyButton name="CSS" color="success" />
                    </ButtonWrap> */}
                </HeadRight>
                <Avatar
                    src="/src/assets/itsMe.jpg"
                    sx={{ width: 150, height: 150 }}
                />
            </Head>
            <Skills />
        </div>
    );
}
export default ProfileContent;
