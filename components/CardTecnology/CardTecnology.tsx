import Image from "next/image";

import { StyledContainertecnology } from './style';

interface ICardTecnologyProps {
    svg: string;
}

const CardTecnology = (props: ICardTecnologyProps) => {
    return(
        <StyledContainertecnology>
            <Image src={props.svg} width={65} height={65} />
        </StyledContainertecnology>
    )
}

export default CardTecnology;
