import '../project/CardStyle.css';

function Card() {
    return (
        <div className="cols">
            <div className="col">
                <div className="container">
                    <div className="front">
                        <div className="inner">
                            <p>Dotori</p>
                            <span>메신저 사이트</span>
                        </div>
                    </div>
                    <div className="back">
                        <div className="inner">
                            <p>
                                웹소켓을 활용한 실시간 메신저 사이트
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Card;
