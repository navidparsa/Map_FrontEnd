import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
    templateUrl: './register.component.html',
})
export class RegisterComponent {
    form;
    constructor(private auth: AuthService, private fb: FormBuilder) {
        this.form = fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

}


