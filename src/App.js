import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

import "bulma/css/bulma.css";

import "./styles.css";

export default function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Assistants</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <ProfileCard title="Alexa" handle="@alexa69" pic={AlexaImage} />
            </div>
            <div className="column">
              <ProfileCard
                title="Cortana"
                handle="@cortana11"
                pic={CortanaImage}
              />
            </div>
            <div className="column">
              <ProfileCard title="Siri" handle="@Siri08" pic={SiriImage} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
