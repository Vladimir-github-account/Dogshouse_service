import { POSITIVE_INTEGERS_PATTERN } from '../constants';

export function validateIntegerValues(weight, tailLength) {
	return weight.toString().match(POSITIVE_INTEGERS_PATTERN) && tailLength.toString().match(POSITIVE_INTEGERS_PATTERN);
}
