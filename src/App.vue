<template lang="pug">
#app
  .window-content
    .pane-group
      .pane-sm.sidebar
        h1.logo Mindy
        nav.nav-group
          router-link.nav-group-item(to="/main")
            span.icon.icon-home
            |  Inicio
          router-link.nav-group-item(to="/pos/")
            span.icon.icon-basket
            |  Punto de venta
          router-link.nav-group-item(to="/inventario/")
            span.icon.icon-box
            |  Inventario
          span.nav-group-item
            span.icon.icon-doc-text
            |  Reportes
          span.nav-group-item
            span.icon.icon-user
            |  Usuarios
          router-link.nav-group-item(to="config")
            span.icon.icon-cog
            |  Configuraci&oacute;n
          span.nav-group-item.pro(onclick="goTo('https://www.facebook.com/iosoft.in/');")
            |  Conoce mindy PRO
        .user-pane
          .profile
            img(src="http://wpshowdown.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png")
            a(href="#") jfdelarosa
          .user-menu
            a(href="#")
              span.icon.icon-cog
            a(onclick="logout();")
              span.icon.icon-forward
      .pane
        header.toolbar.toolbar-header
          //- .toolbar-actions
          //-   button.btn.btn-default.btn-dropdown.btn-outline
          //-     span.icon.icon-user
          //-     | jfdelarosa
          .header-buttons
            span#min-btn.icon.icon-record(style='color:#34c84a;')
            span#max-btn.icon.icon-record(style='color:#fdbc40;')
            span#close-btn.icon.icon-record(style='color:#fc605b;')
        router-view#content
</template>
<script>
export default {
  name: 'app',
}
</script>
<style lang="scss">
  @import "./sass/main";
</style>