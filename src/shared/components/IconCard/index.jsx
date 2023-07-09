import { IConCardImageContainer, IconCardContainer } from "./style";

function IconCard({ iconUrl,backgroundColor }) {
  return (
    <IconCardContainer backgroundColor={backgroundColor}>
        <IConCardImageContainer>
        <img src={iconUrl}/>
        </IConCardImageContainer>
        
    </IconCardContainer>
   
  );
}

export default IconCard;