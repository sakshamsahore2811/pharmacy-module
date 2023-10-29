"use client";
import styles from "./style.module.css";
import NavBar from './navbar/NavBar'
import Cards from './cards/Cards';
import Sales from './sales/Sales';
import Table from './tables/Table';
// import PieChart from "./charts/Charts";



const page = () => {
  return (
    <div className={styles.container}>
        <NavBar />
        <Cards />
        <Sales />
        <Table />     
        {/* <PieChart /> */}
       
    </div>
  )
}

export default page