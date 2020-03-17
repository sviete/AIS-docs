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
            <b><a href={docUrl('ais_app_radio', language)}>Integracje</a>.</b>
            {' '}Opis jakie serwisy dostarczamy skonfigurowane na urządzeniu oraz jak dodać integracje dodatkowe.
          </p>
          <p>
            <b><a href={docUrl('ais_iot_works_with', language)}>Urządzenia</a>.</b>
            {' '}Opis jak podłączyć dodatkowe urządzenia do systemu (czujniki, przełączniki, odtwarzacze, kamery i inne).
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2>Popularne tematy</h2>
          <ul style={{ flex: "1" }}>
          <li><a href={docUrl("ais_remote_index", language)}>
              Jak działa pilot
            </a></li>
            <li><a href={docUrl("ais_app_assistent_commands", language)}>
                Komendy, które rozumie Asystent
              </a></li>
            <li><a href={docUrl("ais_bramka_remote_www_index", language)}>
                Dostęp do bramki z Internetu
                </a></li>
            <li><a href={docUrl("ais_app_android_dom", language)}>
                Aplikacja mobilna
            </a></li>
            <li><a href={docUrl("ais_iot_firmware_index", language)}>
              Oprogramowanie dla urządzeń automatyki domowej
            </a></li>
            <li><a href={docUrl("ais_iot_gate_add_device", language)}>
              Dodanie urządzenia do bramki
            </a></li>
          </ul>
          <h2>Przydatne linki</h2>
          <ul>
          <li><a href="https://www.ais-dom.pl">
              Oficjalny sklep projektu
            </a></li>
            <li><a href="https://www.ai-speaker.com/dom">
              Prezentacja systemu
            </a></li>
            <li><a href="https://github.com/sviete">
              Kody źródłowe składowych systemu
            </a></li>
            <li><a href="https://play.google.com/store/apps/details?id=pl.sviete.dom">
              Aplikacja mobilna w Google Play
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
  <blockquote style={{backgroundColor: '#03f30a', color: '#000', border: '8px solid green'}}>
      <h1><strong>!!! UWAGA NOWA DOKUMENTACJA !!!</strong> <br />
      dostępna jest na naszej stronie <br />
      pod adresem: <a style={{color: '#000', textDecoration: 'underline'}} href="http://www.ai-speaker.com"> WWW.AI-SPEAKER.COM</a>
      </h1>
  </blockquote>
    <h2 className="projectTitle">
      Asystent domowy
      <small><a href="https://www.ai-speaker.com">Przejście do nowej dokuemntacji</a></small>
    </h2>
    <div>

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
            src="https://www.youtube.com/embed/V7Wjy1jU5y8"
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
