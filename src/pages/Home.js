import React, { Fragment } from 'react'
import FeatureProducts from '../componets/FeatureProducts';
import FirstLayout from '../componets/FirstLayout'
import Services from '../componets/Services';
import Trusted from '../componets/Trusted';

export default function Home() {
  const data = {
    name: "Home page"
  };
  return (
    <Fragment>
      <FirstLayout data={data} />
      <FeatureProducts/>
      <Services />
      <Trusted />
    </Fragment>
  )
}
