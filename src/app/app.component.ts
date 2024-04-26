import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EPIC Network'
  links = [
    { label: 'Mission & Values', url: '/mission' },
    { label: 'About', url: '/about' },
    { label: 'Contact Us', url: '/contact' },
    { label: 'Listserv', url: '/listserv' }
  ]

  showMobileNav: boolean = false

  public xs: boolean = window.innerWidth < 600
  public sm: boolean = window.innerWidth >= 600 && window.innerWidth <= 959
  public md: boolean = window.innerWidth >= 960 && window.innerWidth <= 1279
  public lg: boolean = window.innerWidth >= 1280 && window.innerWidth <= 1919
  public xl: boolean = window.innerWidth >= 1920 && window.innerWidth <= 5000

  public lt_sm: boolean = window.innerWidth <= 599
  public lt_md: boolean = window.innerWidth <= 959
  public lt_lg: boolean = window.innerWidth <= 1279
  public lt_xl: boolean = window.innerWidth <= 1919

  public gt_xs: boolean = window.innerWidth >= 600
  public gt_sm: boolean = window.innerWidth >= 960
  public gt_md: boolean = window.innerWidth >= 1280
  public gt_lg: boolean = window.innerWidth >= 1920


  constructor() {
    this.checkScreenSize();  // Initial check to set screen size
  }

  @HostListener('window:resize')
  onResize() {
    
    this.checkScreenSize();

    // If mobile nav is out, then browser is resized > medium, hide mobile nav
    if(this.gt_sm){
      this.showMobileNav = false
    }
  }

  private checkScreenSize() {

    this.xs = window.innerWidth < 600
    this.sm = window.innerWidth >= 600 && window.innerWidth <= 959
    this.md = window.innerWidth >= 960 && window.innerWidth <= 1279
    this.lg = window.innerWidth >= 1280 && window.innerWidth <= 1919
    this.xl = window.innerWidth >= 1920 && window.innerWidth <= 5000

    this.lt_sm = window.innerWidth <= 599
    this.lt_md = window.innerWidth <= 959
    this.lt_lg = window.innerWidth <= 1279
    this.lt_xl = window.innerWidth <= 1919

    this.gt_xs = window.innerWidth >= 600
    this.gt_sm = window.innerWidth >= 960
    this.gt_md = window.innerWidth >= 1280
    this.gt_lg = window.innerWidth >= 1920

  }

  public toggleMobileNav() {
    this.showMobileNav = !this.showMobileNav
    console.log("showMobileNav:" + this.showMobileNav)
  }  

}
