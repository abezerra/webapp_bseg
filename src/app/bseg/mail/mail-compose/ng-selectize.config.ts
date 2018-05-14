import {DEFAULT_DROPDOWN_CONFIG} from './ng-selectize.default_config';

export const CURRENT_OPTIONS_CONFIG = Object.assign({}, DEFAULT_DROPDOWN_CONFIG, {
  create: true,
  labelField: 'name',
  valueField: 'email',
  searchField: ['name', 'email'],
  maxItems: 100
});
