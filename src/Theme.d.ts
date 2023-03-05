type Theme = {
  colors: {};
  fonts: {};
  variables: {
    site: {
      maxWidth: number;
    };
  }
}

type Themes = {
  [t:{}]: Theme
}
