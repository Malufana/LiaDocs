import React from 'react';
import styles from './time.module.css'
import Layout from '@theme/Layout';

export default function Time(){
    return(
        <Layout
            title='Página Sobre o Time'
            description='Conheça o time da LIA'
        >
            <main>
                <div className={styles.page}>
                    {/* BANNER INICIAL */}
                    <section className={styles.banner}>
                        <img src='/img/bannerTime.png' className={styles.bannerImage}/>
                    </section>

                    {/* ANA MALUF */}
                    <section className={styles.cardContainer}>
                        <div className={styles.infoContainer}>
                            <div className={styles.sobre}>
                                <h3>ANA MALUF</h3>
                                <p>Ana Beatriz Maluf, conhecida como Maluf, é formada em Técnico de Informática pelo IFSP e concluiu recentemente o curso técnico de Análise e Desenvolvimento de Sistemas pelo SENAI - Roberto Mange. Ela deseja seguir carreira na área de desenvolvimento, buscando aprimorar seus conhecimentos em front-end, back-end, inteligência artificial e análise de dados. Atuou como desenvolvedora full-stack no projeto LIA, onde enfrentou desafios significativos, mas adorou contribuir para o sucesso do projeto junto à equipe.</p>
                                <div className={styles.icons}>
                                    <p>
                                        Full-Stack
                                    </p>
                                    <a href='' target='_blank' rel="noopener noreferrer">
                                        <img src='/img/insta.png' />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.sobreImagem}>
                                <img 
                                    src='/img/maluf.png'
                                />
                            </div>
                        </div>
                    </section>

                    {/* JULIA SILVA */}
                    <section className={styles.cardContainer}>
                        <div className={styles.infoContainer}>
                            <div className={styles.sobre}>
                                <h3>JULIA SILVA</h3>
                                <p>Júlia Silva é formada em Técnico em Desenvolvimento de Sistemas pelo SENAI e atualmente cursa Bacharelado em Tecnologia da Informação pela UNIVESP. Atuou como designer no projeto LIA, onde contribuiu com soluções visuais e criativas. No momento, está se aperfeiçoando na área de Análise de Dados, buscando ampliar suas habilidades técnicas e estratégicas no tratamento e interpretação de informações.</p>
                                <div className={styles.icons}>
                                    <p>
                                        UI/UX
                                    </p>
                                    <a href='' target='_blank' rel="noopener noreferrer">
                                        <img src='/img/insta.png' />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.sobreImagem}>
                                <img 
                                    src='/img/julia.png'
                                />
                            </div>
                        </div>
                    </section>

                    {/* LEONARDO BICALHO */}
                    <section className={styles.cardContainer}>
                        <div className={styles.infoContainer}>
                            <div className={styles.sobre}>
                                <h3>LEONARDO BICALHO</h3>
                                <p>Leonardo de Souza Ruiz Bicalho se formou no curso técnico de Análise e Desenvolvimento de Sistemas e também um curso aparte de web-design front-end, ambos pelo Senai. Trabalhou na documentação do projeto LIA e atualmente procura aprimorar suas habilidades de automação em Python e também o desenvolvimento de Web Sites utilizando React e frameworks como Django.</p>
                                <div className={styles.icons}>
                                    <p>
                                        Documentação
                                    </p>
                                    <a href='' target='_blank' rel="noopener noreferrer">
                                        <img src='/img/insta.png' />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.sobreImagem}>
                                <img 
                                    src='/img/leo.png'
                                />
                            </div>
                        </div>
                    </section>

                    {/* VITORIA GRIZOTTO */}
                    <section className={styles.cardContainer}>
                        <div className={styles.infoContainer}>
                            <div className={styles.sobre}>
                                <h3>VITORIA GRIZOTTO</h3>
                                <p>Vitória Grizotto iniciou sua trajetória no mundo da tecnologia em 2021, ao ingressar no curso técnico de Informática pelo IFSP. Desde então, vem construindo sua carreira na área, sempre em busca de aprendizado e evolução. Atuou no projeto voltado para o crescimento da Inteligência Artificial, adquiriu diversos conhecimentos que contribuíram significativamente para seu desenvolvimento profissional. Atualmente, está focada na faculdade e no aperfeiçoamento de suas habilidades técnicas, além de continuar avançando em sua jornada dentro da empresa.</p>
                                <div className={styles.icons}>
                                    <p>
                                        Full-Stack
                                    </p>
                                    <a href='' target='_blank' rel="noopener noreferrer">
                                        <img src='/img/insta.png' />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.sobreImagem}>
                                <img 
                                    src='/img/vitoria.png'
                                />
                            </div>
                        </div>
                    </section>

                </div>
            </main>
        </Layout>
    );
}