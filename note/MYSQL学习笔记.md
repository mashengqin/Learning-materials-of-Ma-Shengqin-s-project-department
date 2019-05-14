# MYSQL 学习笔记
> ## 关系性数据库
---
## 一、如何使用终端数据库？
> 1. 如何登录数据库服务器？
- Enter password:后面直接输密码
> 2. 如何查询数据库服务器中所有的数据库
- show databases;
> 如何退出数据库服务器
- exit;
> 如何在数据库服务器中创建我们的数据库？
- create database test;
> 如何查看某个数据库中所有数据列表？
- show tables;
> 如何创建一个数据表？
- CREATE TABLE pet (  
  name VARCHAR(20),  
  owner VARCHAR(20),  
  species VARCHAR(20),   
  sex CHAR(1),  
  birth DATE,  
  death DATE  
  );
> 查看数据表是否创建成功  
- show tables;
> 查看创建好的数据表的结构
- describe pet;  
  describe = desc
> 如何查看数据表中的记录？
- select * from pet;
> 如何往数据表中添加数据记录？
- INSERT INTO pet  
  VALUES ('puffball,'Diane','hamster','f','1999-03-30',NULL);
>再一次查询？
- select*from pet;
>mysql 常用数据类型有哪些？
- MYSQL支持多种类型，大致可以分成三类：
- create table testType(  
    number TINYINT  
    );  
  
  
  INSERT INTO testType VALUES(127);
1. 数值
2. 日期/时间
3. 字符串（字符）类型
> 数据类型如何选择？
- 日期选择按照格式，数值和字符串选择按照大小。
> 如何增加表格？
- insert into pet values('','','','','');
> 如何删除表格内容？
- delete from pet where name='';
> 如何修改数据？
- update (表格文件名) set name = '' where owner='';
> 总结一下：数据记录常见操作
- 增加：INSERT
+ 删除：DELETE
- 修改：UPDATE
+ 查询：SELECT
------
------
------
> MySQL建表约束
------
> 主键约束
- 它能够唯一确定一张表中的一条记录，也就是我们通过给某个字段添加约束，就可以使得改字段，不重复且不为空。
+ create table suer（  
        id int primary key,  
        name varchar(20)    
        );

- 查看刚刚创建的suer表格结构：describe sure;
+ 添加内容：insert into sure values(1,'张三');
> 联合主键  
> 只要联合的主键值加起来不重复就可以  
> 联合主键前门的值不能为null
- create table sure2(  
  id int,  
  name varchar(20),  
  password varchar(20),  
  primary key(id,name)  
);
+ insert into sure2 values(1,'张三','123');
- insert into sure2 values(2,'张三','123');
> 自增约束
> auto_increment管控id的值让他可以自动增长
- create tablw sure3(  
  id int primary key auto_increment,
  name varchar(20)  
  );
+ insert into sure3 (name) values('张三');
> 如果我们创建表的时候，忘记创建组件约束怎么办？
+ create table sure4(
  id int,
  name varchar(20)
  );
- 修改表结构添加组件元素：alter table sure4 add primary key(id);
+ 删除组件元素：alter table sure4 drop primary key;
> 使用modify修改字段，添加约束
- alter table sure4 modify id int primary key;
> 唯一约束：约束修饰的字段的值不可以重复
- create table sure5(  
   id  int,  
   name varchar(20)
  );
+ alter table sure5 add unique(name);