
$.widget.bridge('uibutton', $.ui.button);

// receive calls from typescript code to update the layouts
var AdminLTE = (function () {
  return {
    init() {
      $(() => {
        $.AdminLTE.layout.activate();
        $.AdminLTE.layout.fix();
        $.AdminLTE.layout.fixSidebar();
      });
    },
  };
}(AdminLTE || {}));
