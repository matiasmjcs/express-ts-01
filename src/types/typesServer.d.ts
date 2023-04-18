export interface dataGet1 {
  msg: string
  data: Array<string | number>
  send?: boolean
}

export interface dataGet2 extends dataGet1 {
  success: string
}

export type dataGet3 = Pick<dataGet1, 'data' | 'msg'>
export type dataGet4 = Omit<dataGet1, 'data'>
