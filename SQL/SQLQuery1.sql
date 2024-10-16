use PraticeDB

select * from Persons

alter table Persons Add Gender varchar(225)

select distinct Gender from Persons

insert into Persons values 
(1, 'John', 'Doe', 'john.doe@example.com', '123 Main St', 'Anytown', 'Male'),
(2, 'Jane', 'Smith', 'jane.smith@example.com', '456 Elm St', 'Othertown', 'Female'),
(3, 'Alice', 'Johnson', 'alice.johnson@example.com', '789 Oak St', 'Sometown', 'Female'),
(4, 'Bob', 'Brown', 'bob.brown@example.com', '321 Pine St', 'Yourtown', 'Male'),
(5, 'Charlie', 'Davis', 'charlie.davis@example.com', '654 Maple St', 'Newtown', 'Male'),
(6, 'Diana', 'Wilson', 'diana.wilson@example.com', '987 Birch St', 'Oldtown', 'Female'),
(7, 'Ethan', 'Moore', 'ethan.moore@example.com', '159 Cedar St', 'Bigcity', 'Male'),
(8, 'Fiona', 'Taylor', 'fiona.taylor@example.com', '753 Spruce St', 'Smalltown', 'Female'),
(9, 'George', 'Anderson', 'george.anderson@example.com', '951 Willow St', 'Middletown', 'Male'),
(10, 'Hannah', 'Thomas', 'hannah.thomas@example.com', '258 Poplar St', 'Littletown', 'Female');


create table Customers (CustomerID int, CustomerName varchar(255), ContactName varchar(255), Address varchar(255), City varchar(255), PostalCode int , Country varchar(255))

insert into Customers values 
(1, 'John Doe', 'Jane Doe', '123 Elm St', 'Springfield', 12345, 'USA'),
(2, 'Alice Smith', 'Bob Smith', '456 Oak Ave', 'Metropolis', 23456, 'USA'),
(3, 'Charlie Brown', 'Lucy Van Pelt', '789 Pine Rd', 'Gotham', 34567, 'USA'),
(4, 'David Johnson', 'Emily Johnson', '321 Birch Blvd', 'Smalltown', 45678, 'USA'),
(5, 'Eva Green', 'Frank Green', '654 Cedar Dr', 'Big City', 56789, 'USA'),
(6, 'George White', 'Hannah White', '987 Maple Ln', 'Oldtown', 67890, 'USA'),
(7, 'Isabella Black', 'Jack Black', '159 Spruce Ct', 'Newtown', 78901, 'USA'),
(8, 'James Miller', 'Karen Miller', '753 Willow Way', 'Eastville', 89012, 'USA'),
(9, 'Laura Davis', 'Mark Davis', '258 Redwood St', 'Westport', 90123, 'USA'),
(10, 'Mike Wilson', 'Nina Wilson', '369 Chestnut Ave', 'Southcity', 12346, 'USA');

select * from Customers

select distinct Country from Customers

select count(distinct Country) from Customers

select distinct City from Persons 

select count(distinct City) from Persons

select * from Customers where City = 'Newtown'

select * from Customers where CustomerID >= 5

select * from Customers where City in ('Newtown' , 'Southcity')

select * from Persons where LastName between 'Moore' and 'Thomas'




