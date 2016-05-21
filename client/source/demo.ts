/// <reference path="./jsencrypt.d.ts"/>

import { Component, Injectable } from "angular2/core";
import { ROUTER_DIRECTIVES } from "angular2/router";
import { default } from "JSEncrypt"

@Component({
	selector: 'ov-demo',
	directives: [ROUTER_DIRECTIVES],
    template: `
        <div class="route-content">
            <h1>Demo</h1>
            <div class="row">
                <div class="col-md-8">.col-md-8</div>
                <div class="col-md-4">.col-md-4</div>
            </div>
        </div>
    `
})
export class DemoComponent {    
    constructor() {
        var encrypt = new JSEncrypt();
    }
}