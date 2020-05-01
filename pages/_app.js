import App from 'next/app';

import moment from 'moment';

import ptBr from 'moment/locale/pt-br';

moment.locale('pt-br', ptBr);
moment.updateLocale('pt-br', {
  weekdaysShort: 'D_S_T_Q_Q_S_S'.split('_'),
  weekdaysMin: 'D_S_T_Q_Q_S_S'.split('_'),
});

import GlobalStyle from "~/styles/Global";
import LibsStyle from "~/styles/Libraries";
import GlobalFonts from "~/styles/Fonts";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <GlobalStyle />
        <LibsStyle />
        <GlobalFonts />

        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
