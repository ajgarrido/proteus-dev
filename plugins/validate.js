//Importing dictionaries for vee-validate
//import en from 'vee-validate/dist/locale/en';
//import fr from 'vee-validate/dist/locale/fr';
import es from 'vee-validate/dist/locale/es';
import VeeValidate, {Validator} from 'vee-validate';

export default function ({app}) {
  //Loading languages for Vee
  Validator.localize('es', es);
  //Validator.localize('fr', fr);

  //Localizing the app when user refresh or access a localized link
  //Validator.localize((app.i18n.loadedLanguages[0]));

  //Called everytime language change
  /*app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
    Validator.localize(newLocale);
  }*/
}

/*import { extend } from "vee-validate";

extend("my-validation", {
  message: "This {_field_} is invalid.",
  validate: value => {
    // ...
    return true;
  }
});*/