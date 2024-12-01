import { IGameIconProps } from "../../hooks/useApp";

export interface IFlipCardProps {
    data: IGameIconProps;
    handleActive?: () => void;
    index: number;
    flipped?: boolean;
}
