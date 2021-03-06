import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
interface ContainerProps {
  history: any;
}
const Page: React.FC<ContainerProps> = ({history}) => {

  const { name } = useParams<{ name: string; }>();

  /*return (
    <IonPage>
      <IonHeader color="dark">
        <IonToolbar >
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={name} />
      </IonContent>
    </IonPage>
  );*/
  return (
    <IonPage>
      <IonHeader color="dark">
        <IonToolbar >
          <IonButtons slot="start">
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={name} history={history} />
      </IonContent>
    </IonPage>
  );
};

export default Page;
