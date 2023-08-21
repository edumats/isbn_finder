'use client'
import { Card } from "@aws-amplify/ui-react"
import { Heading } from "@aws-amplify/ui-react"
import { Text } from "@aws-amplify/ui-react"
import { Flex } from "@aws-amplify/ui-react"
import { Badge } from "@aws-amplify/ui-react"
import Image from "next/image"

type Book = {
  isbn: string,
  title: string,
  subtitle?: string | null,
  authors?: string[] | null,
  publisher?: string | null,
  synopsis?: string,
  dimensions?: {
    width?: number,
    height?: number,
    unit?: string,
  },
  year?: number,
  format?: string,
  page_count?: number,
  subjects?: string[],
  location?: string | null,
  retail_price?: number | null,
  cover_url?: string | null,
  provider?: string | null

}

export default function ResultCard({book}: any) {
  const listAuthors = book.authors.map(
    (author: string) => <Text className="book_authors" variation="secondary" key={author}>{author}</Text>
  )
  const listSubjects = book.subjects.map(
    (subject: string) => <Badge className="book_subjects" variation="info" key={subject}>{subject}</Badge>
  )
  return (
    <div className="md:max-w-6xl md:mx-auto">
      <Card id="result" marginBottom="large" variation="elevated">
        <Flex
          direction="column"
          justifyContent="flex-start"
          gap="1rem"
        >
          { book.cover_url
            ? <Image alt="book cover" src={book.cover_url} width={300} height={300} />
            : <div className="md:max-w-md"><Card variation="outlined">Imagem não disponível</Card></div>
          }
          
          <Flex
            direction="column"
            gap="0.3rem"
          > 
            <div className="my-5">
              <Heading level={4}>{book.title}</Heading>
              <Flex
                direction="row"
                justifyContent="flex-start"
                wrap="wrap"
                marginBottom={"0.5rem"}
              >
                {listAuthors}
              </Flex>
              <Text variation="tertiary">ISBN: {book.isbn}</Text>
            </div>
          </Flex>
          
          <Flex
            direction="row"
            justifyContent="flex-start"
            wrap="wrap"
          >
            {listSubjects}
          </Flex>
          <Flex
            direction="column"
            justifyContent="flex-start"
            gap="0.5rem"
          >
            { book.publisher && <Text id="book_publisher" variation="primary">Editora: {book.publisher}</Text>}
            { book.year && <Text id="book_year" variation="tertiary">Ano: {book.year}</Text> }
            { book.page_count && <Text id="book_page_count" variation="tertiary">{book.page_count} páginas</Text> }
          </Flex>
          <Text
            id="book_synopsis"
            lineHeight={"1.7em"}
            fontSize={"1.1em"}
            style={{color: "#333333", letterSpacing: ".05em", hyphens: "auto", textAlign: "justify"}}
          >
            {book.synopsis}
          </Text>
        </Flex>
        
      </Card>
    </div>
    
  )
}