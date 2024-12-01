import { IFlipCardProps } from "./FlipCard.Props";
import "./FlipCard.css";

function FlipCard({ data, index, handleActive }: IFlipCardProps) {
    return (
        <div className={`flip-card ${data?.flipped || data?.solved ? "active" : ""}`} key={index} onClick={handleActive}>
            <div className="flip-card-inner">
                <div className="flip-card-front" />
                <div className="flip-card-back">{data?.emoji}</div>
            </div>
        </div>
    );
}

export default FlipCard;
