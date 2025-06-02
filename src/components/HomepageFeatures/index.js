import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fácil leitura',
    Svg: require('@site/static/img/pessoa_lendo.svg').default,
    description: (
      <>
     Os resumos gerados pela LIA são fáceis de ler e contém as informações mais importantes do contrato
      </>
    ),
  },
  {
    title: 'Economia de tempo',
    Svg: require('@site/static/img/Relogio.svg').default,
    description: (
      <>
      Com os resumos da LIA, ler contratos se torna muito mais rápido, economizando tempo de trabalho
      </>
    ),
  },
  {
    title: 'Eficiência',
    Svg: require('@site/static/img/Joinha.svg').default,
    description: (
      <>
       Com a economia de tempo, a facilidade de leitura dos contratos resumidos e a redução do fator erro humano,
        a eficiência do setor aumenta significativamente
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
