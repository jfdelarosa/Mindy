<template lang="pug">
.window-content#login
  header.toolbar.toolbar-header
    .header-buttons
      span#min-btn.icon.icon-record(style='color:#34c84a;')
      span#max-btn.icon.icon-record(style='color:#fdbc40;')
      span#close-btn.icon.icon-record(style='color:#fc605b;')
  form(method="POST" action="users")
    .alert.alert-warning
    .form-group
      label Correo electrónico:
      input.form-control(type='email' name="email" placeholder='correo@dominio.com')
    .form-group
      label Contraseña:
      input.form-control(type='password' name="password" placeholder='Contraseña')
    .form-actions
      button.btn.btn-block.btn-large.btn-positive(type='submit')
        span(class="icon icon-home")
        | Entrar
    a(href="#") Recuperar contraseña
</template>