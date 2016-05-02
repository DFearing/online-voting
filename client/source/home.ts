import { Component, Injectable } from "angular2/core";
import { ROUTER_DIRECTIVES } from "angular2/router";

@Component({
	selector: 'ov-home',
	directives: [ROUTER_DIRECTIVES],
    template: `
        <div class="starter-template">
            <h1>Online Voting</h1>
            <p class="lead">We are 16 years into the 21st Century yet we are still voting using 20th Century technology.</p>
        </div>
    `
})
export class HomeComponent {    
    constructor() {
        
    }
}