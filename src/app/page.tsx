'use client'
import { useState } from "react";
import { SearchField } from "@aws-amplify/ui-react";
import { Alert } from "@aws-amplify/ui-react";
import { Card } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';

import ResultCard from "./components/ResultCard";
import IsbnExplanation from "./components/IsbnExplanation";

async function getDataFromAPI(isbn: string) {
  const res = await fetch(`https://brasilapi.com.br/api/isbn/v1/${isbn}`)
  console.log('Getting data')
  if (!res.ok) {
    console.log('API returned error')
    throw new Error('Error fetching API data')
  }
  return await res.json()
}

function cleanISBN(isbn: string) {
  return isbn.replace(/\D/g, '');
}


export default function Home() {
  const [currentBook, setCurrentBook] = useState(false);
  const [alertMessage, setAlertMessage] = useState('Não foi possível encontrar os dados do livro usando o ISBN fornecido');
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [showExplanation, setShowExplanation] = useState(true);

  async function populateResults(isbn: string) {
    setShowExplanation(false)
    try {
      const bookData = await getDataFromAPI(cleanISBN(isbn))
      setCurrentBook(bookData)
    } catch (e) {
      console.log('Catching error')
      setCurrentBook(false)
      setIsAlertVisible(true)
    }    
  }

  return (
    <>
      <Alert
        variation="error"
        isDismissible={true}
        onDismiss={() => setIsAlertVisible(false)}
        display={isAlertVisible ? "flex" : "none"}
      >
        {alertMessage}
      </Alert>
      <main className="container md:mx-auto">
        <div className="my-10 mx-2 md:max-w-md md:mx-auto">
          <SearchField
            id="search"
            label="Procure um livro pelo código ISBN"
            labelHidden={false}
            placeholder="Digite o código ISBN"
            onSubmit={(isbn) => {
              populateResults(isbn)
              setIsAlertVisible(false)
            }}
          />
        </div>
        { currentBook && <ResultCard book={currentBook}/> }
        { !currentBook && <IsbnExplanation /> }
      </main>
    
    </>
    
  )
}
