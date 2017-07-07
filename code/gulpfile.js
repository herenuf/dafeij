
var obj = {
	removeComments: true, //清除HTML注释
	collapseWhitespace: true, //压缩HTML
	collapseBooleanAttributes: true,//省略布尔属性的值<input checked="true"/> ==> <input checked/>
	removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
	removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
	removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
	minifyJS: true, //压缩页面JS 
	minifyCSS: true //压缩页面CSS 
}

var gulp = require("gulp");  //gulp对象
var uglify = require("gulp-uglify"); //导入插件
var babel = require('gulp-babel');
//gulp.task("htmlTask", function(){
//	gulp.src("03_rand.html")
//	.pipe(htmlmin(obj)) //使用插件
//	.pipe(gulp.dest("dest/html"));
//});
//gulp.task("default", ["htmlTask"]);

//gulp.task('jsTask', function(){
//	gulp.src('js/*.js')
//	
////	.pipe(bom()) 
//	.pipe(babel({presets:['es2015']}))
//	.pipe(uglify())
//	.pipe(gulp.dest('dest/js'));
//	
//});
//gulp.task("default", ["jsTask"]);

////压缩css
var minifyCss = require('gulp-minify-css');
gulp.task('cssTask', function(){
	gulp.src('css/*.css')
	.pipe(minifyCss())
//	.pipe(babel({presets:['es2015']}))
	.pipe(gulp.dest('dest/css'));
});
gulp.task("default", ["cssTask"]);





