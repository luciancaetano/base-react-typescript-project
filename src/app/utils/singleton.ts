import { TFunction } from 'i18next';

/**
 * Store here global settings configurations eg jwt token for use in cases when redux does not cover app
 */
export class AppSingleton {
  private static instance: AppSingleton;

  static getInstance(): AppSingleton {
    if (!AppSingleton.instance) {
      AppSingleton.instance = new AppSingleton();
    }

    return AppSingleton.instance;
  }

  // Private vars
  private translator: TFunction | null = null;

  private pushRouteFn: ((path: string) => void) | null = null;

  // Public functions

  /** Stores i18next translator function */
  public setTranslator = (translator: TFunction) => {
    this.translator = translator;
    return this;
  };

  /** get i18next translator function */
  public getI18nInstance = () => this.translator;

  public setPushRouteFn = (pushRouteFn: ((path: string) => void) | null) => {
    this.pushRouteFn = pushRouteFn;
  };

  /**
   * Push router
   * Warning prefer os useHistory hook this methos is used only in router middleware
   */
  public pushRoute = (path: string) => {
    if (this.pushRouteFn) {
      this.pushRouteFn(path);
    }
    return this;
  };
}
