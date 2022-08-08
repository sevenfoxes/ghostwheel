declare type Get<T> = {
  params?: {
    [k: string]: string;
  };
  headers?: {
    [k: string]: string;
  }
  serviceId?: string;
}


declare type Ambyr<T> = {
  url: string;
  data: T;
  lastRetrieved: Date;
  request?: T;
};
