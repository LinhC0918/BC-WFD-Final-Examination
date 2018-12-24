import {Component, OnInit} from '@angular/core';
import {AwesomeService} from '../awesome.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IAwesome} from '../iawesome';

@Component({
    selector: 'app-edit-awesome',
    templateUrl: './edit-awesome.component.html',
    styleUrls: ['./edit-awesome.component.scss']
})
export class EditAwesomeComponent implements OnInit {
    awesome: IAwesome;
    editForm: FormGroup;

    constructor(private awesomeService: AwesomeService,
                private router: Router,
                private activeRoute: ActivatedRoute,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.editForm = this.formBuilder.group({
            tag: '',
            url: '',
            descriptions: ''
        });
        const id = +this.activeRoute.snapshot.paramMap.get('id');
        this.awesomeService.getAwesomeById(id).subscribe(
            data => {
                this.awesome = data;
                this.editForm.patchValue(this.awesome);
            });
    }

    onSubmit() {
        const {value} = this.editForm;
        const data = {...this.awesome, ...value};
        this.awesomeService.editAwesome(data).subscribe(
            next => {
                this.router.navigate(['/awesome']);
            }
        );
    }


}
