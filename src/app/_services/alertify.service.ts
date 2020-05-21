import { Injectable } from '@angular/core';
declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {
  constructor() {}

  confirm(title: string, message: string, okCallback: () => any) {
    alertify.set('notifier', 'position', 'top-right');
    alertify.defaults.theme.ok = 'btn btn-warning';
    alertify.defaults.theme.cancel = 'btn btn-default';
    alertify
      .confirm(message, function(e) {
        if (e) {
          okCallback();
        } else {
        }
      })
      .setHeader(title);
  }

  alert(title: string, message: string, okCallback: () => any) {
    alertify.set('notifier', 'position', 'top-right');
    alertify.defaults.theme.ok = 'btn btn-warning';
    alertify
      .alert(message, function(e) {
        if (e) {
          okCallback();
        } else {
        }
      })
      .setHeader(title);
  }

  success(message: string) {
    alertify.set('notifier', 'position', 'top-right');
    alertify.set('notifier', 'delay', 3);
    alertify.success(message);
  }

  error(message: string) {
    alertify.set('notifier', 'position', 'top-right');
    alertify.set('notifier', 'delay', 3);

    alertify.error(message);
  }

  warning(message: string) {
    alertify.set('notifier', 'position', 'top-right');
    alertify.warning(message);
    alertify.set('notifier', 'delay', 3);
  }

  message(message: string) {
    alertify.set('notifier', 'position', 'top-right');
    alertify.message(message);
    alertify.set('notifier', 'delay', 3);
  }
}
