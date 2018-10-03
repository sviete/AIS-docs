/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc + ".html";
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}


const PopularTopicsSection = ({ language }) => (
  <div className="introSection lightBackground">
    <Container>
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-evenly"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 420 }}>
          <h2>Struktura dokumentacji</h2>
          <p>
            <b><a href={docUrl('ais_bramka_index', language)}>Bramka</a>.</b>
            {' '}Opis głównej składowej systemu - bramki do domowego Internetu Rzeczy z zainstalowanym Asystentem domowym.
          </p>
          <p>
            <b><a href={docUrl('ais_app_index', language)}>Aplikacja</a>.</b>
            {' '}Opis dotyczący interfejsów użytkownika systemu Asystent domowy.
          </p>
          <p>
            <b><a href={docUrl('ais_remote_index', language)}>Pilot</a>.</b>
            {' '}Opis możliwości i wyjaśnienie trybów działania dedykowanego pilota radiowego do systemu Asystent domowy.
          </p>
          <p>
            <b><a href={docUrl('ais_iot_index', language)}>Urządzenia</a>.</b>
            {' '}Opis jak podłączyć i używać dodatkowe komponenty systemu (czujniki, przełączniki, odtwarzacze, kamery i inne).
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2>Popularne tematy</h2>
          <ul style={{ flex: "1" }}>
          <li><a href={docUrl("ais_remote_index", language)}>
              Jak działa pilot
            </a></li>
            <li><a href={docUrl("ais_app_assistent_commands", language)}>
                Komendy które rozumie Asystent
              </a></li>
          </ul>
          <h2>Przydatne linki</h2>
          <ul>
          <li><a href="https://ais-dom.pl">
              Oficjalny sklep projektu
            </a></li>
            <li><a href="https://ai-speaker.com/dom">
              Prezentacja systemu
            </a></li>
            <li><a href="https://github.com/sviete">
              Kody źródłowe składowych systemu
            </a></li>
          </ul>

        </div>
      </div>
    </Container>
  </div>
);


class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <div>
    <h2 className="projectTitle">
      Asystent domowy
      <small>Dokumentacja użytkownika systemu</small>
    </h2>
    <div>
      <a href="https://www.ai-speaker.com">Przejście do strony projektu</a>
    </div>
  </div>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <Logo img_src={imgUrl('logo-responsive.svg')} />
        <div className="inner">
          <ProjectTitle />
          {/* <PromoSection>
            <Button href="#try">Try It Out</Button>
            <Button href={docUrl('doc1.html', language)}>Example Link</Button>
            <Button href={docUrl('doc2.html', language)}>Example Link 2</Button>
          </PromoSection> */}
        </div>
      </SplashContainer>
    );
  }
}


const IntroSection = ({ language }) => (
  <div className="videoSection">
    <Container>
      <div style={{maxWidth: 600, margin: 'auto'}}>
        <div className="videoWrapper">
          <iframe
            width={560}
            height={315}
            src="https://www.youtube.com/embed/THu-25S90Qc"
            frameBorder={0}
            allowFullScreen
          />
        </div>
      </div>
    </Container>
  </div>
)

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer indexPage">
        <PopularTopicsSection language={language} />
        <IntroSection language={language} />
        </div>
      </div>
    );
  }
}

module.exports = Index;
