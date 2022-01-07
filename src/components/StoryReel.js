import React from "react";
import "../styles/storyReel.css";
import Story from "./Story";

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBHC2s4NFdzXEsVzvBPGjkrSePQa-8XFuNtQ&usqp=CAU"
        profileSrc="https://picsum.photos/400/400"
        title="Rafeh Qazi"
      />
      <Story
        image="https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&ixid=eyJHcHBfaWQiQjEyMDd9&w=1000&q=80"
        profileSrc="https://image.cnbcfm.com/api/v1/image/106569797-1591649109683gettyimages-1032942656.jpeg?v=1597932630"
        title="Frankie"
      />
      <Story
        image="https://picsum.photos/400/400"
        profileSrc="https://prod-takelessons.netdna-ssl.com/document/profile_183419_pi_IMG_6868.JPG?v=1561606635"
        title="Aaron Bernath"
      />
    </div>
  );
};

export default StoryReel;
