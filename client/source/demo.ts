import { Component, Injectable } from "angular2/core";
import { ROUTER_DIRECTIVES } from "angular2/router";

@Component({
	selector: 'ov-demo',
	directives: [ROUTER_DIRECTIVES],
    template: `
        <div class="route-content">
            <h1>Demo</h1>
        </div>
    `
})
export class HomeComponent {    
    constructor() {
        
    }
}