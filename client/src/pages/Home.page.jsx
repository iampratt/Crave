import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Delivery from '../components/Delivery';
import Dining from '../components/Dining';
import HomePageLayout from '../layouts/Home.layout';

function Home() {
  const { type } = useParams();

  return (
    <div>
      {type === 'dining' && <Dining />}
      {type === 'delivery' && <Delivery />}
    </div>
  );
}

export default HomePageLayout(Home);
