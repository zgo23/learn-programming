delimiter //
CREATE FUNCTION add_numbers (first_num int, second_num int)
RETURNS int

BEGIN
declare sum int;
set sum = first_num + second_num;
return sum;

END; //
delimiter ;
