//��һ�ָ��Ʒ�ʽ��
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


//�ڶ��ָ��Ʒ�ʽ;
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
				cwd: '<%= config.app %>/', // cwd��ʾԴĿ¼��ע������и�б�ܣ�
				src: '*.html',
				dest: '<%= config.server %>/',
				ext: '.min.js', // ext��ʾĿ���ļ��Ƿ���Ҫ�ĺ�׺��
				extDot: 'first' // extDot��ʾ�����￪ʼ�ĺ�׺����first��ʾ�ӵ�һ����(.)�������Щ�޸�,Ҳ��last��Ϊ������
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

//�����ָ��Ʒ�ʽ;
copy: {
	dist:{
		files: {

			//key��Ŀ���ַ��value��Դ��ַ
			'<%= config.server %>/index.html' : '<%= config.app %>/index.html',
			'<%= config.server %>/index.js' : '<%= config.app %>/index.js'
		}
	}
}


//clean��ʽ��������ֻ���ļ�������û��dist
clean: {
	dist: {
		src: ['<%= config.server %>/html/index.html'],
		src: ['<%= config.server %>**/*'], // *��ʾƥ�������ַ������ǲ�ƥ�䷴б�ܣ� 
										   // ? ��ʾֻƥ��һ���ַ������ǲ�ƥ�䷴б�ܣ�
										   // ** ��ʾ���������������ַ���������б�ܡ�
	}
}

//ʹ��filter��ɾ���Ķ������й���

clean: {
	dist: {
		src: ['<%= config.server %>**/*'],
		filter: 'isFile' // ���filter����ֻ��ɾ���ļ�����ɾ���ļ���
		filter: function(filepath){
			return (!grunt.file.isDir(filepath)); //��������������true����ɾ����false�Ͳ�ɾ�����������������ж��Ƿ����ļ���
		},
		dot: true, // �����ʾֻ�������ԡ�.����ͷ���ļ���
		expand:true, // ��ʾҪ����̬��src��dest���ļ�ӳ�䣻
	}
}