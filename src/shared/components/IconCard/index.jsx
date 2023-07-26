import { IConCardImageContainer, IconCardContainer } from "./style";

function IconCard({ iconUrl,backgroundColor }) {
  return (
    <IconCardContainer backgroundColor={backgroundColor}>
        <IConCardImageContainer>
        <img src={iconUrl} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
        </IConCardImageContainer>
   
    </IconCardContainer>
   
  );
}

export default IconCard;