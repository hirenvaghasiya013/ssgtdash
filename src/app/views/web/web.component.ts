import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {

  removeClass: any;

  constructor() { }

  ngOnInit() {

      $('.dropdown-toggle').click(function () {
          $(this).toggleClass('open');
      });
      $('.btn-close').click(function () {
          $('.dropdown-toggle').toggleClass('open');
      });
      $(document).click(function (e) {
          const target = e.target;
          if (!$(target).is('.more_menu') && !$(target).parents().is('.more_menu')) {
              $('.dropdown-toggle').removeClass('open');
          }
      });

  }

}
