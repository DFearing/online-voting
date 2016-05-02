/// <reference path="../node_modules/angular2/ts/typings/node/node.d.ts"/> 
/// <reference path="../node_modules/angular2/typings/browser.d.ts"/> 
/// <reference path="../node_modules/rxjs/Rx.d.ts"/> 
/// <reference path="../node_modules/reflect-metadata/reflect-metadata.d.ts"/>

import { bootstrap } from "angular2/platform/browser";
import { Component, Injectable, provide } from "angular2/core";
import { NgForm } from "angular2/common";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, ROUTER_BINDINGS, } from 'angular2/router';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from "angular2/platform/common";
import { Http, Headers, RequestOptions, Response, HTTP_PROVIDERS } from "angular2/http";
import { Observable } from "rxjs/Rx";
import { HomeComponent } from "./home";

@Component({
    selector: "online-voting",
    directives: [ROUTER_DIRECTIVES],
    template: `
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Online Voting</a>
            </div>
            <div id="navbar" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                <li><a [routerLink]="['Technology']">Technology</a></li>
                <li><a [routerLink]="['Demo']">Demo</a></li>
                </ul>
            </div>
            </div>
        </nav>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `
})
@RouteConfig([
    { path: "/", name: "Home", component: HomeComponent, useAsDefault: true },
    { path: "/technology", name: "Technology", component: HomeComponent },
    { path: "/demo", name: "Demo", component: HomeComponent },
])
class OnlineVotingApp {
    constructor() {

    }
}

bootstrap(OnlineVotingApp, [ 
        HTTP_PROVIDERS, ROUTER_PROVIDERS,
        provide(APP_BASE_HREF, { useValue: "/" })
    ]);