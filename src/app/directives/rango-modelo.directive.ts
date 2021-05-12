import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appRangoModelo]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: RangoModeloDirective,
      multi: true
      }
    ]
})
export class RangoModeloDirective implements Validator{

  @Input('appRangoModelo') rangoModelo: string

  constructor() { }

  validate(control: AbstractControl): {[key:string]: any} {
    return this.rangoModelo ? this.rangoValidator(new RegExp(this.rangoModelo, "i"))(control): null;
  }

  rangoValidator(nameRe: RegExp): ValidatorFn {
    return (control:AbstractControl) : {[key:string]: any} | null =>{
      const rango = nameRe.test(control.value);
      return rango ? {'rangoModelo' : {value: control.value}} : null
    }
  }

}
