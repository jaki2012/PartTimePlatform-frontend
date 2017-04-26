var ctx = "http://www.lagou.com";
tinymce.init({
  selector: 'textarea',
  skin: 'lightgray',
  height: 300,
  menubar: false,
  statusbar: false,
  plugins: 'code',
  toolbar: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | code| link image',
  content_css: '//www.tinymce.com/css/codepen.min.css'
});