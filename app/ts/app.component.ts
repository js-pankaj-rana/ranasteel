import {Component, ViewChild, ElementRef, AfterViewInit} from 'angular2/core';
import {Navigation} from './nav/app.navigation';
import {Bottomsection} from './bottom/app.bottomContent';
import {Homepage} from './body/app.home';
import * as $ from './jquery/jquery';

@Component({
    selector: 'my-app',
    template: `<article class="layer-1">
    				<topNav></topNav>
    				<mainContent></mainContent>
    				<bottom></bottom>
    			</article>`,
    directives: [Navigation, Homepage, Bottomsection]
})

export class AppComponent {

	ngOnInit(){

		drawCircle()
			
	}
	drawCircle(){
		
		console.log(x)
	}
}
