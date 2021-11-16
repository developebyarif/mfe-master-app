import React from 'react';

class MicroFrontend extends React.Component {
  componentDidMount() {
    const { name, host, document } = this.props;
    const scriptId = `micro-frontend-script-${name}`;

    if (document.getElementById(scriptId)) {
      this.renderMicroFrontend();
      return;
    }

    console.log('\n ENV :', process.env.NODE_ENV);

    fetch(`${host}/asset-manifest.json`)
      .then(res => res.json())
      .then(manifest => {


        if (process.env.NODE_ENV == "development") {
          const script = document.createElement('script');
          
          script.id = scriptId;
          script.crossOrigin = '';
          script.src = `${host}${manifest['files']['main.js']}`;
          
          script.onload = this.renderMicroFrontend;
          document.head.appendChild(script);
          
        } else {
          const script = document.createElement('script');
          const link = document.createElement('link');
          script.id = scriptId;
          script.crossOrigin = '';
          // script.src = `${host}${manifest['files']['main.js']}`;
          script.src = `${manifest['files']['main.js']}`;
          link.href = `${manifest['files']['main.css']}`;
          script.onload = this.renderMicroFrontend;
          document.head.appendChild(script);
          document.head.appendChild(link);
        }


      });
  }

  componentWillUnmount() {
    const { name, window } = this.props;

    window[`unmount${name}`] && window[`unmount${name}`](`${name}-container`);
  }

  renderMicroFrontend = () => {
    const { name, window, history } = this.props;

    window[`render${name}`] && window[`render${name}`](`${name}-container`, history);
  };

  render() {
    return <main id={`${this.props.name}-container`} />;
  }
}

MicroFrontend.defaultProps = {
  document,
  window,
};

export default MicroFrontend;