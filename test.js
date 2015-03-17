//第一种复制方式：
copy: {
	dist_html: {
		src: '<%= config.app %>/index.html',
		dest: '<%= config.server %>/index.html'
	},
	dest_js: {
		src: '<%= config.app %>/index.js',
		dest: '<%= config.server %>/index.js'
	}
}


//第二种复制方式;
copy:{
	dist_html:{
		files:[
			{
				src: '<%= config.app %>/index.html',
				dest: '<%= config.server %>/index.html'
			},
			{
				src: '<%= config.app %>/second.html',
				dest: '<%= config.server %>/second.html'
			}
		]
	},
	dist_js:{
		files:[
			{
				expand: true,
				cwd: '<%= config.app %>/', // cwd表示源目录，注意最后有个斜杠；
				src: '*.html',
				dest: '<%= config.server %>/',
				ext: '.min.js', // ext表示目标文件是否需要改后缀名
				extDot: 'first' // extDot表示从哪里开始改后缀名，first表示从第一个点(.)后面的那些修改,也有last作为参数；
				// flatten: false,
				// rename: function () {}
			},
			{
				src: '<%= config.app %>/second.js',
				dest: '<%= config.server %>/second.js'
			}
		]
	}
}

//第三种复制方式;
copy: {
	dist:{
		files: {

			//key是目标地址，value是源地址
			'<%= config.server %>/index.html' : '<%= config.app %>/index.html',
			'<%= config.server %>/index.js' : '<%= config.app %>/index.js'
		}
	}
}


//clean方式，由于是只读文件，所以没有dist
clean: {
	dist: {
		src: ['<%= config.server %>/html/index.html'],
		src: ['<%= config.server %>**/*'], // *表示匹配任意字符，但是不匹配反斜杠； 
										   // ? 表示只匹配一个字符，但是不匹配反斜杠；
										   // ** 表示任意数量的任意字符，包括反斜杠。
	}
}

//使用filter对删除的东西进行过滤

clean: {
	dist: {
		src: ['<%= config.server %>**/*'],
		filter: 'isFile' // 这个filter可以只是删除文件，不删除文件夹
		filter: function(filepath){
			return (!grunt.file.isDir(filepath)); //如果这个函数返回true，则删除，false就不删除，很明显这里是判断是否是文件；
		},
		dot: true, // 这里表示只会命中以”.“开头的文件；
		expand:true, // 表示要处理动态的src到dest的文件映射；
	}
}