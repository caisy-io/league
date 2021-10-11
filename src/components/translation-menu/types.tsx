export interface ITranslationMenuLocale {
  id: string;
  name: string;
  default?: boolean;
  active?: boolean;
}

export interface ITranslationMenuState {
  locales: ITranslationMenuLocale[];
  expanded: boolean;
}

export interface ITranslationMenu {
  initialState: ITranslationMenuState;
  onChange: (state: ITranslationMenuState) => void;
}
