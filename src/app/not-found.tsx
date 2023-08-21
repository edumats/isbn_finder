'use client'
import Link from 'next/link';
import { Card, Text } from '@aws-amplify/ui-react';
 
export default function NotFound() {
  return (
    <div className="md:max-w-xl md:mx-auto">
        <Card variation='elevated'>
            <h1>Página não encontrada</h1>
            <Text variation="warning">
                Não encontramos a página solicitada.       
            </Text>
            <Link href="/">Voltar para página inicial</Link> 
        </Card>
    </div>
  )
}