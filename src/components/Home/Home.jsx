import styles from "./Home.module.css";

const Home = () => {

  
  return (

    <div className={styles.divContainer}>
        <h1 className={styles.title}>Welcome to  SuperHero Village</h1>
        <img src="src/assets/images/loading-villain.jpg" alt="old-superman" className={styles.image}/>
    </div>

  )
}

export default Home;