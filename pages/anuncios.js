import React from 'react';
import Layout from '../components/Layout';
import Cards from '../components/anuncios/Cards';
import Head from 'next/head';

export default function anuncios(){
    return(
        <Layout>
            <section className="fill d-flex flex-column justify-content-center align-items-center">
                <h2 className="fw-bold my-3 text-center">Anuncios</h2>
                <Cards />
            </section>
            <Head>
                <title>RPG Corrientes | Anuncios</title>    
            </Head>       
        </Layout>
    )
}