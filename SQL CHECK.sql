use hospital_management;

/* Role Table */
select * from user_roles;

UPDATE user_roles
SET role_name = "USER_ADMIN", role_description = "Admin Permisstions"
WHERE role_id=4;

/* Reg_User Table */
SELECT * FROM reg_users;

UPDATE reg_users
SET
  first_name = 'new_first_name',
  last_name = 'new_last_name',
  user_address = 'new_user_address',
  gender = 'new_gender',
  user_age = 25,
  user_contact = 'new_user_contact',
  user_email = 'new_user_email',
  user_emergency_contact = 'new_user_emergency_contact',
  user_name = 'new_user_name',
  user_password = 'new_user_password',
  role_id = 1
WHERE
  reg_no = 12;


/* Get Users With Role Name*/
SELECT u.reg_no, u.first_name, u.last_name, u.gender, u.user_address,u.user_age, u.user_contact, u.user_email, u.user_emergency_contact, user_roles.role_name
FROM reg_users u
INNER JOIN user_roles ON u.role_id = user_roles.role_id;

SELECT DISTINCT role_id FROM reg_users;
SELECT DISTINCT role_id FROM user_roles;

select * from reg_users;

SELECT reg_users.user_name, reg_users.user_password, user_roles.role_name
FROM reg_users
JOIN user_roles ON reg_users.role_id = user_roles.role_id
WHERE reg_users.user_name = "Janith@0314";
