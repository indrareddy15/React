create table Products (ProductID int , ProductName varchar(255) , Category varchar(255), Price decimal(10 , 2), Stock int, Supplier Varchar(255), Rating Decimal(2,1) , ReleaseDate Date, WarrantyPeriod varchar(255) , Remarks Text)

select * from Products

insert into Products values 
(1, 'Wireless Mouse', 'Electronics', 25.99, 150, 'Tech Supplies Co.', 4.5, '2023-01-15', '1 year', 'Ergonomic wireless mouse.'),
(2, 'Bluetooth Speaker', 'Electronics', 49.99, 75, 'Sound World Inc.', 4.7, '2023-03-20', '2 years', 'Portable, waterproof speaker.'),
(3, 'Gaming Headset', 'Accessories', 89.99, 50, 'Gamer''s Paradise', 4.8, '2023-05-10', '1 year', 'Surround sound headset.'),
(4, 'Smartwatch', 'Wearables', 199.99, 30, 'Wearable Tech Ltd.', 4.6, '2023-07-25', '2 years', 'Tracks fitness and notifications.'),
(5, 'USB-C Hub', 'Computer Accessories', 39.99, 100, 'ConnectPro', 4.2, '2023-02-12', '1 year', 'Multi-port USB-C hub.'),
(6, 'Portable Charger', 'Electronics', 29.99, 200, 'Charge Tech', 4.3, '2023-04-18', '1 year', 'High-capacity power bank.'),
(7, '4K Monitor', 'Electronics', 299.99, 20, 'Display Solutions', 4.9, '2023-06-30', '3 years', 'Ultra HD, 27-inch monitor.'),
(8, 'Fitness Tracker', 'Wearables', 79.99, 60, 'Active Life Inc.', 4.5, '2023-08-05', '1 year', 'Monitors heart rate and activity.'),
(9, 'Noise-Canceling Headphones', 'Accessories', 129.99, 40, 'Audio Elite', 4.6, '2023-09-12', '2 years', 'Comfortable with superior sound quality.'),
(10, 'Wireless Earbuds', 'Accessories', 89.99, 80, 'Sound Wave Co.', 4.4, '2023-03-15', '1 year', 'Sleek design with great sound.');

select * from Products where Rating between 4.5 and 4.9 

select count(distinct Price) from Products

select distinct Price from Products

select * from Products where Stock > 75

select * from Products where Stock between  100 and 200

select distinct Stock from Products

select * from Products order by Price desc
select * from Products order by ProductName

select * from Products where WarrantyPeriod >= '3 years'

select * from Products Order By Price Asc, WarrantyPeriod desc

