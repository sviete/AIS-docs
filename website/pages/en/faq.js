const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock;
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function faq(props) {
    return (

<GridBlock
  align="center"
  layout="threeColumn"
  className="myCustomClass"
  contents={[
    {
      title: `[Learn](/tutorial.html)`,
      content: 'Learn how to use this project',
      image: siteConfig.baseUrl + 'img/learn.png',
      imageAlt: 'Learn how to use this project',
      imageLink: siteConfig.baseUrl + 'docs/tutorial.html',
    },
    {
      title: 'Frequently Asked Questions',
      content: 'Questions gathered from the community',
      image: siteConfig.baseUrl + 'img/faq.png',
      imageAlign: 'top',
    },
    {
      title: 'More',
      content: 'Lots of documentation is on this site',
    },
  ]}
/>
);
}

module.exports = faq;