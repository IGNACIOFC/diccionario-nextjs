import { useState } from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Acordeon from '@/components/Acordeon'
import content from '../../../public/content.json'
import Button from "react-bootstrap/Button";
import FormModal from "@/components/FormModal";
import transformArray from '@/utils/transformArray'

export default function Home() {
  const dataFormat = transformArray(content);
  const [showModal, setShowModal] = useState(false);
  const [sortedData, setSortedData] = useState(dataFormat);
  const [isSorted, setIsSorted] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleSort = () => {
    if (!isSorted) {
      const sorted = [...sortedData].sort((a, b) => a.prompt.localeCompare(b.prompt));
      setSortedData(sorted);
    } else {
      setSortedData(dataFormat);
    }
    setIsSorted(!isSorted);
  };

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
          <div className={styles.counter}>
            {content.length / 2 + " palabras"}
          </div>
          <div className="d-flex justify-content-between mb-3">
            <Button variant="primary" onClick={handleSort} className="ms-2">
              {isSorted ? "Desordenar" : "Ordenar"}
            </Button>
            <Button variant="outline-success" onClick={handleModal} className="ms-2">
              Agregar
            </Button>
          </div>
          <FormModal showModal={showModal} handleModal={handleModal} />
          <Acordeon data={content} sortedData={sortedData} />
        </main>
      </div>
    </div>
  )
}