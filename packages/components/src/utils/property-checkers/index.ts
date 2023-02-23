/*
 * Copyright 2023 by Swiss Post, Information Technology
 */

import { checkEmptyOr } from './check-empty-or';
import { checkOneOf } from './check-one-of';
import { checkType } from './check-type';

export const checkEmptyOrOneOf = checkEmptyOr(checkOneOf);
export const checkEmptyOrType = checkEmptyOr(checkType);

export * from './check-one-of';
export * from './check-type';

