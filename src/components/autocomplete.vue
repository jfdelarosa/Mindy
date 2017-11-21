<template lang="pug">
	ul.list-group
    li.list-group-header
      input.form-control(type="text" placeholder="Search for someone")
    li.list-group-item
      img.img-circle.media-object.pull-left(src="http://photonkit.com/assets/img/avatar.jpg" width="32" height="32")
      .media-body
        strong List item title
        p Lorem ipsum dolor sit amet.
    li.list-group-item
      img.img-circle.media-object.pull-left(src="http://photonkit.com/assets/img/avatar.jpg" width="32" height="32")
      .media-body
        strong List item title
        p Lorem ipsum dolor sit amet.
</template>
<script>
	export default {
		template: 'template'
	}
</script>