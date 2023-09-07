import { useState } from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Acordeon from '@/components/Acordeon'
import content from '../../../public/content.json'
import Button from "react-bootstrap/Button";
import FormModal from "@/components/FormModal";
import transformObject from '@/utils/transformArray'
import BurguerMenu from '../BurguerMenu/BurguerMenu'

export default function Home() {
  const dataFormat = transformObject(content);
  const [showModal, setShowModal] = useState(false);
  const [sortedData, setSortedData] = useState(dataFormat);
  const [isSorted, setIsSorted] = useState(true);
  const [category, setCategory] = useState(0);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  function sortDataAlphabetically(data) {
    let sortedData = {...data};
    
    Object.keys(sortedData).forEach((key) => {
      sortedData[key] = sortedData[key].sort((a, b) => a.prompt.localeCompare(b.prompt));
    });
  
    return sortedData;
  }
  
  // ...
  
  const handleSort = () => {
    if (!isSorted) {
      const sorted = sortDataAlphabetically(sortedData);
      setSortedData(sorted);
    } else {
      setSortedData(dataFormat);
    }
    setIsSorted(!isSorted);
  };
  

  function getCategories(inputObject) {
    return Object.keys(inputObject);
  }

  return (
    <div>
      <Head>
        <title>Diccionario</title>
        <meta name="description" content="Diccionario de Ignacio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='container'>
        <main className={styles.main}>
          <div className="d-flex justify-content-between mb-3">
            <BurguerMenu routes={getCategories(dataFormat)} category={category} setCategory={setCategory}/>
          </div>
          <div className="d-flex justify-content-between mb-3 pt-5">
            <Button variant="primary" onClick={handleSort} className="ms-2">
              {isSorted ? "Desordenar" : "Ordenar"}
            </Button>
            <Button variant="outline-success" onClick={handleModal} className="ms-2">
              Agregar
            </Button>
          </div>
          <FormModal showModal={showModal} handleModal={handleModal} />
          <Acordeon data={dataFormat} sortedData={sortedData} category={category} />
        </main>
      </div>
    </div>
  )
}
