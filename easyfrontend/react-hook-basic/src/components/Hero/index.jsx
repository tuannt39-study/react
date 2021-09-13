import React from 'react';

Hero.propTypes = {};

function Hero(props) {
  const { name } = props;
  console.log('Hero render: ', name);
  return (
    <div>Hello name: {name}</div>
  );
}

// export default Hero;
export default React.memo(Hero);