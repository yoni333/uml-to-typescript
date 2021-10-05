import { classUml, interfaceUml } from './class.type';

export type DataTree = {
  data: {
    classes: classUml[];
    interfaces: interfaceUml[];
  };
};
