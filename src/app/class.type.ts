export enum Eprop {
  'Private' = 'private',
  'Public' = 'public',
  'PrivateReadOnly' = 'privateReadOnly',
  'PublicReadOnly' = 'publicReadOnly',
}

export enum Eclass {
  'Regular' = 'regular',
  'Static' = 'static',
  'Abstract' = 'abstract',
}

export enum Emethod {
  'Regular' = 'regular',
  'Static' = 'static',
  'Abstract' = 'abstract',
}
export type prop = {
  name: string;
  accessibility: Eprop;
  type: string;
};

type argUml = string;

export type interfaceMethodUml = {
  name: string;
  arg: argUml;
  returnTs: string;
};

export type functionUml = interfaceMethodUml & {
  text: string;
};

export type method = functionUml & {
  accessibility: Eprop;
};

export type classUml = {
  type: Eclass;
  name: string;
  props: prop[];
  methods: method[];
};

export type interfaceUml = classUml;
