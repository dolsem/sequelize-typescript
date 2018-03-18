import {Options} from 'sequelize';

export interface ISequelizeDeprecatedOptions extends Options {

  /**
   * Name of database
   */
  database: string;

  /**
   * Username of database
   */
  username: string;

  /**
   * Password for database user
   */
  password: string;

  /**
   * Path to models, which should be loaded
   * @deprecated
   */
  modelPaths?: string[];

  /**
   * Makes it possible to use sequelize for validation only
   * if set to true. For this configuration it is always false.
   * See ISequelizeValidationOnlyConfig interface
   */
  validateOnly?: false;
}