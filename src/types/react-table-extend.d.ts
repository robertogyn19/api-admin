import {
  UseSortByInstanceProps,
  UseSortByOptions,
  UseSortByState,
  HeaderGroup,
} from 'react-table'

declare module 'react-table' {
  export interface TableOptions<D extends object>
    extends UseSortByOptions<D> {}

  export interface TableInstance<D extends object = {}>
    extends UseSortByInstanceProps<D> {}

  export interface TableState<D extends object = {}>
    extends UseSortByState<D> {}


}
