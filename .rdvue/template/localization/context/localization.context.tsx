import React from "react";
import * as Localization from 'expo-localization';
import{ I18n, TranslateOptions } from 'i18n-js';
import English from '../locale/en';
import French from '../locale/fr';

const i18n = new I18n({
  en: English,
  fr: French,
});

export interface AcceptedLanguages {
  en: 'English';
  fr: 'French';
}

export interface LocalizationState {
  localizationLoading: boolean;
  currentLocale: string;

  /**
   * @description This method will check the locale of the device and set the locale of the app
   * @returns {Promise<void>}
   * @memberof LocalizationState
   */
  checkLocale: () => void;

  /**
   * @description This method will set the locale of the app
   * @param {keyof AcceptedLanguages} val
   * @returns {Promise<void>}
   * @memberof LocalizationState
   * @example
   * localization.setLanguage('en');
   * localization.setLanguage('fr');
   */
  setLanguage: (val: keyof AcceptedLanguages) => Promise<void>;

  /**
   * @description This method will return the translation of the key passed
   * @param {keyof (typeof English)} val
   * @param {TranslateOptions} [options]
   * @returns {string}
   * @memberof LocalizationState
   * @example
   * localization.getTranslation('welcome');
   * localization.getTranslation('welcome', { name: 'John' });
   */
  getTranslation: (val: keyof (typeof English), options?: TranslateOptions) => string;
}

export interface withLocalizationProps {
  LocalizationContext: LocalizationState;
}

interface Props {
  children: React.ReactNode;
}

export const LocalizationContext = React.createContext({} as LocalizationState);

export class LocalizationContextProvider extends React.Component<Props, LocalizationState> {
  // --------------------------------------------------------------------------
  // Constructor
  // --------------------------------------------------------------------------
  constructor(props: Props) {
    super(props);

    this.state = {
      localizationLoading: false,
      currentLocale: '',
      setLanguage: this.onSetLanguage,
      getTranslation: this.onGetTranslation,
      checkLocale: this.onCheckLocale,
    }
  }

  // --------------------------------------------------------------------------
  // Methods
  // --------------------------------------------------------------------------
  onSetLanguage = async (val: keyof AcceptedLanguages) => {
    this.setState({ localizationLoading: true });

    i18n.locale = val;
    this.setState({ currentLocale: val });

    this.setState({ localizationLoading: false });
  }

  onGetTranslation = (val: keyof (typeof English), options?: TranslateOptions) => {
    return i18n.t(val, options);
  }


  onCheckLocale = async () => {
    // Default locale will be english
    i18n.defaultLocale = 'en';

    // Fetch locals from either API/local storage/persisted source
    // Eg: const appLocale = await AsyncStorage.getItem('appLocale');
    // Eg: using device's installed locales
    // const appLocale = await Localization.getLocales()
    //   .filter(locale => locale && i18n.translations.hasOwnProperty(locale.languageCode))[0].languageCode ?? 'en';
    const appLocale = 'en';
    
    // Set the locale once at the beginning of your app.
    i18n.locale = appLocale ? appLocale : Localization.locale;
    this.setState({ currentLocale: appLocale ? appLocale : Localization.locale });
  }

  // --------------------------------------------------------------------------
  // Lifecycle Methods
  // --------------------------------------------------------------------------
  async componentDidMount() {
    await this.onCheckLocale()
  }

  render() {
    return (
      <LocalizationContext.Provider value={this.state}>
        {this.props.children}
      </LocalizationContext.Provider>
    );
  }
};

export const LocalizationConsumer = LocalizationContext.Consumer;

export const withLocalization = (Component: any) => (props: any) => (
    <LocalizationConsumer>
      {state => <Component {...props} LocalizationContext={state} />}
    </LocalizationConsumer>
);

export const useLocalization = () => {
  const context = React.useContext(LocalizationContext);
  if(!context) {
    throw new Error('useLocalization is required to be used within Localization Provider.');
  }
  return context;
}

