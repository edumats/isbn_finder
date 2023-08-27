import { Card, Text } from "@aws-amplify/ui-react";
import Image from "next/image";

export default function IsbnExplanation() {
    return (
        <div className="md:max-w-xl md:mx-auto">
          <Card>
            <Text variation="info">
              O ISBN (International Standard Book Number/ Padrão Internacional de Numeração de Livros) é um padrão que usa 10 ou 13 números para criar um registro geral para livros, artigos e apostilas. Este sistema retorna informações de livros publicados no Brasil, com código ISBN de prefixo 5 ou 85.          
            </Text>
            <div className="flex justify-center my-1">
              <Image src="/ISBN13.png" alt="Example of ISBN code" width={"200"} height={200} />
            </div>
            <Text variation="info">
              No exemplo acima, o código ISBN é 9783161484100
            </Text>
          </Card>
        </div>
    )
}