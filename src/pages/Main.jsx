import { Link } from 'react-router-dom';
import './MyCss.css';
import { Button, styled } from '@mui/material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import WebIcon from '@mui/icons-material/Web';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import ProfileNav from './ProfileNav';
import 'animate.css';

function Main() {
    const Wrap = styled('div')({
        width: '100%',
        margin: '0 auto',
        height: '100vh',
    });

    const Title = styled('div')({
        padding: '150px 10% 0',
    });
    const ButtonWrap = styled('div')({
        padding: '300px 10% 0',
        textAlign: 'center',
    });

    const MenuButton = styled(Button)`
        margin: 0 7px 0;
    `;

    return (
        <>
            <Wrap className="wrap">
                <Title>
                    <div className="top_title">Front-end Developer</div>
                    <div className="borderWrap">
                        <span className="border"></span>
                    </div>
                    <div className="low_title animate__animated animate__bounce">
                        STJ PORTFOLIO
                    </div>
                </Title>

                <ButtonWrap className="navi">
                    {/* <Link to="/Profile">
                        <Button
                            variant="outlined"
                            startIcon={<EmojiEmotionsIcon />}
                            color="secondary"
                        >
                            프로필
                        </Button>
                    </Link>
                    <Link to="/Project">
                        <MenuButton
                            variant="outlined"
                            startIcon={<WebIcon />}
                            color="success"
                        >
                            프로젝트
                        </MenuButton>
                    </Link>
                    <Link to="/Contact">
                        <Button
                            variant="outlined"
                            startIcon={<ContactSupportIcon />}
                            color="error"
                        >
                            연락하기
                        </Button>
                    </Link> */}
                    <ProfileNav />
                </ButtonWrap>
            </Wrap>
        </>
    );
}
export default Main;
