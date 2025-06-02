import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css'
import { useColorMode } from '@docusaurus/theme-common';

function HomePage(){
  const { colorMode } = useColorMode();
  const bannerProd = colorMode === 'dark' ? '/img/produtividadeDark.png' : '/img/bannerProdutividade.png'
  const bannerAux = colorMode === 'dark' ? '/img/auxilioDark.png' : '/img/bannerAuxiliar.png'


  return(
    <main>
      <div className={styles.page}>
        {/* BANNER INICIAL */}
        <section className={styles.banner}>
          <img src={bannerProd} className={styles.bannerImage}/>
        </section>

        {/* O QUE É LIA */}
        <section className={colorMode === 'dark' ? styles.sobreLiaDark : styles.sobreLia}>
          <div className={styles.sobreContainer}>
            <div className={styles.sobreTexto}>
              <img src='/img/imgComputer.png' className={styles.sobreImagem}/>
              <h2>O que é a LIA?</h2>
              <p>LIA (Legal Insight AI) é uma inteligência artificial da Bosch integrada à plataforma Comply Track. Ela analisa, resume e categoriza contratos jurídicos de forma automática, otimizando processos, aumentando a produtividade e apoiando decisões estratégicas com mais agilidade e precisão.</p>
            </div>
          </div>
        </section>

        {/* BENEFICIOS */}
        <section className={styles.beneficios}>
          <h2>Benefícios do Projeto</h2>
          <div className={colorMode === 'dark' ? styles.beneficiosCardsDark : styles.beneficiosCards}>  
            <div className={styles.card}>
              <img src='/img/caraLendo.png'/>
              <h3>Fácil leitura</h3>
              <p>Os resumos gerados pela LIA são fáceis de ler e contém as informações mais importantes do contrato</p>
            </div>

            <div className={styles.card}>
              <img src='/img/relogio.png'/>
              <h3>Economia de tempo</h3>
              <p>Com os resumos da LIA, ler contratos se torna muito mais rápido, economizando tempo de trabalho</p>
            </div>

            <div className={styles.card}>
              <img src='/img/joia.png'/>
              <h3>Mais eficiência</h3>
              <p>Com a economia de tempo a eficiência do setor aumenta significativamente</p>
            </div>
          </div>
        </section>

        {/* TIME */}
        <section className={colorMode === 'dark' ? styles.timeDark : styles.time}>
          <h2 className={styles.timeTitulo}>TIME</h2>
          <div className={styles.membros}>

            <div className={styles.membro}> 
              <h3>Ana Maluf</h3>
              <img src='/img/maluf.png' className={styles.foto}/>
              <p className={styles.funcao}>Full-Stack</p>
              <div className={styles.icons}>
                <a href='https://www.linkedin.com/in/ana-beatriz-maluf-386a5928a/' target='_blank' rel="noopener noreferrer">
                  <img src='/img/linkdin.png'/>
                </a>
                <a href='https://github.com/Malufana' target='_blank' rel="noopener noreferrer">
                  <img src='/img/github.png'/>
                </a>
              </div>
            </div>

            <div className={styles.membro}> 
              <h3>Julia Silva</h3>
              <img src='/img/julia.png' className={styles.foto}/>
              <p className={styles.funcao}>Ui/Ux</p>
              <div className={styles.icons}>
                <a href='https://www.linkedin.com/in/juliaalessandrajuliatti/' target='_blank' rel="noopener noreferrer">
                  <img src='/img/linkdin.png'/>
                </a>
                <a href='https://github.com/JuliaJuliatti' target='_blank' rel="noopener noreferrer">
                  <img src='/img/github.png'/>
                </a>
              </div>
            </div>

            <div className={styles.membro}> 
              <h3>Leonardo Bicalho</h3>
              <img src='/img/leo.png' className={styles.foto}/>
              <p className={styles.funcao}>Documentação</p>
              <div className={styles.icons}>
                <a href='https://www.linkedin.com/in/leonardo-de-souza-ruiz-bicalho-6473132b2/' target='_blank' rel="noopener noreferrer">
                  <img src='/img/linkdin.png'/>
                </a>
                <a href='https://github.com/LeonardoSRB' target='_blank' rel="noopener noreferrer">
                  <img src='/img/github.png'/>
                </a>
              </div>
            </div>

            <div className={styles.membro}> 
              <h3>Vitória Grizotto</h3>
              <img src='/img/vitoria.png' className={styles.foto}/>
              <p className={styles.funcao}>Full-Stack</p>
              <div className={styles.icons}>
                <a href='https://www.linkedin.com/in/vitoria-grizotto-22a3ba277/' target='_blank' rel="noopener noreferrer">
                  <img src='/img/linkdin.png'/>
                </a>
                <a href='https://github.com/VitoriaGrizotto' target='_blank' rel="noopener noreferrer">
                  <img src='/img/github.png'/>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* BANNER FINAL */}
        <section className={styles.bannerImage}>
          <img src={bannerAux}/>
        </section>
      </div>
    </main>
  );
}

export default function Home(){
  return(
    <Layout
      title='Página Inicial'
      description='Bem-Vindo ao site da LIA'
    >
      <HomePage />
    </Layout>
  );
}


