export enum Eprop {
  'private' = 'private',
  'public' = 'public',
}

export type prop = { name: string; accessibility: Eprop; ts: string };

export type method = {
  name: string;
  accessibility: Eprop;
  arg: string;
  returnTs: string;
  text: string;
};

export type classUml = {
  name: string;
  props: prop[];
  methods: method[];
};
