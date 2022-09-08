import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ name, sprites, hp}) {
  
  // initialize to show front sprite
  const [frontSprite, setFrontSprite] = useState(true)
  



  return (
    <Card>
      <div onClick={() => setFrontSprite(!frontSprite)}>
        <div className="image">
          <img 
            src={frontSprite ? sprites.front : sprites.back}
            alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
