export enum Eprop {
  'Private' = 'private',
  'Public' = 'public',
  'PrivateReadOnly' = 'privateReadOnly',
  'PublicReadOnly' = 'publicReadOnly',
}

export enum Eclass {
  'Class' = 'class',
  'Static' = 'static',
  'Abstract' = 'abstract',
}

export enum EInhert {
  'None' = 'none',
  'Implements' = 'implements',
  'Extend' = 'extend',
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

export type methodUml = functionUml & {
  accessibility: Eprop;
};

export type InhertUml = {
  type: EInhert;
  classOrInterface: string;
};

export type classUml = {
  type: Eclass;
  inhert: InhertUml;
  name: string;
  props: prop[];
  methods: methodUml[];
};

export type interfaceUml = {
  name: string;
  props: prop[];
  methods: interfaceMethodUml[];
};
