import { Request } from 'express';

type Dict = Record<string, unknown>;
type ReqSpec = {
  params?: Record<string, string>;
  query?: Dict;
  body?: unknown;
  resBody?: unknown;
  locals?: Dict;
};

export type TypedRequest<T extends ReqSpec> = Request<
  T['params'] extends undefined ? Record<string, never> : T['params'],
  T['resBody'] extends undefined ? unknown : T['resBody'],
  T['body'] extends undefined ? unknown : T['body'],
  T['query'] extends undefined ? Dict : T['query'],
  NonNullable<T['locals']> extends Dict ? NonNullable<T['locals']> : Dict
>;
