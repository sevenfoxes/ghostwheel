type Theme = {
  colors: {
    [color: string]: string;
  };
  fonts: {
    [font: string]: string;
  };
  [module:string]: any;
}

type Themes = {
  [t:{}]: Theme
}
