import { variable } from '../constants';

const initial = null;

const fun2 = function(state = initial, action) {
	switch (action.type === variable) {
		case variable:
			return state;
	}
	return state;
};

export default counter;
