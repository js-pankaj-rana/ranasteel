import { Component } from 'angular2/core';
import { Navigation } from './nav/app.navigation';

@Component({
    selector: 'mainContent',
    template: `<section>
    				<div class="content"> 
    				<div class="center-content start-content"><span class="cursor-hand-icons"></span></div> 
    				<div class="menu-content in-circle top">
    				<span class="mid-content">Why<br/> You Choose</span></div>
    				<div class="menu-content in-circle left"><span class="mid-content">Check Product</span></div> <div class="menu-content in-circle right"><span class="mid-content">Search<br/> Our Branch</span></div> <div class="menu-content in-circle bottom"><span class="mid-content">Want to<br/>Check Color</span></div> <div class="menu-content in-circle bottom-extra"><span class="mid-content">Explore More</span></div></div></section><section class="bottom-content"><div class="people-thought">People thought about our product, know more...</div><div class="people-thoughts"><ul class="slider-wrapper"><li><div class="img-left"></div><q class="auth-content"><p class="authors-content">sdfhjkasd fka sdkfakjdsf</p><author>William James</author></q></li></ul></div></section>`,
})

export class Homepage {

	onInit(){
		alert("hello")	
	}

}