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
- create table sure5(  
   id  int,  
   name varchar(20),
   unique(name,id)
  );
  > 如何删除唯一约束
- alter table sure6 drop index name;
> modify 添加
- alter table sure6 modify name varchar(20) unique;
> 总结：
1. 建表的时候就添加约束
2. 可以使用 alter...add...
4. alter...modif...
5. 删除 alter...drop...
> 非空约束：修饰的字段不能为NULL（空）
- create table user7(  
  id int,  
  name varchar(20) not null  
  );
> 默认约束:当我们插入字段值的时候，如果没有传值，就会使用默认值
- create table sure8(  
  id int,  
  name varchar(20),  
  age int default 10  
);
+ insert into sure8 (id,name) values(1,'zhangsan');
- 传了值，就不会使用默认值
+ insert into sure8 values(1,'zhangsan',16);
> 外键约束：涉及到两个表：父表，子表  
> 主表，副表  
- 班级
+ create table classes(  
  id int primary key,  
  name varchar(20)  
);
- 学生表
+  create table students(  
    -> id int primary key,  
    -> name varchar(20),  
    -> class_id int,  
    -> foreign key(class_id) references classes(id)  
    -> );
- insert into classes values(1,'一班')
- insert into classes values(2,'一班')
- insert into classes values(3,'一班')
- insert into classes values(4,'一班')
+ insert into students values(1001,'张三',1);
+ insert into students values(1002,'张三',2);
+ insert into students values(1003,'张三',3);
+ insert into students values(1004,'张三',4);
- <font color="red">
错误代码:insert into students values(1005,'李四',5);  
报错内容: ERROR 1452 (23000): Cannot add or update a child row: a foreign key constraint fails (`test`.`students`, CONSTRAINT `students_ibfk_1` FOREIGN KEY (`class_id`) REFERENCES `classes` (`id`))
</font>
- ### 结论
<font color="blue"> 1. 主表classes 中没有的数据值，在副表中，是不可以使用的。  
2. 主表中的记录被附表引用，是不可以被删除的</font>
> ## 数据库的设计范式
> 第一范式：1NF
- 表中的所有的字段都是不可分割的原子值？
+ create table student2(  
  id int primary key,  
  name varchar(20),  
  address varchar(30)  
);
<br>
insert into student2 values(1,'张三','中国四川省成都是武侯区武侯大道100号');  
insert into student2 values(2,'李四','中国四川省成都市武侯区京城大道200号');  
insert into student2 values(3,'王五','中国四川成都市高新区天府大道90号');  
- <font color="blue">字段值还可以继续拆分的，就不满足第一范式</font>
+ create table student3(  
  id int primary key,  
  name varchar(20),  
  cuntry varchar(30),  
  privence varchar(30),
  city varchar(30),
  details varchar(30)
);  
insert into student3 values(1,'张三','中国','四川省','成都市','武侯区武侯大道100号');  
insert into student3 values(2,'李四','中国','四川省','成都市','武侯区京城大道200号');  
insert into student3 values(3,'王五','中国','四川省','成都市','高新区天府大道90号');
<font color="blue">
-  范式，设计的越详细，对于某些实际操作可能更好，但不一定是好处  
</font>
> 第二范式：必须是满足第一范式的前提下，第二范式要求，除主键外的每一列都必须完全依赖与主键。如果出现不完全依赖，只可能发生在联合主键的情况下。
- 订单表
+ create table myorder(  
  product_id int,  
  customer_id int,  
  product_name varchar(20),  
  customer_name vachar(20),  
  primary key(product_id,customer_id)  
);
<font color="red">
- 除组件以外的其他列，只依赖与主键的部分字段。
- 拆表
</font>
+ create table myorder(  
  order_id int primary key,  
  product_id int,  
  customer_id int  
);  
<br>
create table product(  
  id int primary key,  
  name varchar(20)  
);  <br>
create table customer(  
  id int primary key,  
  name varchar(20)  
);
- 分成三个表之后，就满足第二范式的设计
> 第三范式 （3NF）：必须满足第为范式，除开主键的其他列之间不能有传递依赖关系
- create table myorder(  
  order_id int primary key,  
  product_id int,  
  customer_id int  
);
<br>
create table customer(  
  id int primary key,  
  name varchar(20),  
  phone varchar(15)  
);
- 第三范式不能有传递依赖
<!-- > 查询练习
- 学生表  
student  
学号  
姓名  
性别  
出生年月日  
所在班级  

+ 课程表  
Course   
课程号  
课程名称  
教师编号  
- 成绩表  
Score  
学号  
课程号  
成绩  
+ 教师表
Teacher  
教师编号  
教师性别  
出生年月日  
职称  
所在部门   -->
