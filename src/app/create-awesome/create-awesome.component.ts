import {Component, OnInit} from '@angular/core';
import {AwesomeService} from '../awesome.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IAwesome} from '../iawesome';
import {AwesomeComponent} from '../awesome/awesome.component';


@Component({
    selector: 'app-create-awesome',
    templateUrl: './create-awesome.component.html',
    styleUrls: ['./create-awesome.component.scss']
})
export class CreateAwesomeComponent implements OnInit {
    awesomeList: IAwesome[];
    createForm: FormGroup;

    constructor(private awesomeService: AwesomeService,
                private router: Router,
                private activeRoute: ActivatedRoute,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.createForm = this.formBuilder.group({
            tag: '',
            url: '',
            description: ''
        });
    }

    onSubmit() {
        const {value} = this.createForm;
        this.awesomeService.createAwesome(value).subscribe(
            data => {
                this.awesomeList.unshift(data);
                this.createForm.reset({
                    tag: '',
                    url: '',
                    descriptions: ''
                });
                this.router.navigate(['/awesome']);
            }
        );
    }

}
