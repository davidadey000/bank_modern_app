import React from 'react'
import {features } from "../constants"
import styles, {layout} from "../style";
import Button from "./Button";

const Business = () => {
  return (
   <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>You do the business, <br className='sm:block hidden'/> we'll handle the money well.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum fugit quia iure voluptates, modi fuga repudiandae quidem accusamus saepe rerum et cum minus impedit. Dolorum, facilis dolorem. Nulla accusantium dolorem nam unde? Consectetur itaque vitae perspiciatis ipsa optio reprehenderit? Enim.</p>
    </div>
   </section>
  )
}

export default Business