export enum Eprop {
  'Private' = 'private',
  'Public' = 'public',
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
export type prop = { name: string; accessibility: Eprop; type: string };

type argUml = string;

export type functionUml = {name:string,arg:argUml,returnTs,text:string};

export type method = functionUml &  {
  // name: string;
  // type: Emethod;
  accessibility: Eprop;
  // arg: argUml;
  // returnTs: string;
  // text: string;
};

export type classUml = {
  type: Eclass;
  name: string;
  props: prop[];
  methods: method[];
};

export type interfaceUml = classUml;

