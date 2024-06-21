import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();
  
  return (

    <div className={styles.divContainer}>
        <h1 className={styles.title}>Welcome to  SuperHero Village</h1>
        <img src="src/assets/images/loading-villain.jpg" alt="old-superman" className={styles.image}/>
        <div className={styles.p}>
          <p className={styles.text}>Hello, I am General Evans and this is my message to you and our troops: Attention, my fearless, slightly bewildered battalion of bravery! Today, we stand on the precipice of another glorious adventure—well, more like a chaotic romp through the annals of heroism, but let's not split hairs. As your general, I command you to tighten your utility belts, polish your improbable gadgets, and muster every ounce of your bumbling courage! We march into battle not just as superheroes, but as the most delightfully unpredictable force of justice this world has ever seen. Remember, a true hero knows that the best way to defeat evil is with a smile, a quip, and possibly a banana peel. Onward, to victory and beyond!</p>
        </div>
        <button className={styles.button} onClick={()=> navigate("/superherobarracks")}>troops</button>
    </div>

  )
}

export default Home;