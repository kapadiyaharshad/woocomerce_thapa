import { Fragment } from 'react';
import FirstLayout from '../componets/FirstLayout';
import { useProductContext } from '../context/productcontex';

export default function About() {
  const {name} = useProductContext()
  const data = {
    name: "About Page"
  }
  return (

    <Fragment>
      {name}
      <FirstLayout data={data} />
    </Fragment>
  )
}
