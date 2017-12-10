import {Component} from 'angular2/core';

@Component({
    selector: 'topNav',
    template: `<div class="top-navigation">
    		<nav class="nav"><a href="http://www.ranasteelco.com" class="site-logo">ranasteelco</a> 
			<div class="over-content"><em class="nav-top-content">Operating Since: <strong class="white fnt-smbd">1986</strong></em> <em class="nav-top-content">Number of Customers: <strong class="white fnt-smbd">1000+</strong></em></div></nav>
			<div class="right-content"><a href="" class="join-us">Join Us</a> <!--<a href="" class="cart-item">Cart</a>--></div>
			<div class="clearfix"></div> 
			`
})

export class Navigation {}
