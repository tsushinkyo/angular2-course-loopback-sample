import { FormControl } from '@angular/forms';

export function testValidator (input: FormControl) {
    //value length > 8
    if(input.value.length <= 8) return {"testvalidator": "length"};
    
    if(/\d/.test(input.value)) return {"testvalidator": "missing_number"}
}