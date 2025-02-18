import type { GeneralAppError as TGeneralAppError } from '@/types';

import { GeneralAppError } from './GeneralAppError';

export class UnhandledPromiseRejectionError extends GeneralAppError {
  constructor(props: TGeneralAppError) {
    props.name = 'UnhandledPromiseRejectionError';
    super(props);
  }
}
