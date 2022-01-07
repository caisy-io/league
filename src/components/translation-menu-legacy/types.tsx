export interface ITranslationMenuLegacyLocale {
  id: string;
  name: string;
  default?: boolean;
  active?: boolean;
}

export interface ITranslationMenuLegacyState {
  locales: ITranslationMenuLegacyLocale[];
  expanded: boolean;
}

export interface ITranslationMenuLegacy {
  initialState: ITranslationMenuLegacyState;
  onChange: (state: ITranslationMenuLegacyState) => void;
}
