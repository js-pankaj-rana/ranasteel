import {Component} from 'angular2/core';

@Component({
    selector: 'bottom',
    template: `<section class="bottom-content">
					<div class="people-thought" (click)="showUserQuotes($event)">People thought about our product, know more...</div>
					<div class="people-thoughts">
						<ul class="slider-wrapper">
							<li><div class="img-left"></div>
								<q class="auth-content"><p class="authors-content">sdfhjkasd fka sdkfakjdsf</p><author>William James</author></q>
							</li>
						</ul>
					</div>
				</section>		
			`
})

export class Bottomsection {
	showUserQuotes(event){
		console.log(event);
		 alert("I was click");

	}

}
