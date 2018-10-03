/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary');
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const CWD = process.cwd();

const siteConfig = require(CWD + '/siteConfig.js');
const versions = require(CWD + '/versions.json');

const versionUrl = (language, version) => `${siteConfig.baseUrl}docs/${language}/${version}/architecture_index.html`

class Versions extends React.Component {
  render() {
    const latestVersion = versions[0];
    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer versionsContainer">
          <div className="post">
            <header className="postHeader">
              <h2>{siteConfig.title + ' - wersje'}</h2>
            </header>
            <p>Nowe wersje dokumentacji są wydawane z każdym dużym wydaniem systemu.</p>
            <h3 id="latest">Bieżąca wersja (aktualnie obowiązująca i wspierana)</h3>
            <table className="versions">
              <tbody>
                <tr>
                  <th>{latestVersion}</th>
                  <td>
                    <a href={`${siteConfig.baseUrl}${this.props.language}/`}>Dokumentacja</a>
                  </td>
                </tr>
              </tbody>
            </table>

            <h3 id="archive">Wcześniejsze wersje</h3>
            <table className="versions">
              <tbody>
                {versions.map(
                  version =>
                    version !== latestVersion && (
                      <tr key={version}>
                        <th>{version}</th>
                        <td>
                          <a href={versionUrl(this.props.language, version)}>Dokumentacja</a>
                        </td>
                      </tr>
                    )
                )}
              </tbody>
            </table>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Versions;
