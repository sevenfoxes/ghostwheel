type Theme = {
  colors: {};
  fonts: {};
  [module:string]: {};
  variables: {
    site: {
      maxWidth: number;
    };
  }
}

type Themes = {
  [t:{}]: Theme
}
