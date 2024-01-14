import React from "react";
import * as Localization from 'expo-localization';
import i18n, { TranslateOptions } from 'i18n-js';
import English from '@/locale/en';
import French from '@/locale/fr';

i18n.translations = {
  en: English,
  fr: French,
}

export interface AcceptedLanguages {
  en: 'English';
  fr: 'French';
}

export interface LocalizationState {
  localizationLoading: boolean;
  currentLocale: string;
  checkLocale: () => void;
  setLanguage: (val: keyof AcceptedLanguages) => Promise<void>;
  getTranslation: (val: keyof (typeof English), options?: TranslateOptions) => string;
}

interface Props {
  
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
    // When a value is missing from a language it'll fallback to another language with the key present.
    i18n.fallbacks = true;
    // Default locale will be english
    i18n.defaultLocale = 'en';

    // Fetch locals from either API/local storage/persisted source
    // Eg: const appLocale = await AsyncStorage.getItem('appLocale');
    const appLocale = 'en';

    // Set the locale once at the beginning of your app.
    i18n.locale = appLocale ? appLocale : Localization.locale;
    this.setState({ currentLocale: appLocale ? appLocale : Localization.locale });
  }

  // --------------------------------------------------------------------------
  // Lifecycle Methods
  // --------------------------------------------------------------------------
  componentDidMount() {
    //
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
      {state => <Component {...props} localization={state} />}
    </LocalizationConsumer>
);

export const useLocalization = () => {
  const context = React.useContext(LocalizationContext);
  if(!context) {
    throw new Error('useLocalization is required to be used within Localization Provider.');
  }
  return context;
}

